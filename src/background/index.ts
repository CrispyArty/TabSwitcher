let isOpen,
  fastCtrl = false;

function cleanUp() {
  console.log('cleanUp');
  isOpen = fastCtrl = false;
  chrome.runtime.onMessage.removeListener(fastCtrlUpHandler);
}

chrome.runtime.onConnect.addListener((port) => {
  let reload = false;

  if (port.name === 'popup-connection') {
    port.onMessage.addListener((message) => {
      if (message === 'reload') {
        reload = true;
      }
    });
    port.onDisconnect.addListener(() => {
      if (!reload) {
        cleanUp();
      }
    });
  }
});

chrome.runtime.onMessage.addListener((message) => {
  console.log('----log', message);

  if (message.name === 'tab-change') {
    chrome.tabs.update(message.tabId, { active: true });
    cleanUp();
  }
});

async function getOrderTabs(windowId: number) {
  const tabs = await chrome.tabs.query({ windowId });
  tabs.sort((a, b) => b.lastAccessed - a.lastAccessed);

  return tabs;
}

const fastCtrlUpHandler = (message) => {
  if (message.name === 'inject-ctrl-keyup') {
    fastCtrl = true;
    console.log(message.name, message.key);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handlerPopup = (_command: string, tab: chrome.tabs.Tab) => {
  // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //   console.log('--tabs', tabs);
  // });

  if (!isOpen) {
    // Listen for fast ctrl keyup event from injected script
    chrome.runtime.onMessage.addListener(fastCtrlUpHandler);

    getOrderTabs(tab.windowId).then((tabs) => {
      chrome.storage.session.set({ orderTabs: tabs });
    });

    chrome.action
      .openPopup({
        windowId: tab.windowId,
      })
      .then(() => {
        if (fastCtrl) {
          console.log('fastCtrl', fastCtrl);
          // Notify popup on creation that ctrl already been released
          chrome.runtime.sendMessage('fast-ctrlup').catch(() => {});
        }
      });
  } else {
    // chrome.windows.update(tab.windowId, { focused: true }).then(() => {
    //   chrome.action.setPopup({ popup: 'popup.html' }).then(() => {
    //     chrome.action.openPopup({ windowId: tab.windowId });
    //   });
    // });
    //
    // chrome.runtime.sendMessage('closePopup');
  }

  isOpen = true;

  // Send event to popup on multiple presses
  chrome.runtime.sendMessage('focus-next-tab').catch(() => {});

  return true;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handlerWindow = (_command: string, tab: chrome.tabs.Tab) => {
  if (!isOpen) {
    // Listen for fast ctrl keyup event from injected script
    chrome.runtime.onMessage.addListener(fastCtrlUpHandler);

    getOrderTabs(tab.windowId).then((tabs) => {
      chrome.storage.session.set({ orderTabs: tabs });
    });

    chrome.windows.get(tab.windowId).then((wind) => {
      const width = 500;
      const height = 600;
      const left = Math.round(wind.width / 2 - width / 2) + wind.left;
      const top = wind.top + 60;

      chrome.windows
        .create({
          left: left,
          top: top,
          width: width,
          height: height,
          focused: true,
          type: 'popup',
          url: 'popup.html',
        })
        .then((win) => {
          console.log('open-window', win);

          if (fastCtrl) {
            console.log('fastCtrl', fastCtrl);
            // Notify window on creation that ctrl already been released
            chrome.runtime.sendMessage('fast-ctrlup').catch(() => {});
          }
        });
    });
  }

  // Send event to popup on multiple presses
  chrome.runtime.sendMessage('focus-next-tab').catch(() => {});

  isOpen = true;

  return true;
};

chrome.commands.onCommand.addListener(handlerPopup);
// chrome.commands.onCommand.addListener(handlerWindow);
