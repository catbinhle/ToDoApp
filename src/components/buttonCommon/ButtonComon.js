import React, { PureComponent } from 'react'
import {
    View, TouchableHighlight, Text
} from 'react-native'
import styles from './styles'
import colors from '../../configs/colors'

export default class ButtonCommon extends PureComponent {

    render() {
        const { title, titleColor, fontWeight, isBorder, backgroundColor, width, height, event } = this.props
        return (
            <TouchableHighlight 
                onPress={event}
                underlayColor={colors.grey}
                style={{width: width}}
            >
                <View style={[styles.container, {backgroundColor: backgroundColor, borderWidth: isBorder ? 0.5 : 0, height: height}]}>
                    <Text style={[styles.label, {color:titleColor, fontWeight: fontWeight}]}>{title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}