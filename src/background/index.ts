import { EventMessage } from '@/popup/types';

let isOpen = false;
let fastCtrl = false;

function cleanUp() {
  // console.log('cleanUp');
  isOpen = fastCtrl = false;
  chrome.runtime.onMessage.removeListener(fastCtrlUpHandler);
}

function sendMessage(message: EventMessage) {
  return chrome.runtime.sendMessage(message);
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

chrome.runtime.onMessage.addListener((message: EventMessage) => {
  // console.log('----log', message);

  if (message.name === 'tab-change') {
    chrome.tabs.update(message.tabId as number, { active: true });
    cleanUp();
  }
});

async function getOrderTabs(windowId: number) {
  const tabs = await chrome.tabs.query({ windowId });
  tabs.sort((a, b) => b.lastAccessed - a.lastAccessed);

  return tabs;
}

const fastCtrlUpHandler = (message: EventMessage) => {
  if (message.name === 'inject-ctrl-keyup') {
    fastCtrl = true;
    // console.log(message.name, message.key);
  }
};

const commandMap = {
  next: (tab: chrome.tabs.Tab) => {
    if (!isOpen) {
      // Listen for fast ctrl keyup event from injected script
      chrome.runtime.onMessage.addListener(fastCtrlUpHandler);

      getOrderTabs(tab.windowId).then((tabs) => {
        chrome.storage.session.set({ orderTabs: tabs });
      });

      chrome.action.openPopup({ windowId: tab.windowId }).then(() => {
        if (fastCtrl) {
          // Notify popup on creation that ctrl already been released
          sendMessage({ name: 'fast-ctrlup' }).catch(() => {});
        }
      });
    } else {
      // Send event to popup on multiple presses
      sendMessage({ name: 'focus-next-tab' }).catch(() => {});
    }

    isOpen = true;
  },
  prev: () => {
    if (isOpen) {
      sendMessage({ name: 'focus-prev-tab' }).catch(() => {});
    }
  },
};

const commandHandler = (command: string, tab: chrome.tabs.Tab) => {
  if (commandMap[command]) {
    commandMap[command](tab);
  }
};

chrome.commands.onCommand.addListener(commandHandler);
