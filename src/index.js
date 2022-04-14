import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/App.css';
import App from './components/App';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(<App name="Giphy Simpsons App"/>)

