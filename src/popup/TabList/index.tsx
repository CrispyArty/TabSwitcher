import React, { FC } from 'react';
import clsx from 'clsx';
import * as s from './styles.module.css';

type Props = {
  tabs: Array<chrome.tabs.Tab>;
  focusTab: number | null;
  onClick: (id: number) => void;
};

const TabList: FC<Props> = ({ tabs, focusTab, onClick }) => {
  const size = 16; // desired size, e.g., 16, 32, 64

  const getIconUrl = (url: string) => {
    return `chrome-extension://${chrome.runtime.id}/_favicon/?pageUrl=${encodeURIComponent(url)}&size=${size}`;
  };

  return (
    <ul className={s.tabs}>
      {tabs.map(({ id, title, url }, index) => {
        const name = `${title} (${url})`;

        return (
          <li
            key={id}
            className={clsx(s.tab, index === focusTab && s.focused)}
            onClick={() => {
              onClick(id);
            }}
          >
            <img src={getIconUrl(url)} alt="" />
            <p title={name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TabList;
