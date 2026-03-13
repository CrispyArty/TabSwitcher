import { addKeyEvent } from './inject';

// Display the suggestions after user starts typing
chrome.omnibox.onInputChanged.addListener(async (input, suggest) => {
  console.log('chrome.omnibox.setDefaultSuggestion', chrome.omnibox.setDefaultSuggestion);

  chrome.omnibox.setDefaultSuggestion({
    description: 'Enter a Chrome API or choose from past searches',
  });

  console.log(input, suggest);

  // const { apiSuggestions } = await chrome.storage.local.get('apiSuggestions');
  // const suggestions = apiSuggestions.map((api) => {
  //   return { content: api, description: `Open chrome.${api} API` };
  // });
  suggest([
    { content: 'gosu1', description: 'desc1' },
    { content: 'gosu2', description: 'desc2' },
    { content: 'gosu3', description: 'desc3' },
    { content: 'gosu4', description: 'desc4' },
  ]);
});

chrome.omnibox.onInputEntered.addListener((input) => {
  chrome.tabs.create({ url: 'https://example.com/' + input });

  // Save the latest keyword
  // updateHistory(input);
});

chrome.action.onClicked.addListener(async (tab) => {
  console.log('click', tab, chrome.tabs);
});

chrome.commands.onCommand.addListener((command, tab) => {
  console.log('Command', command, tab, chrome);

  // chrome.windows.create({ type: 'normal' });
  chrome.windows.create({ focused: true, type: 'popup', url: 'window.html' }).then((res) => {
    console.log('res', res);
  });
  // chrome.windows.create({ type: 'panel' });

  // chrome.scripting
  //   .executeScript({
  //     target: { tabId: tab.id },
  //     func: addKeyEvent,
  //   })
  //   .then(() => console.log('script injected on target frames'));
});

chrome.runtime.onMessage.addListener((event) => {
  console.log('message1', event);
});
