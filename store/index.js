import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { reducer, initialState} from "../reducer";

const Store = createStore(reducer, initialState, compose(applyMiddleware(thunk))
);

export default Store;
