import { combineReducers } from 'redux'
//import { reducer as network } from 'react-native-offline';
import appReducer from './appReducer'

const rootReducer = combineReducers({
    application: appReducer,
})

export default rootReducer