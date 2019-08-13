import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapperContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    wrapperHour: {
        flex: 6,
        alignItems: 'center',
        borderRightWidth: 0.5,
        borderColor: 'grey'
    },
    wrapperMinute: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    },
    text: {
        alignSelf: 'center',
        fontSize: 16
    },
    selectedTime: {
        backgroundColor: "#00adf5",
        borderRadius: 16,
        height: 32,
        width: 32
    }
})

export default styles