import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './store/reducer/reducer';
import { Provider } from 'react-redux';


const store = createStore(reducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));