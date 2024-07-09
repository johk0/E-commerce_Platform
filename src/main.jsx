import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Con from './store/Context.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Con>
    <App />
    </Con>
)
