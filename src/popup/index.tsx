import { createRoot } from 'react-dom/client';
import React, { FC, useEffect, useRef, useState } from 'react';

import './global.css';
import TabList from './TabList';
import { EventMessage } from './types';

type Props = {
  tabs: Array<chrome.tabs.Tab>;
};

const Main: FC<Props> = ({ tabs }) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const [focusIndex] = useState<number>(parseInt(urlSearchParams.get('tab_index') || '1'));
  const focusIndexRef = useRef<number>(focusIndex);

  useEffect(() => {
    focusIndexRef.current = focusIndex;
  }, [tabs, focusIndex]);

  const saveDocState = () => {
    window.sessionStorage.setItem('snapshot', document.body.innerHTML);
    window.sessionStorage.setItem('popupHeight', document.body.scrollHeight + 'px');
    window.sessionStorage.setItem('scrollY', window.scrollY.toString());
  };

  const resolveIndex = (index: number) => {
    if (index < 0) {
      return tabs.length - 1;
    } else if (index >= tabs.length) {
      return 0;
    } else {
      return index;
    }
  };

  const reloadWithNewIndex = (newFocusIndex: number) => {
    saveDocState();

    window.AppBackgroundPort.postMessage('reload');

    document.location.href =
      document.location.origin +
      document.location.pathname +
      `?tab_index=${resolveIndex(newFocusIndex)}`;
  };

  const extShortcutPressHandler = (message: EventMessage) => {
    if (message.name === 'focus-next-tab') {
      reloadWithNewIndex(focusIndexRef.current + 1);
    }
    if (message.name === 'focus-prev-tab') {
      reloadWithNewIndex(focusIndexRef.current - 1);
    }
  };

  const ctrlKeyupHandler = () => {
    chrome.runtime.sendMessage({ name: 'tab-change', tabId: tabs[focusIndex].id });

    window.close();
  };

  useEffect(() => {
    window.AppEventBus.on('control-keyup', ctrlKeyupHandler);
    chrome.runtime.onMessage.addListener(extShortcutPressHandler);

    return () => {
      window.AppEventBus.off('control-keyup', ctrlKeyupHandler);
      chrome.runtime.onMessage.removeListener(extShortcutPressHandler);
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
const scrollY = sessionStorage.getItem('scrollY');

chrome.storage.session.get(['orderTabs']).then((result) => {
  const tabs = (result.orderTabs || []) as Array<chrome.tabs.Tab>;

  if (snapshot) {
    document.body.innerHTML = snapshot;
    sessionStorage.removeItem('snapshot');

    // scrollY && window.scrollTo({ top: parseInt(scrollY) });
    // hydrateRoot(
    //   document.getElementById('root'),
    //   <React.StrictMode>
    //     <Main tabs={tabs} />
    //   </React.StrictMode>,
    // );
  }

  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Main tabs={tabs} />
    </React.StrictMode>,
  );
});
