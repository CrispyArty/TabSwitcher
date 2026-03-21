import { createRoot } from 'react-dom/client';
import React, { FC, useEffect, useRef, useState } from 'react';

import './global.css';
import TabList from './TabList';
// import * as s from './styles.module.css';

type Props = {
  tabs: Array<chrome.tabs.Tab>;
};

const Main: FC<Props> = ({ tabs }) => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  // const [tabs, setTabs] = useState<Array<chrome.tabs.Tab>>(tabs);
  const [focusIndex] = useState<number>(parseInt(urlSearchParams.get('tab_index') || '1'));
  // console.log('urlSearchParams', urlSearchParams.get('tab_index') || '1', focusIndex);
  // const focusTab = useRef<chrome.tabs.Tab | undefined>(tabs[focusIndex]);
  const focusIndexRef = useRef<number>(focusIndex);

  useEffect(() => {
    // console.log('---focusIndex', focusIndex);
    focusIndexRef.current = focusIndex;
  }, [tabs, focusIndex]);

  const saveDocState = () => {
    window.sessionStorage.setItem('snapshot', document.body.innerHTML);
    window.sessionStorage.setItem('popupHeight', document.body.scrollHeight + 'px');
    // sessionStorage.setItem('focusIndex', focusIndexRef.current.toString());
  };

  const reloadWithNewIndex = (newFocusIndex: number) => {
    saveDocState();
    window.AppBackgroundPort.postMessage('reload');

    document.location.href =
      document.location.origin +
      document.location.pathname +
      `?tab_index=${newFocusIndex}&old_tab_index=${focusIndexRef.current.toString()}`;
  };

  // const tabsChangedHandler = (changes, namespace) => {
  //   if (namespace === 'session' && changes.orderTabs) {
  //     setTabs(changes.orderTabs as Array<chrome.tabs.Tab>);
  //   }
  // };

  const extShortcutPressHandler = (message) => {
    if (message === 'focus-next-tab') {
      // setFocusIndex((old) => old + 1);
      reloadWithNewIndex(focusIndexRef.current + 1);
    }
    if (message === 'focus-prev-tab') {
      // setFocusIndex((old) => old - 1);
    }
  };

  // const keydownArrowKeysHandler = (event) => {
  //   if (event.key === 'ArrowDown') {
  //     setFocusIndex((old) => old + 1);
  //   }
  //   if (event.key === 'ArrowUp') {
  //     setFocusIndex((old) => old - 1);
  //   }
  // };

  const ctrlKeyupHandler = () => {
    console.log('tabs, focusIndex', tabs, focusIndex);
    chrome.runtime.sendMessage({ name: 'tab-change', tabId: tabs[focusIndex].id }).then((res) => {
      // window.close();
      console.log('window.close()', res);
    });

    // if (focusTab.current === undefined) {
    //   chrome.storage.session.get(['orderTabs']).then((result) => {
    //     chrome.runtime
    //       .sendMessage({ name: 'tab-change', tabId: result.orderTabs[1].id, fast: true })
    //       .then((res) => {
    //         // window.close();
    //         console.log('window.close()', res);
    //       });
    //   });
    // } else {
    //   chrome.runtime.sendMessage({ name: 'tab-change', tabId: focusTab.current.id }).then((res) => {
    //     // window.close();
    //     console.log('window.close()', res);
    //   });
    // }

    window.close();
  };

  useEffect(() => {
    // const queryTabIndex = urlSearchParams.get('tab_index');

    // if (queryTabIndex) {
    //   setFocusIndex(parseInt(queryTabIndex));
    // }

    // chrome.storage.session.get(['orderTabs']).then((result) => {
    //   setTabs(result.orderTabs as Array<chrome.tabs.Tab>);
    // });

    // console.log('chrome.extension.getViews()', chrome.extension.getViews());

    window.AppEventBus.on('control-keyup', ctrlKeyupHandler);
    // window.addEventListener('keydown', keydownArrowKeysHandler);
    chrome.runtime.onMessage.addListener(extShortcutPressHandler);
    // chrome.storage.onChanged.addListener(tabsChangedHandler);

    return () => {
      window.AppEventBus.off('control-keyup', ctrlKeyupHandler);
      // window.removeEventListener('keydown', keydownArrowKeysHandler);
      chrome.runtime.onMessage.removeListener(extShortcutPressHandler);
      // chrome.storage.onChanged.removeListener(tabsChangedHandler);
    };
  }, []);

  return (
    <div>
      <TabList
        tabs={tabs}
        focusTab={focusIndex}
        onClick={(id) => {
          chrome.runtime.sendMessage({ name: 'tab-change', tabId: id });
          window.close();
        }}
      />
    </div>
  );
};

const snapshot = sessionStorage.getItem('snapshot');

// console.log('Date.now()1', Date.now());
chrome.storage.session.get(['orderTabs']).then((result) => {
  // console.log('Date.now()2', Date.now());
  const tabs = (result.orderTabs || []) as Array<chrome.tabs.Tab>;

  if (snapshot) {
    const snapshot = sessionStorage.getItem('snapshot');
    document.body.innerHTML = snapshot;
    // console.log('document.getElementById', document.getElementById('root').innerHTML);
    sessionStorage.removeItem('snapshot');

    // hydrateRoot(
    //   document.getElementById('root'),
    //   <React.StrictMode>
    //     <Main tabs={tabs} />
    //   </React.StrictMode>,
    // );

    createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Main tabs={tabs} />
      </React.StrictMode>,
    );
  } else {
    createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Main tabs={tabs} />
      </React.StrictMode>,
    );
  }
});
