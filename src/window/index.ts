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
