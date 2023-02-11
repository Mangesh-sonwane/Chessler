import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main className='bg-black min-h-screen '>
      <Navbar />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </main>
  </React.StrictMode>
);
