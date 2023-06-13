import React from 'react';

import styles from './Header.module.css';

export const Header: React.FC = () => (
  <div className={styles.header_container}>
    <h1 className={styles.header_title}>todos</h1>
  </div>
);
