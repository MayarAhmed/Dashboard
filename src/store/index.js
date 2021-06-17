import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from "redux-saga";
import { watchSagas } from './saga';
import reducers from './reducer'

const saga = createSagaMiddleware();
const composeEnhancer = 
typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ({})
:compose;

const enhancer = composeEnhancer(applyMiddleware(saga));

const store = createStore(reducers, enhancer)

saga.run(watchSagas)

export default store;