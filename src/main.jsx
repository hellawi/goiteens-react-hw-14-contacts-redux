import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const rootElem = document.querySelector('#root');

createRoot(rootElem).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);