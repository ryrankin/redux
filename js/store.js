import {createStore} from 'redux';
import * as actions from './actions/index';
import store from './store';
import * as reducers from './reducers/index';


export default createStore(reducers.repositoryReducer);