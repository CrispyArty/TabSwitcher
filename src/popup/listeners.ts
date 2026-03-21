import EventBus from './eventBus';

window.AppBackgroundPort = chrome.runtime.connect({ name: 'popup-connection' });
window.AppEventBus = new EventBus();

(function restoreHeight() {
  const height = window.sessionStorage.getItem('popupHeight');

  if (height) {
    document.documentElement.style.minHeight = height;
  }
})();

document.addEventListener('keyup', (event) => {
  // console.log('keyup', event.key);
  chrome.runtime.sendMessage({ name: 'document-popup-keyup', key: event.key });
  if (event.key === 'Control' || event.key === 'Meta') {
    window.AppEventBus.emit('control-keyup');
  }
});

chrome.runtime.onMessage.addListener((message) => {
  // console.log('---------event', message);
  if (message === 'fast-ctrlup') {
    // console.log('tab-change1', message, chrome.windows);
    window.AppEventBus.emit('control-keyup');
  }

  if (message === 'closePopup') {
    // window.sessionStorage.setItem('snapshot', document.body.innerHTML);
    // window.sessionStorage.setItem('popupHeight', document.body.scrollHeight + 'px');
    // window.AppBackgroundPort.disconnect();
    // window.location.reload();
    //
    // document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Unidentified', bubbles: true }));
    // const iframe = document.getElementById('content') as HTMLIFrameElement;
    // iframe.src = 'iframe.html?' + Date.now();
    // iframe.contentWindow?.focus();
    //
    // const script = document.createElement('script');
    // document.head.appendChild(script);
    // document.head.removeChild(script);
    //
    // const fresh = document.body.cloneNode(true);
    // document.body.replaceWith(fresh);
    //
    // document.addEventListener('keyup', (event) => {
    //   chrome.runtime.sendMessage({ name: 'document-closePopup-popup-keyup', key: event.key });
    // });
    //
    // window.addEventListener('keyup', (event) => {
    //   chrome.runtime.sendMessage({ name: 'window-closePopup-popup-keyup', key: event.key });
    // });
    //
    // const iframe: HTMLIFrameElement = document.querySelector('#event-iframe > iframe');
    // setTimeout(() => {
    //   iframe.contentWindow?.location.reload();
    //   iframe.contentWindow?.focus();
    // }, 1000);
    //
    // refreshIframe();
    // chrome.runtime.sendMessage({ name: '=====window.location.href', event: window.location.href });
    // console.log('window.location.href', window.location.href);
    // window.location.href = window.location.href + '?page=2';
    // document.documentElement.style.minHeight = `${window.innerHeight}px`;
    // window.focus();
  }
});

// window.addEventListener('keyup', (event) => {
//   // console.log('keyup', event.key);
//   chrome.runtime.sendMessage({ name: 'window-popup-keyup', key: event.key });
// });

// document.addEventListener('keydown', (event) => {
//   // console.log('keydown', event.key);
//   chrome.runtime.sendMessage({ name: 'popup-keydown', key: event.key, ctrl: event.ctrlKey });
// });

// document.addEventListener('blur', (event) => {
//   chrome.runtime.sendMessage({ name: '=====blur', event: event });
// });

// document.addEventListener('focus', (event) => {
//   chrome.runtime.sendMessage({ name: '=====focus', event: event });
// });

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function refreshIframe() {
//   const container = document.querySelector('#event-iframe');
//   container.innerHTML = '';

//   const iframe = document.createElement('iframe');
//   iframe.width = '200';
//   iframe.height = '40';
//   iframe.style.border = '1px solid black';
//   iframe.id = 'my-dynamic-iframe';
//   iframe.src = 'iframe.html?' + Date.now();

//   container.appendChild(iframe);
//   const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

//   chrome.runtime.sendMessage({ name: '=====iframeDoc', event: iframeDoc });
//   if (iframeDoc) {
//     iframe.contentWindow.focus();

//     // iframeDoc.addEventListener('keydown', (event) => {
//     //   // console.log('keydown', event.key);
//     //   // chrome.runtime.sendMessage({ name: 'popup-keydown', key: event.key, ctrl: event.ctrlKey });
//     // });
//   }
// }

// window.addEventListener('mousemove', (event) => {
//   // console.log('keydown', event.key);
//   chrome.runtime.sendMessage({ name: 'window-popup-mousemove', event: event, ctrl: event.ctrlKey });
// });

// document.addEventListener('mousemove', (event) => {
//   // console.log('keydown', event.key);
//   chrome.runtime.sendMessage({
//     name: 'document-popup-mousemove',
//     event: event,
//     ctrl: event.ctrlKey,
//   });
// });

// window.addEventListener("focus", () => {
//   requestAnimationFrame(() => {
//     // Check on next frame
//   });
// });

// document.addEventListener('keydown', function (e) {
//   if ((e.ctrlKey || e.metaKey) && e.key === 'q') {
//     e.preventDefault();
//     console.log('Ctrl+C intercepted!');
//   }
// });
