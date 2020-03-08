import React from 'react';
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import thunk from 'redux-thunk'
import App from './components/App'
ReactDOM.render(<Provider store={createStore(reducers,applyMiddleware(thunk))}><App></App></Provider>,document.querySelector('#root'))