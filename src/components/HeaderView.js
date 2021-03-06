import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import s from './HeaderView.module.scss';

export default class HeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutSuccess: false,
    };
  }
  render() {
    const { username, logout } = this.props;
    const { history } = this.props;
    const { logoutSuccess } = this.state;
    if (logoutSuccess) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <ul className={s.member}>
          {username ? (
            <React.Fragment>
              <li
                onClick={() => {
                  logout();
                  this.setState({ logoutSuccess: true });
                  // history.push('/');
                }}
                key={1}
                className={s.signOut}
              >
                SIGN OUT
              </li>
            </React.Fragment>
          ) : (
            <Link to="/login">
              <li key={2} className={s.signIn}>
                SIGN IN
              </li>
            </Link>
          )}
          <Link to="/cart">
            <li key={3} className={s.myCart}>
              MY CART
            </li>
          </Link>
          <Link to="/order">
            <li key={4} className={s.order}>
              ORDER
            </li>
          </Link>
        </ul>
        <Link to="/">
          <h1 className={s.logo}>GARDEN</h1>
        </Link>
      </React.Fragment>
    );
  }
}
