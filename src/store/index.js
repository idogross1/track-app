import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { trackReducer } from './reducers/trackReducer.js'

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
  trackModule: trackReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
