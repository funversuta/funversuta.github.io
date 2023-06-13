import React from 'react';

import styles from './Footer.module.css';
import { Button } from '../Button/Button';
import { Tab } from '../../enums/tab.enum';

interface FooterProps {
  todoCount: number;
  deleteTodo: () => void;
  activeTabs: Tab;
  hideTodos: (tab: Tab) => void;
}

export const Footer: React.FC<FooterProps> = ({ todoCount, deleteTodo, activeTabs, hideTodos }) => (
  <div className={styles.footer_container}>
    <div className={styles.footer_container_menu}>
      <h1 className={styles.footer_title}>{todoCount} items left</h1>
      <div className={styles.footer_middle_section}>
        {Object.values(Tab).map((tab) => (
          <Button
            key={tab}
            className={
              styles.footer_middle_section_tab && activeTabs === tab
                ? `${styles.footer_middle_section_tab_active} `
                : styles.footer_middle_section_tab
            }
            onClick={() => hideTodos(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>
      <Button className={styles.footer_button_container} onClick={() => deleteTodo()}>
        Clear completed
      </Button>
    </div>
    <div className={styles.footer_line_1} />
    <div className={styles.footer_line_2} />
    <div className={styles.footer_line_3} />
  </div>
);
