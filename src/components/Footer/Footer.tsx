import React from 'react';

import styles from './Footer.module.css';
import { Button } from '../Button/Button';

interface FooterProps {
    todoCount: number;
    deleteTodo: any;
    activeTabs: string;
    hideTodos: (tab: 'all' | 'completed' | 'active') => void;
}

export const Footer: React.FC<FooterProps> = ({ todoCount,deleteTodo, activeTabs,hideTodos }) => (
  <div className={styles.footer_container}>
    <h1 className={styles.footer_title}>
      {todoCount} items left
    </h1>
    <div className={styles.footer_middle_section}>
      <button className={styles.footer_middle_section_tab && (activeTabs==='all') ? `${styles.footer_middle_section_tab_active} `: styles.footer_middle_section_tab}  onClick={() => hideTodos('all')}>All</button>
      <button className={styles.footer_middle_section_tab && (activeTabs==='active') ? `${styles.footer_middle_section_tab_active} `: styles.footer_middle_section_tab} onClick={() => hideTodos('active')}>Active</button>
      <button className={styles.footer_middle_section_tab && (activeTabs==='completed') ? `${styles.footer_middle_section_tab_active} `: styles.footer_middle_section_tab}  onClick={() => hideTodos('completed')}>Completed</button>
    </div>
    <div className={styles.footer_button_container}>
        <Button onClick={() => deleteTodo()}>
          Clear completed
        </Button>
    </div>
  </div>
);
