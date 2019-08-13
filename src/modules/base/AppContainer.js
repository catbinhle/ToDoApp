import React, {Component} from 'react'
import { connect } from "react-redux"
import { View } from 'react-native'
import {MainNavigator} from '../navigators'
import Orientation from 'react-native-orientation-locker'

class AppContainer extends Component {

  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    Orientation.lockToPortrait()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MainNavigator/>
      </View>
    )
  }
}

const mapStateToProps = state => {
	return {
    ...state
  }
}

export default connect(mapStateToProps, {

})(AppContainer)