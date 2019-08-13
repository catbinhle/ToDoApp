import * as ActionTypes from "../actions/appActions";
import {fromJS} from "immutable";

const initState = {
    toDoList: []
}

const appReducer = (state = initState, action) => {
    const newState = fromJS(state).toJS()
    switch (action.type) {
        case ActionTypes.LOAD_TO_DO_ITEMS:
            break
        case ActionTypes.ADD_TO_DO_ITEM:
            let newList = state.toDoList.concat(action.payload)
            newState.toDoList = newList.sort((item1, item2) => {
                return item1.priority - item2.priority
            })
            break
        case ActionTypes.UPDATE_TO_DO_ITEM:
            let index = state.toDoList.findIndex((item) => item.id === action.payload.id)
            if (index != -1) {
                state.toDoList[index] = action.payload
            }
            newState.toDoList = state.toDoList.sort((item1, item2) => {
                return item1.priority - item2.priority
            })
            break
        case ActionTypes.REMOVE_TO_DO_ITEM:
            newState.toDoList = state.toDoList.filter(item => {
                return (item.id != action.payload)
            })
            break
        default:
            return state
    }
    return newState
}

export default appReducer