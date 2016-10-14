/**
 * Dependencies
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';

/**
 * Importing our reducer
 */
import reducer from '../reducers'

/**
 * Apply the thunk and logging middleware to our store
 */
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger()
)(createStore)

/**
 * Export the module as a function to create our store with
 */
module.exports = function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)

  if (module.hot) {
    /**
     * Enable Webpack hot module replacement for reducers
     */
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store;
}