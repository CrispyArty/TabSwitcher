/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/popup/iframeListeners.ts ***!
  \**************************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaWZyYW1lX2xpc3RlbmVycy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSx1REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw0Q0FBNEM7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpQ0FBaUMsbUVBQW1FO0FBQ3BHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci8uL3NyYy9wb3B1cC9pZnJhbWVMaXN0ZW5lcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vZXZlbnRCdXMnO1xuLy8gd2luZG93LkFwcEJhY2tncm91bmRQb3J0ID0gY2hyb21lLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6ICdwb3B1cC1jb25uZWN0aW9uJyB9KTtcbi8vIHdpbmRvdy5BcHBFdmVudEJ1cyA9IG5ldyBFdmVudEJ1cygpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygna2V5dXAnLCBldmVudC5rZXkpO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbmFtZTogJ2lmcmFtZS1wb3B1cC1rZXl1cCcsIGtleTogZXZlbnQua2V5IH0pO1xuICAgIC8vIGlmIChldmVudC5rZXkgPT09ICdDb250cm9sJyB8fCBldmVudC5rZXkgPT09ICdNZXRhJykge1xuICAgIC8vICAgd2luZG93LkFwcEV2ZW50QnVzLmVtaXQoJ2NvbnRyb2wta2V5dXAnKTtcbiAgICAvLyB9XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygna2V5ZG93bicsIGV2ZW50LmtleSk7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBuYW1lOiAnaWZyYW1lLXBvcHVwLWtleWRvd24nLCBrZXk6IGV2ZW50LmtleSwgY3RybDogZXZlbnQuY3RybEtleSB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9