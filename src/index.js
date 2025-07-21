import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ResumePage } from './components/page/ResumePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/themes/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path='*' element="Not found" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

