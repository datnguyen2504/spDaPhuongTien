import { combineReducers } from 'redux';
import productReducer from './Product';






const rootReducer = combineReducers({
    product: productReducer,
});

export default rootReducer;