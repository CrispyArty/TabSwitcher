// console.log('open');

window.addEventListener('keyup', (event) => {
  console.log('event-keyup', event.key, event);
  chrome.runtime.sendMessage(`ctrl-keyup-${event.key}`).then((res) => {
    console.log('window.close()', res);
  });

  if (event.key === 'Control') {
    // chrome.runtime.sendMessage('ctrl-keyup').then((res) => {
    //   console.log('window.close()', res);
    // });
  }
});

setTimeout(() => {
  const el: HTMLElement = document.querySelector('#mainButton');

  el.focus();
}, 3000);

window.addEventListener('keydown', (event) => {
  console.log('event-keydown', event.key, event);
});

// document.addEventListener('keydown', function (e) {
//   if ((e.ctrlKey || e.metaKey) && e.key === 'q') {
//     e.preventDefault();
//     console.log('Ctrl+C intercepted!');
//   }
// });
