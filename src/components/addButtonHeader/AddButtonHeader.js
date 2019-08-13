import React, {PureComponent} from 'react'
import {
    TouchableOpacity
} from 'react-native'
import colors from '../../configs/colors'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class AddButtonHeader extends PureComponent {
    render() {
        const {event} = this.props
        return (
            <TouchableOpacity 
                onPress={event}
            >
                <Icon name='plus' color={colors.white} size={24} style={styles.icon}/>
            </TouchableOpacity>
        )
    }
}