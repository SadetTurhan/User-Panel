import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './redux/usersSlice';
import App from './App';
import ReactDOM from 'react-dom/client';

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);
