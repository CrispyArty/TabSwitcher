// import { addKeyEvent } from './inject';

// chrome.action.onClicked.addListener(async (tab) => {
//   console.log('click', tab, chrome.tabs);
// });

// chrome.commands.onCommand.addListener((command, tab) => {
//   console.log('Command', command, tab, chrome);

//   // chrome.windows.create({ type: 'normal' });
//   // chrome.windows.create({ focused: true, type: 'popup', url: 'window.html' }).then((res) => {
//   //   console.log('res', res);
//   // });
//   // chrome.windows.create({ type: 'panel' });

//   chrome.scripting
//     .executeScript({
//       target: { tabId: tab.id },
//       func: addKeyEvent,
//     })
//     .then(() => console.log('script injected on target frames'));
// });

// async function changeTab(tabId) {
//   chrome.tabs.update(tabId, { active: true });

//   return 'Changed!';
// }

let popupOpen = false;

chrome.runtime.onMessage.addListener((message) => {
  if (message.name === 'tab-change') {
    console.log('tab-change', message, chrome.windows);
    popupOpen = false;

    chrome.tabs.update(message.tabId, { active: true });
  }

  return true;
});

// console.log('background');

async function getOrderTabs() {
  const wind = await chrome.windows.getCurrent();
  const tabs = await chrome.tabs.query({ windowId: wind.id });
  tabs.sort((a, b) => b.lastAccessed - a.lastAccessed);

  return tabs;
}

const handlerPopup = (command: string, tab: chrome.tabs.Tab) => {
  // chrome.commands.onCommand.removeListener(handler);
  // chrome.action.disable();
  console.log('chrome.action', chrome.action, chrome.commands, command, tab);

  if (popupOpen) {
    chrome.runtime.sendMessage('focus-next-tab');

    getOrderTabs().then((tabs) => {
      chrome.storage.session.set({ orderTabs: tabs });
    });
  }

  popupOpen = true;

  chrome.action
    .openPopup({
      windowId: tab.windowId,
    })
    .catch((err) => {
      console.log('openPopup error', err);
    });

  // chrome.windows.getCurrent().then((w) => {
  //   console.log('wind', w, w.focused);
  // });

  // console.log('windowId', tab.windowId, chrome.windows);

  // chrome.windows.update(tab.windowId, { focused: true }).then(() => {
  //   console.log('openPopup()');
  // });

  // chrome.sidePanel.open({ windowId: tab.windowId });

  // chrome.sidePanel.setOptions({
  //   tabId: tab.id,
  //   path: 'window.html',
  //   enabled: true,
  // });

  return true;
};

// const handlerWindow = (command: string, tab: chrome.tabs.Tab) => {
//   console.log('chrome.action', chrome.action, chrome.commands, command, tab);

//   if (!isOpen) {
//     isOpen = true;
//     chrome.windows.create({ focused: true, type: 'popup', url: 'window.html' }).then((res) => {
//       console.log('res', res);
//     });
//   }
//   // chrome.windows.create({ type: 'normal' });

//   // chrome.windows.create({ type: 'panel' });
//   return true;
// };

chrome.commands.onCommand.addListener(handlerPopup);
