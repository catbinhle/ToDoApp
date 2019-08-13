import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../core/reducers'
import rootSaga from '../core/middleware/sagaEffect'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
	key: 'root',
	storage,
	// blacklist: []
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const configStore = () => {
	const store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
	);
	const persistor = persistStore(store)
	sagaMiddleware.run(rootSaga)

	return { store, persistor }
}

export default configStore
