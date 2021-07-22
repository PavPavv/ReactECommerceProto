import React from 'react';

import styles from './CollectionItem.module.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className={styles.CollectionItem}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.Image}
      >
      </div>
      <div className={styles.CollectionFooter}>
        <span className={styles.Name}>{name}</span>
        <span className={styles.Price}>{price}</span>
      </div>
    </div >
  )
}

export default CollectionItem;
