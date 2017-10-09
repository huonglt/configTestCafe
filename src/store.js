import { createStore } from 'redux';
import reducers from './reducers/index';

const preloadedState = {
    name: 'myApp1'
};
const store = createStore(reducers, preloadedState);

export default store;
