import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
// ReactDom is used to create an element where the componenet should be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
// Inside root a render function is called to display the values we have been passing



root.render(
  <App/>
);

