/******/ (() => { // webpackBootstrap
/*!*****************************!*\
  !*** ./src/window/index.ts ***!
  \*****************************/
// chrome.runtime.sendMessage('InitWindow');
window.addEventListener('keyup', (event) => {
    console.log('event-keyup', event.key, event);
    // chrome.runtime.sendMessage(event.key);
    chrome.runtime.sendMessage(`side-panel-ctrl-keyup-${event.key}`).then((res) => {
        console.log('window.close()', res);
    });
});
window.addEventListener('keydown', (event) => {
    console.log('event-keydown', event.key, event);
    // chrome.runtime.sendMessage(event.key);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvd2luZG93LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxVQUFVO0FBQ2xFO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10YWItc3dpdGNoZXIvLi9zcmMvd2luZG93L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKCdJbml0V2luZG93Jyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQta2V5dXAnLCBldmVudC5rZXksIGV2ZW50KTtcbiAgICAvLyBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShldmVudC5rZXkpO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKGBzaWRlLXBhbmVsLWN0cmwta2V5dXAtJHtldmVudC5rZXl9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3cuY2xvc2UoKScsIHJlcyk7XG4gICAgfSk7XG59KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50LWtleWRvd24nLCBldmVudC5rZXksIGV2ZW50KTtcbiAgICAvLyBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShldmVudC5rZXkpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=