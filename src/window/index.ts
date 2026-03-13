// chrome.runtime.sendMessage('InitWindow');

document.addEventListener('keyup', (event) => {
  console.log('event', event);
  chrome.runtime.sendMessage(event.key);
});
