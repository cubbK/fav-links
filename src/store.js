import {createStore} from 'redux'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const preloadedState = {}

export default createStore(reducers, preloadedState, composeWithDevTools())