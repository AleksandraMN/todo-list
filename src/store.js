import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk';
import {todosReducer, filtersReducer} from './reducers';

const reducer = combineReducers({
	todos: todosReducer,
  filters: filtersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
