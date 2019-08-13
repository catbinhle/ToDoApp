import React, { PureComponent } from 'react'
import {
    View, TextInput
} from 'react-native'
import styles from './styles'
import colors from '../../configs/colors'
import Button from '../buttonCommon/ButtonComon'
import * as Strings from '../../configs/strings'

export default class TextBox extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    componentWillUpdate(nextProps) {
        if (this.props.text != nextProps.text) {
            this.setState({
                text: nextProps.text
            })
          }
    }
    
    render() {

        const { placeholder } = this.props
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor={colors.grey}
                    returnKeyType={Strings.Done}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    onEndEditing={(e) => this._onEndEditting(e.nativeEvent.text)}
                /> 
                <Button title={Strings.Done} isBorder={false} titleColor={colors.black} 
                        width={'15%'}
                        height={44}
                        backgroundColor={colors.transparent}
                        event={() => this._onEndEditting(this.state.text)}
                />            
            </View>
        )
    }

    _onEndEditting = (text) => {
        this.props.event(text)
    }
}