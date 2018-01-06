import {createStore} from 'redux'
import reducers from './ducks/reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const preloadedState = {}

export default createStore(reducers, preloadedState, composeWithDevTools())