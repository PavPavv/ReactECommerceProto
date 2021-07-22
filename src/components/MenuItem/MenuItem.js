import React from 'react';
import { withRouter } from 'react-router-dom'

import styles from './MenuItem.module.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={size ? styles.menuItemLarge : styles.menuItem}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subtitle}>Shop now</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);
