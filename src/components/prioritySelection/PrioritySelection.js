import React, { PureComponent } from 'react'
import {
    View
} from 'react-native'
import styles from './styles'
import Button from '../buttonCommon/ButtonComon'
import colors from '../../configs/colors'
import * as Strings from '../../configs/strings'

const CONTROL_BUTTON_ENUM = { HIGH: 0, MEDIUM: 1, LOW: 2}

export default class PrioritySelection extends PureComponent {

    state = {
        activeBtn: 0
    }

    componentWillUpdate(nextProps) {
        if (this.props.priority != nextProps.priority) {
            this.setState({
                activeBtn: nextProps.priority
            })
          }
    }

    render() {
        const { activeBtn } = this.state
        return (
            <View style={styles.container}>
                <Button title={Strings.High} isBorder={true}
                        width={'30%'}
                        height={32}
                        titleColor= {(activeBtn === CONTROL_BUTTON_ENUM.MEDIUM || activeBtn === CONTROL_BUTTON_ENUM.LOW) ? colors.black : colors.white}
                        backgroundColor={(activeBtn === CONTROL_BUTTON_ENUM.MEDIUM || activeBtn === CONTROL_BUTTON_ENUM.LOW) ? colors.transparent :  colors.mediumGreen}
                        event={() => this._onPress(CONTROL_BUTTON_ENUM.HIGH)}
                />
                <Button title={Strings.Medium} isBorder={true}
                        width={'30%'}
                        height={32}
                        titleColor= {(activeBtn === CONTROL_BUTTON_ENUM.HIGH || activeBtn === CONTROL_BUTTON_ENUM.LOW) ? colors.black : colors.white}
                        backgroundColor={(activeBtn === CONTROL_BUTTON_ENUM.HIGH || activeBtn === CONTROL_BUTTON_ENUM.LOW) ? colors.transparent :  colors.mediumGreen}
                        event={() => this._onPress(CONTROL_BUTTON_ENUM.MEDIUM)}
                />
                <Button title={Strings.Low} isBorder={true}
                        width={'30%'}
                        height={32}
                        titleColor= {(activeBtn === CONTROL_BUTTON_ENUM.MEDIUM || activeBtn === CONTROL_BUTTON_ENUM.HIGH) ? colors.black : colors.white}
                        backgroundColor={(activeBtn === CONTROL_BUTTON_ENUM.MEDIUM || activeBtn === CONTROL_BUTTON_ENUM.HIGH) ? colors.transparent :  colors.mediumGreen}
                        event={() => this._onPress(CONTROL_BUTTON_ENUM.LOW)}
                />
            </View>
        )
    }

    _onPress = (btn) => {
        this.props.event(btn)
        this.setState({
            activeBtn: btn
        })
    }
}