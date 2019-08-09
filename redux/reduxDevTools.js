import {createStore, applyMiddleware} from 'redux';
import {compose} from 'redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));