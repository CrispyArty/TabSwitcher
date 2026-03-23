import { EventMessage } from '@/popup/types';

type TabList = Array<chrome.tabs.Tab>;

let isOpen = false;
let windowId: number | undefined = undefined;
let _tabs: TabList = [];
let openPopupDelayId: NodeJS.Timeout;
let initialTabIndex: number = 1;

function sendMessage(message: EventMessage) {
  return chrome.runtime.sendMessage(message);
}

function cleanUp() {
  isOpen = false;
  windowId = undefined;
  _tabs = [];
  openPopupDelayId = undefined;
  initialTabIndex = 1;
  chrome.runtime.onMessage.removeListener(fastCtrlUpHandler);
  sendMessage({ name: 'close-popup' }).catch(() => {});
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

function changeTab(tabId: number) {
  chrome.tabs.update(tabId, { active: true });
  cleanUp();
}

chrome.runtime.onMessage.addListener((message: EventMessage) => {
  // console.log('----log', message);
  if (message.name === 'tab-change') {
    changeTab(message.tabId as number);
  }
});

async function getOrderTabs(windowId: number) {
  if (_tabs.length > 0) {
    return _tabs;
  }

  _tabs = await chrome.tabs.query({ windowId });
  _tabs.sort((a, b) => b.lastAccessed - a.lastAccessed);

  return _tabs;
}

const fastCtrlUpHandler = (message: EventMessage) => {
  if (message.name === 'inject-ctrl-keyup') {
    clearTimeout(openPopupDelayId);

    getOrderTabs(windowId).then((tabs: TabList) => {
      changeTab(tabs[1].id);
    });
  }
  return true;
};

const commandMap = {
  next: (tab: chrome.tabs.Tab) => {
    if (!isOpen) {
      windowId = tab.windowId;

      // Listen for fast ctrl keyup event from injected script
      chrome.runtime.onMessage.addListener(fastCtrlUpHandler);

      getOrderTabs(windowId).then((tabs: TabList) => {
        chrome.storage.session.set({ orderTabs: tabs });
      });

      openPopupDelayId = setTimeout(() => {
        chrome.action.openPopup({ windowId: windowId }).then(() => {
          sendMessage({ name: 'initial-tab-index', index: initialTabIndex });
        });
      }, 100);
    } else {
      // If multiple presses happened before popup open, popup will open with correct focused tab
      initialTabIndex++;
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
