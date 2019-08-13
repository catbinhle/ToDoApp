import React, { Component } from 'react'
import {
    View, Text, TouchableOpacity
} from 'react-native'

import styles from "./styles"


const hours = ['00','01','02','03','04','05','06',
    '07','08','09','10','11','12','13','14',
    '15','16','17','18','19','20','21','22','23'];

const minutes = ['00', '15', '30', '45'];

export default class SelectTime extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log(this.props)
        const newDate = new Date()
        const hour = newDate.getHours()
        const minute = newDate.getMinutes()
        return (
            <View styles={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.wrapperHour}>
                        <View  style={[styles.header,{width: '100%'}]}>
                            <Text styles={styles.text}>hour</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row',flexWrap: 'wrap',alignItems: 'center'}}>
                            {
                                hours.map((item,index) => (
                                        <View key={'hour' + index} style={{ height: 32, width: '16.66%',alignItems: "center",justifyContent: "center"}}>
                                            <TouchableOpacity  disabled={this.props.isToday&&item<hour} style={{opacity: this.props.isToday&&item<hour? 0.3:1}} onPress={()=> this.props.onHourPress(index)}>
                                                <View style={[this.props.hour===index?styles.selectedTime:{},{alignItems: "center",justifyContent: "center"}]}>
                                                    <Text style={[styles.text,{color: this.props.hour===index?'white': 'grey'}]}>{item}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                ))
                            }
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View  style={styles.header}>
                            <Text styles={styles.text}>min</Text>
                        </View>
                        <View style={styles.wrapperMinute}>
                            {
                                minutes.map((item,index) => (
                                    <View key={'minute' + index} style={{height: 32, flex: 1, alignItems: "center", justifyContent: "center"}} >
                                        <TouchableOpacity
                                            disabled={this.props.isToday&&this.props.hour===hour&&item<minute}
                                            onPress={ ()=> this.props.onMinutePress(index)}
                                            style={{opacity: this.props.isToday&&this.props.hour===hour&&item<minute? 0.3:1}}>
                                            <View style={[this.props.minute===index?styles.selectedTime:{},{alignItems: "center",justifyContent: "center"}]}>
                                                <Text style={[styles.text,{color: this.props.minute===index?'white': 'grey'}]}>{item}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                ))
                            }
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}