import React from 'react';
import PropTypes from 'prop-types';

import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>Demo</h1>
      </div>
      <div>
        {user ? (
          <button onClick={onLogout}>Log out</button>
        ) : (
          <>
            <button onClick={onLogin}>Log in</button>
            <button onClick={onCreateAccount}>Sign up</button>
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
