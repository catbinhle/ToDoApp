import { StyleSheet } from "react-native"
import colors from '../../configs/colors'

const styles = StyleSheet.create({
    container: {
        margin: 8, 
        marginTop: 0,
        height: 44,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: colors.grey,
        justifyContent: "center", 
        alignItems: "center",
        flexDirection: 'row',
    },
    textInput: {
        width: '85%',
        padding: 8,
        fontSize: 16,
        textAlign: 'left'
    }
})

export default styles