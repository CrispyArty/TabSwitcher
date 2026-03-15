// import { addKeyEvent } from './inject';

chrome.action.onClicked.addListener(async (tab) => {
  console.log('click', tab, chrome.tabs);
});

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

async function changeTab() {
  const window = await chrome.windows.getCurrent();
  const tabs = await chrome.tabs.query({ windowId: window.id });
  // tabs.sort((a, b) => b.lastAccessed - a.lastAccessed);

  chrome.tabs.update(tabs[0].id, { active: true });

  return 'Changed!';
}

chrome.runtime.onMessage.addListener((event, _sender, sendResponse) => {
  console.log('---------onMessage-event', event, sendResponse);

  if (event === 'ctrl-keyup') {
    console.log('message1-ctrl-keyup', event, chrome.windows);
    changeTab().then(sendResponse);
  }

  return true;
});

console.log('background');
let isOpen = false;

const handler = (command: string, tab: chrome.tabs.Tab) => {
  // chrome.commands.onCommand.removeListener(handler);
  // chrome.action.disable();
  console.log('chrome.action', chrome.action, chrome.commands, command, tab);

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

  if (!isOpen) {
    isOpen = false;
    chrome.action
      .openPopup({
        windowId: tab.windowId,
      })
      .then(() => {
        // chrome.action.disable();
      })
      .catch((err) => {
        console.log('openPopup error', err);
      });
  }

  return true;
};

chrome.commands.onCommand.addListener(handler);

// chrome.commands.onCommand.addListener((command, tab) => {
//   console.log('chrome.action', chrome.action, command, tab);
//   chrome.sidePanel.open({ windowId: tab.windowId });

//   setTimeout(() => {
//     chrome.sidePanel.close({ windowId: tab.windowId });
//   }, 2000);

//   // chrome.action.openPopup();
// });

// chrome.sidePanel
//   .setPanelBehavior({ openPanelOnActionClick: true })
//   .catch((error) => console.error(error));

// chrome.action.openPopup()
