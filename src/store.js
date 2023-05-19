import { createStore } from 'redux'
import rootReducer from './reducer'


// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer)
export default store