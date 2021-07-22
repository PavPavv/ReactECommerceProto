import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import styles from './CollectionPreview.module.scss';

const CollectionPreview = ({ title, items }) => {

  return (
    <div className={styles.CollectionPreview}>
      <h1 className={styles.Title}>{title}</h1>
      <div className={styles.Preview}>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id}  {...otherItemProps} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview;
