import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './app/App'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import browserHistory from './browserHistory'
import allReducers from './reducers'

const composeSetup = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

const createReducer = () => {
  return combineReducers({
    ...allReducers,
    router: connectRouter(browserHistory),
  })
}

const createReduxStore = () => {
  return createStore(
    createReducer(),
    composeSetup(
      applyMiddleware(
        routerMiddleware(browserHistory),
        promiseMiddleware,
        thunkMiddleware,
      ),
    ),
  )
}

const store = createReduxStore()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
