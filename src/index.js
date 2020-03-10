import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import reducers from './reducers';
import {createStore,applyMiddleware} from 'redux'
import{Provider} from 'react-redux';
import thunk from 'redux-thunk';

ReactDOM.render(<Provider store={createStore(reducers,applyMiddleware(thunk))}><App></App></Provider>,document.querySelector('#root'))