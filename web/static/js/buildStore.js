import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as middleware from './middleware'
import * as reducers from './reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const enhancer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const buildStore = () => createStore(reducer, enhancer)

export default buildStore
