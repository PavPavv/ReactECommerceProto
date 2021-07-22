import React, { Component } from 'react';

import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

import styles from './SignIn.module.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (err) {
      console.log('An error ocurred while signing in with email and password', err);
    }

    console.log(this.state.email)
    console.log(this.state.password)

    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div className={styles.SignIn}>
        <h2 className={styles.title}>I already have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="email"
            label="email"
            value={this.state.email} required
            handleChange={this.handleChange}
          />
          <Input
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className={styles.btns}>
            <Button type="submit">Submit form</Button>
            <Button onClick={signInWithGoogle} isPrimary>Sign in with Google</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn

