import {createStore, applyMiddleware} from 'redux';
import * as actions from './actions/index';
import thunk from 'redux-thunk';
import store from './store';
import * as reducers from './reducers/index';


export default createStore(reducers.repositoryReducer, applyMiddleware(thunk));