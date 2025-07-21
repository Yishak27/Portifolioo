import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ResumePage } from './components/page/ResumePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/themes/ThemeContext';
import ProjectDetailPage from './components/page/ProjectDetailPage';
import ErrorPage from './components/page/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

