import { createStore, applyMiddleware, compose } from 'redux'
import { statusReducer } from './reducers/status';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewares = applyMiddleware(thunk, logger);

export const store = createStore(statusReducer, composeWithDevTools(middlewares))
