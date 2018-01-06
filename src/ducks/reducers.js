import { combineReducers } from 'redux'
import widgetDuck from './widgetDuck'

export default combineReducers({ widgets: widgetDuck.reducer })
