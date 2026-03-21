// import EventBus from './eventBus';

// window.AppBackgroundPort = chrome.runtime.connect({ name: 'popup-connection' });

// window.AppEventBus = new EventBus();

document.addEventListener('keyup', (event) => {
  // console.log('keyup', event.key);
  chrome.runtime.sendMessage({ name: 'iframe-popup-keyup', key: event.key });
  // if (event.key === 'Control' || event.key === 'Meta') {
  //   window.AppEventBus.emit('control-keyup');
  // }
});

document.addEventListener('keydown', (event) => {
  // console.log('keydown', event.key);
  chrome.runtime.sendMessage({ name: 'iframe-popup-keydown', key: event.key, ctrl: event.ctrlKey });
});
