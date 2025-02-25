import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { ResumePage } from './components/page/ResumePage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme appearance='dark'>
      <BrowserRouter>
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path='*' element="Not found" />
        </Routes>
        {/* </Router> */}
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);

