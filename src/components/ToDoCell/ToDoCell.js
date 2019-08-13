import React, { PureComponent } from 'react'
import {
    Text, View
} from 'react-native'
import * as Strings from '../../configs/strings'
import styles from './styles'
import colors from '../../configs/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Swipeout from 'react-native-swipeout'
import { Cipher } from 'crypto';

const hours = ['00','01','02','03','04','05','06',
    '07','08','09','10','11','12','13','14',
    '15','16','17','18','19','20','21','22','23']

const minutes = ['00', '15', '30', '45']
const warningTime = 4*60*60*1000 
// 4 hour, if item only rest 4 hours for completed, 
//the item background color will change orange to warning

export default class ToDoCell extends PureComponent {

    render() {
        const { item } = this.props
        let backgroundColor = item.priority === 0 ? colors.highBlue : item.priority === 1 ? colors.mediumGreen : colors.lowLighGreen
        let interval = this._convertTime(item.dueTime.date, item.dueTime.hour, item.dueTime.minute) - new Date()
        let imageWarning = 'clock'

        if (interval < 0) {
            backgroundColor = colors.red
            imageWarning = 'exclamation-triangle'
        } else if ( interval < warningTime) {
            backgroundColor = colors.orange
            imageWarning = 'bell'
        }
        return (
            <Swipeout
                right={this.settingSwipe(item)}
                autoClose={true}
                style={{backgroundColor: colors.transparent}}
            >
                <View style={[styles.container, {backgroundColor: backgroundColor}]}>
                    <View style={styles.image}>
                        <Icon name='tasks' color={colors.white} size={28} /> 
                    </View>
                    <View style={styles.textContent}>
                        <Text style={[styles.label, {fontWeight: '600'}]}>{item.title}</Text>
                        <Text style={[styles.label, {fontWeight: '400', fontSize: 13}]}>{Strings.DueTime + item.dueTime.date}</Text>
                    </View>
                    <View style={styles.image}>
                        <Icon name={imageWarning} color={colors.white} size={24} /> 
                    </View>  
                </View>
            </Swipeout>
        )
    }

    settingSwipe = (item) => [{
        text: Strings.Update,
        onPress: () => this._onUpdate(item),
        type: 'default',
        backgroundColor: colors.updateBlue,
        color: colors.white
    },
    {
        text: Strings.Remove,
        onPress: () => this._onRemove(item.id),
        type: 'default',
        backgroundColor: colors.red,
        color: colors.white
    }]

    _onUpdate = (item) => {
        this.props.onUpdate(item)
    }

    _onRemove = (id) => {
        this.props.onRemove(id)
    }

    _convertTime(day, hour, minute){
        const tempTime =new Date(day)
        tempTime.setHours(hours[hour],minutes[minute])
        return tempTime.getTime()
    }
}