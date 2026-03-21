window.addEventListener('keyup', (event) => {
  console.log('event', event, event.key);
  if (event.key === 'Control' || event.key === 'Meta') {
    // console.log('event', event, chrome.runtime);
    try {
      chrome.runtime.sendMessage({ name: 'inject-ctrl-keyup', key: event.key });
    } catch (e) {
      console.log('error', e, e.name, e.message);
    }
  }
});
