import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import App from './Components/App'

const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={Store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));