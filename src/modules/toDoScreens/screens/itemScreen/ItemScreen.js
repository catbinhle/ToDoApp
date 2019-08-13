import React, {Component} from 'react'
import { connect } from "react-redux"
import { 
  SafeAreaView, ScrollView, TouchableWithoutFeedback, 
  Keyboard, View, Text } from 'react-native'
import * as Strings from '../../../../configs/strings'
import * as AppAction from '../../../../core/actions'
import styles from './styles'
import TextBox from '../../../../components/textBox/TextBox'
import PrioritySelection from '../../../../components/prioritySelection/PrioritySelection'
import Button from '../../../../components/buttonCommon/ButtonComon'
import colors from '../../../../configs/colors'
import SelectTime from '../../../../components/selectTime/SelectTime'
import {Calendar, LocaleConfig} from 'react-native-calendars'

LocaleConfig.locales['en'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
}

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
)

class ItemScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    }
  }

  state = {
    toDoItem: {
      title: '',
      priority: 0,
      dueTime: {
        date: null,
        hour: null,
        minute: null
      },
      id: 0
    }
  } 

  componentDidMount() {
    if (this.props.navigation.getParam('item') != null) {
      this.setState({
        toDoItem: this.props.navigation.getParam('item')
      })
    }
  }

  render() {
    return (
      <DismissKeyboard >
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.headerContainer}>
              <Text style={styles.textLabel}>{Strings.TitleTextBox}</Text>
            </View>
            <TextBox 
                text={this.state.toDoItem.title}
                placeholder={Strings.PlaceholderTextBox}
                event={(text) => this._changeText(text)}
            />
            <View style={styles.headerContainer}>
              <Text style={styles.textLabel}>{Strings.PriorityText}</Text>
            </View>
            <View style={styles.selectionView}>
              <PrioritySelection 
                  priority={this.state.toDoItem.priority}
                  event={(btn) => this._prioritySelected(btn)}
              />
            </View>
            <View style={styles.headerContainer}>
              <Text style={styles.textLabel}>{Strings.SetDueTime}</Text>
            </View>
            <View style={[styles.headerContainer, {alignItems: 'center'}]}>
              <Text style={[styles.textLabel, {fontWeight: '400'}]}>{styles.SelectDate}</Text>
            </View>
            <View style={styles.calendar}> 
              <Calendar
                  minDate={new Date()}
                  onDayPress={(day) => this._onDayPress(day)}
                  style={styles.calendar}
                  hideExtraDays
                  markedDates={{[this.state.toDoItem.dueTime.date]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
              />
            </View>
            <View style={[styles.headerContainer, {alignItems: 'center'}]}>
              <Text style={[styles.textLabel, {fontWeight: '400'}]}>{Strings.SelectTime}</Text>
            </View>
            <View style={styles.calendar}>
              <SelectTime
                  onHourPress={(index)=>this._onHourPress(index)}
                  onMinutePress={(index) => this._onMinutePress(index)}
                  isToday = {this.state.toDoItem.dueTime.date === new Date()}
                  minute={this.state.toDoItem.dueTime.minute}
                  hour={this.state.toDoItem.dueTime.hour}
              />
            </View>
            <View style={styles.updateButtonView}>
              <Button title={this.props.navigation.getParam('item') != null ? Strings.Update : Strings.Create} 
                      isBorder={true}
                      width={'45%'}
                      height={40}
                      titleColor= {colors.white}
                      backgroundColor={colors.highBlue}
                      event={() => this._addToDoList()}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </DismissKeyboard>
    )
  }

  //ACTION
  _addToDoList = () => {
    debugger
    if (this.state.toDoItem.title.length > 0 && this.state.toDoItem.dueTime.date != null 
        && this.state.toDoItem.dueTime.hour != null && this.state.toDoItem.dueTime.minute != null) {
      this.setState({
        toDoItem: {
          ...this.state.toDoItem,
          id: this.props.navigation.getParam('item') != null ? this.state.toDoItem.id : (new Date()).getTime()
        }
      }, () => {
        if (this.props.navigation.getParam('item') != null) {
          this.props.updateToDoItem(this.state.toDoItem)
        } else {
          this.props.addToDoItem(this.state.toDoItem)
        }
        this.props.navigation.goBack()
        this.props.loadToDoItems()
      })
    }
  }

  _changeText = (text) => {
    this.setState({
      toDoItem: {
        ...this.state.toDoItem,
        title: text
      }
    })
  }

  _prioritySelected = (btn) => {
    this.setState({
      toDoItem: {
        ...this.state.toDoItem,
        priority: btn
      }
    })
  }

  _onDayPress(day) {
    this.setState({
      toDoItem: {
        ...this.state.toDoItem,
        dueTime: {
          ...this.state.toDoItem.dueTime,
          date: day.dateString,
        }
      }
    })
  }
  _onHourPress(index) {
    this.setState({
      toDoItem: {
        ...this.state.toDoItem,
        dueTime: {
          ...this.state.toDoItem.dueTime,
          hour: index
        } 
      }
    })
  }

  _onMinutePress(index) {
    this.setState({
      toDoItem: {
        ...this.state.toDoItem,
        dueTime: {
          ...this.state.toDoItem.dueTime,
          minute: index
        }   
      }
    })
  }
}

const mapStateToProps = state => {
	return {
		...state
	}
}

export default connect(mapStateToProps, {
	...AppAction
})(ItemScreen)