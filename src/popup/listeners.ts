import EventBus from './eventBus';
import { EventMessage } from './types';

window.AppBackgroundPort = chrome.runtime.connect({ name: 'popup-connection' });
window.AppEventBus = new EventBus();

(function restoreHeight() {
  const height = window.sessionStorage.getItem('popupHeight');

  if (height) {
    document.documentElement.style.minHeight = height;
  }
})();

document.addEventListener('keyup', (event) => {
  chrome.runtime.sendMessage({ name: 'document-popup-keyup', key: event.key });
  if (event.key === 'Control' || event.key === 'Meta') {
    window.AppEventBus.emit('control-keyup');
  }
});

chrome.runtime.onMessage.addListener((message: EventMessage) => {
  if (message.name === 'fast-ctrlup') {
    window.AppEventBus.emit('control-keyup');
  }
});

// document.addEventListener('keydown', function (e) {
//   if ((e.ctrlKey || e.metaKey) && e.key === 'q') {
//     e.preventDefault();
//     console.log('Ctrl+C intercepted!');
//   }
// });

// window.addEventListener('mousemove', (event) => {
//   // console.log('keydown', event.key);
//   chrome.runtime.sendMessage({ name: 'window-popup-mousemove', event: event, ctrl: event.ctrlKey });
// });
