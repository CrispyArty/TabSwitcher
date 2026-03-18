import { createRoot } from 'react-dom/client';
import React, { FC, useEffect, useState } from 'react';

import './global.css';
import TabList from './TabList';
// import * as s from './styles.module.css';

const Main: FC = () => {
  const [tabs, setTabs] = useState<Array<chrome.tabs.Tab>>([]);
  const [focusIndex, setFocusIndex] = useState<number>(1);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message === 'focus-next-tab') {
        setFocusIndex((old) => old + 1);
      }
      if (message === 'focus-prev-tab') {
        setFocusIndex((old) => old - 1);
      }
    });

    chrome.storage.session.get(['orderTabs']).then((result) => {
      setTabs(result.orderTabs as Array<chrome.tabs.Tab>);
    });

    // getChromeTabs().then(setTabs);

    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === 'session' && changes.orderTabs) {
        setTabs(changes.orderTabs as Array<chrome.tabs.Tab>);
      }
    });
  }, []);

  return (
    <div>
      <TabList
        tabs={tabs}
        focusTab={focusIndex}
        onClick={(id) => {
          // console.log('tabId', id);
          chrome.runtime.sendMessage({ name: 'tab-change', tabId: id });
        }}
      />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);

// if (chrome.storage) {
//   chrome.storage.local.get().then((settings: Settings) => {
//     root.render(
//       <React.StrictMode>
//         <Page settings={settings} />
//       </React.StrictMode>,
//     );
//   });
// } else {
//   root.render(
//     <React.StrictMode>
//       <Page settings={{ hide_on_load: true }} />
//     </React.StrictMode>,
//   );
// }
