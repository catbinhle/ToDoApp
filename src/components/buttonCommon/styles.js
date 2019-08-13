import { StyleSheet } from "react-native"
import colors from '../../configs/colors'

const styles = StyleSheet.create({
    container: {
        margin: 4,
        borderRadius: 4,
        borderColor: colors.grey,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 16,
        color: colors.white,
        textAlign: 'center'
    }
})

export default styles