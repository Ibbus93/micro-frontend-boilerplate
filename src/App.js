import React from 'react';
import PropTypes from 'prop-types';

// import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import styled from 'styled-components';

// import { Provider } from 'react-redux';
// import store from './store';

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto;
`;

const App = ({ history, auth }) => (
  //   <Provider store={store}>
  // <Router history={history}>
  <AppWrapper>
    <h2>This is your boilerplate!</h2>
  </AppWrapper>
  // </Router>
  //   </Provider>
);

App.propTypes = {
  history: PropTypes.any,
  auth: PropTypes.shape({
    id: PropTypes.string,
    token: PropTypes.string,
  }).isRequired,
};

App.defaultProps = {
  history: createBrowserHistory(),
};

export default App;
