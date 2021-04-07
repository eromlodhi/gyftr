import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers/index';
import createLogger from 'redux-logger';

const store = createStore(    
    rootReducer,
    compose(
        applyMiddleware(createLogger, thunk)
    )
);
export default store;