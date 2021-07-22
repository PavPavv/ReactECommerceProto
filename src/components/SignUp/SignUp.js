import React, { Component } from 'react';

import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import styles from './SignUp.module.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = e => {
    let { name, value } = e.target;

    this.setState(
      {
        [name]: value,
      },
    );

  };

  handleSubmit = async e => {
    const { displayName, email, password, confirmPassword } = this.state;

    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password mismatch.');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

    } catch (err) {
      console.log('sign up error', err.message)
    }

  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className={styles.signUp}>
        <h2 className={styles.title}>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className={styles.signUpForm} onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display name"
            required
          />

          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm password"
            required
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
