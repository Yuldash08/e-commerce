import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import Routers from './Routers';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routers />
      <CssBaseline />
    </BrowserRouter>
  </>
);

