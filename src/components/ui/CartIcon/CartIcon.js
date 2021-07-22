import React from 'react';

import styles from './CartIcon.module.scss';

import { ReactComponent as ShoppingIcon } from '../../../assets/icons/shopping-bag.svg';

const CartIcon = () => {
  return (
    <div className={styles.cartIcon}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>0</span>
    </div>
  );
};

export default CartIcon;