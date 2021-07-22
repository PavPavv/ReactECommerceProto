import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import styles from './SignInUpPage.module.scss';

const SignInUpPage = () => {
  return (
    <div className={styles.signInUp}>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInUpPage;
