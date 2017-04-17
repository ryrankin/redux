import {createStore} from 'redux';
import * as actions from './actions/index';
import store from './store';
import * as reducers from './reducers/index';

store.dispatch(actions.addRepository('joe'));
console.log(store.getState());

export default createStore(reducers.repositoryReducer);