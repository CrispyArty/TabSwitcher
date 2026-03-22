/******/ (() => { // webpackBootstrap
/*!*****************************!*\
  !*** ./src/inject/index.ts ***!
  \*****************************/
window.addEventListener('keyup', (event) => {
    if (event.key === 'Control' || event.key === 'Meta') {
        try {
            chrome.runtime.sendMessage({ name: 'inject-ctrl-keyup', key: event.key });
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5qZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMkNBQTJDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXRhYi1zd2l0Y2hlci8uL3NyYy9pbmplY3QvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0NvbnRyb2wnIHx8IGV2ZW50LmtleSA9PT0gJ01ldGEnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG5hbWU6ICdpbmplY3QtY3RybC1rZXl1cCcsIGtleTogZXZlbnQua2V5IH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==