/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { Provider } from "react-redux"
import configureStore from "./src/configs/store";
import AppContainer from './src/modules/base/AppContainer'
// import { NetworkProvider } from 'react-native-offline'
import { PersistGate } from 'redux-persist/integration/react'

console.disableYellowBox = true
const { store, persistor } = configureStore()

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer/>
          </PersistGate>   
        </Provider>
    )
  }
}
