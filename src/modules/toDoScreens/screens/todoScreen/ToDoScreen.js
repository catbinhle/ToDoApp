import React, {Component} from 'react'
import { connect } from "react-redux"
import { SafeAreaView, View, Text, TouchableHighlight } from 'react-native'
import * as Strings from '../../../../configs/strings'
import * as AppAction from '../../../../core/actions'
import * as Types from '../../../base/types'
import styles from './styles'
import ToDoList from '../../../../components/ToDoList/ToDoList'
import AddButtonHeader from '../../../../components/addButtonHeader/AddButtonHeader'
import colors from '../../../../configs/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'

const priority = [
  {title: Strings.High, color: colors.highBlue},
  {title: Strings.Medium, color: colors.mediumGreen},
  {title: Strings.Low, color: colors.lowLighGreen}
]

const overdue = [
  {title: Strings.Warning, color: colors.orange},
  {title: Strings.Overdue, color: colors.red}
]

class ToDoScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <AddButtonHeader event={() => navigation.navigate(Types.UPDATE_TODO_SCREEN, {title: Strings.CreateNewItem})}/>
    }
  }

  state = {
    isOpenNotesView: false
  }

  componentDidMount() {
    this.props.loadToDoItems()
  }
  
  render() {
    const {toDoList} = this.props.application
    return (
      <SafeAreaView style={styles.container}>
        { toDoList.length === 0 
          ? this.renderNoData()
          : this.renderListItems(toDoList)
        }
        
      </SafeAreaView>
    )
  }

  renderNoData = () => (
    <View style={styles.noContent}>
      <Text style={[styles.textLabel, {fontSize: 22, marginBottom: 16}]}>{Strings.NoTodoItemTitle}</Text>
      <Text style={[styles.textLabel, {fontSize: 16, fontWeight: '300'}]}>{Strings.NoTodoItemDetail}</Text>
    </View>
  )

  renderListItems = (data) => (
    <View style={styles.container}>
      <View style={[styles.headerContainer, {height: 32}]}>
        <Text style={[styles.textLabel, {textAlign: 'left'}]}>{Strings.ListTodoItemsTitle}</Text>
      </View>
      <View style={styles.lineView}/>
      <ToDoList 
          data={data}
          onUpdate={(item) => this._onUpdate(item)}
          onRemove={(id) => this._onRemove(id)}
      />
      <View style={styles.bottomNotesHeaderContainer}>
        <TouchableHighlight 
                onPress={() => this._updateNotesLegend()}
                underlayColor={colors.grey}
        >
          <View style={styles.bottomNotesHeader}>
            <Icon name={this.state.isOpenNotesView ? 'caret-square-down' : 'caret-square-up'} color={colors.white} size={24} /> 
            <Text style={[styles.textLabel, {textAlign: 'left', color: colors.white, marginLeft: 8}]}>{Strings.NotesHeader}</Text>
          </View>
        </TouchableHighlight>
      </View>
      {this.state.isOpenNotesView && this.renderNotes()}
    </View>
  )

  renderNotes = () => (
    <View>
      <View style={styles.bottomContentView}>
          <View style={{justifyContent: 'flex-start', marginLeft: 16}}>
            {priority.map((item, index) => (
              this.renderContentNotes(item)
            ))}
          </View>
          <View style={{justifyContent: 'flex-end', marginRight: 16}}>
            {overdue.map((item, index) => (
              this.renderContentNotes(item)
            ))}
          </View>
      </View>
      <View style={styles.headerContainer}>
        <Text style={[styles.textLabel, {fontWeight: '300', textAlign: 'left'}]}>{Strings.NotesContent}</Text>
      </View>
    </View>
  )

  renderContentNotes = (item) => (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.iconContentView, {backgroundColor: item.color}]} />
        <View style={styles.contentTextView}>
          <Text style={[styles.textLabel, {marginLeft: 8, textAlign: 'left'}]}>{item.title}</Text>
        </View>
      </View>                               
    </View>
  )

  //ACTION
  _onUpdate = (item) => {
    this.props.navigation.push(Types.UPDATE_TODO_SCREEN, {title: Strings.UpdateItemHeader, item: item})
  }

  _onRemove = (id) => {
    this.props.removeToDoItem(id)
  }

  _updateNotesLegend = () => {
    this.setState({
      isOpenNotesView: !this.state.isOpenNotesView
    })
  }
}

const mapStateToProps = state => {
	return {
		application: state.application
	}
}

export default connect(mapStateToProps, {
	...AppAction
})(ToDoScreen)