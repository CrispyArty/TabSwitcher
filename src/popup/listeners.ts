import EventBus from './eventBus';

window.AppEventBus = new EventBus();

window.addEventListener('keyup', (event) => {
  console.log('event-keyup', event.key, event);

  if (event.key === 'Control') {
    chrome.runtime.sendMessage(`ctrl-keyup-${event.key}`).then((res) => {
      console.log('window.close()', res);
    });
  }
});

// window.addEventListener('keydown', (event) => {
//   console.log('event-keydown', event.key, event);
// });

// document.addEventListener('keydown', function (e) {
//   if ((e.ctrlKey || e.metaKey) && e.key === 'q') {
//     e.preventDefault();
//     console.log('Ctrl+C intercepted!');
//   }
// });
