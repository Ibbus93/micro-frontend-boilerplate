import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

window.renderMicroFrontend = (containerId, history, handler, auth) => {
  ReactDOM.render(
    <App history={history} auth={auth} />,
    document.getElementById(containerId),
  );
};

window.unmountMicroFrontend = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
