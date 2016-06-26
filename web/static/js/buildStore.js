import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import * as middleware from './middleware'
import * as reducers from './reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

console.log(middleware)

const enhancer = compose(
  applyMiddleware(...middleware, thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const buildStore = () => createStore(reducer, enhancer)

export default buildStore
