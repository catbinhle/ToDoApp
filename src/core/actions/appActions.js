export const LOAD_TO_DO_ITEMS = "LOAD_TO_DO_ITEMS"
export const loadToDoItems = () => ({
	type: LOAD_TO_DO_ITEMS
})

export const ADD_TO_DO_ITEM = "ADD_TO_DO_ITEM"
export const addToDoItem = (item) => ({
	type: ADD_TO_DO_ITEM,
	payload: item
})

export const UPDATE_TO_DO_ITEM = 'UPDATE_TO_DO_ITEM'
export const updateToDoItem = (item) => ({
	type: UPDATE_TO_DO_ITEM,
	payload: item
})

export const REMOVE_TO_DO_ITEM = 'REMOVE_TO_DO_ITEM'
export const removeToDoItem = (id) => ({
	type: REMOVE_TO_DO_ITEM,
	payload: id
})