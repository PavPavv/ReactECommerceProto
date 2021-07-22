import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { auth } from '../../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';

import { ReactComponent as Logo } from '../../../assets/icons/crown.svg';
import styles from './Header.module.scss';

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);


  return (
    <div className={styles.Header}>
      <Link to="/" className={styles.LogoContainer}>
        <Logo className={styles.Logo} />
      </Link>
      <div className={styles.Options}>
        <Link to="/shop" className={styles.Option}>
          Shop
        </Link>
        <Link to="/shop" className={styles.Option}>
          Contact
        </Link>
        {
          currentUser ?
            <div className={styles.Option} onClick={() => auth.signOut()}>Sign out</div>
            :
            <Link className={styles.Option} to="/signIn">Sign in</Link>
        }
        <CartIcon />
      </div>
    </div>
  )
}

export default Header;
