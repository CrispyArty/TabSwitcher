/******/ (() => { // webpackBootstrap
/*!*****************************!*\
  !*** ./src/inject/index.ts ***!
  \*****************************/
window.addEventListener('keyup', (event) => {
    console.log('event', event, event.key);
    if (event.key === 'Control' || event.key === 'Meta') {
        // console.log('event', event, chrome.runtime);
        try {
            chrome.runtime.sendMessage({ name: 'inject-ctrl-keyup', key: event.key });
        }
        catch (e) {
            console.log('error', e, e.name, e.message);
        }
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5qZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDJDQUEyQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdGFiLXN3aXRjaGVyLy4vc3JjL2luamVjdC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudCwgZXZlbnQua2V5KTtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQ29udHJvbCcgfHwgZXZlbnQua2V5ID09PSAnTWV0YScpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQsIGNocm9tZS5ydW50aW1lKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbmFtZTogJ2luamVjdC1jdHJsLWtleXVwJywga2V5OiBldmVudC5rZXkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGUsIGUubmFtZSwgZS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9