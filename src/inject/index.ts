window.addEventListener('keyup', (event) => {
  if (event.key === 'Control' || event.key === 'Meta') {
    try {
      chrome.runtime.sendMessage({ name: 'inject-ctrl-keyup', key: event.key });
    } catch (e) {
      console.log(e);
    }
  }
});
