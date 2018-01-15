import { combineReducers } from 'redux'
import widgetDuck from './widgetDuck'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
   widgets: widgetDuck.reducer,
   form: formReducer
})
