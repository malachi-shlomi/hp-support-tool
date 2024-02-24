import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
      <Provider store={store}>
        <App />
      </ Provider>
);

