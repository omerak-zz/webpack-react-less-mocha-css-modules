import React, { Component } from 'react';

import urls from 'src/urls';

import styles from './style.less';


export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      inProgress: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.persist();
    this.setState({ inProgress: true });

    // it's better if you don't need these as states
    const formData = new FormData(e.target);

    fetch(urls.auth, {
      method: 'POST',
      body: formData
    }).then((response) => {
      this.setState({ inProgress: false });
      return response.json();
    }).then(function(response) {
      alert(response.message);
      if (response.status == 'success') {
        // write response.result.token to cookie and redirect
        e.target.reset();
      }
    }).catch(function(response) {
      console.log('error response', response);
    });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.title}>
          Somegimito
        </div>
        <div className={styles.summary}>
          Welcome back,
          <div className={styles.subSummary}>
            Sign in to continue to Somegimito
          </div>
        </div>
        <form id="asd" onSubmit={this.onSubmit} className={styles.form}>
          <input
            autoFocus
            type="text"
            name="email"
            className={styles.input}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Password"
          />
          <button className={styles.button} disabled={this.state.inProgress}>
            Login
          </button>
        </form>
        <div className={styles.bottomText}>
          Don't have an account? <strong>XDXDXD</strong>
        </div>
      </div>
    );
  }
}
