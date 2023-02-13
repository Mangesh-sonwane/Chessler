import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { AppContextProvider } from '../src/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main className='bg-black min-h-screen '>
      <AppContextProvider>
        <Navbar />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContextProvider>
    </main>
  </React.StrictMode>
);
