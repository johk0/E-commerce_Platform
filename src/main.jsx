
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Context from './store/Context.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Context>
    <App />
    </Context>
)
