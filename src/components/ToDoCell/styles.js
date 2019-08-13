import { StyleSheet } from "react-native"
import colors from '../../configs/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        margin: 2,
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: colors.grey,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        height: '100%',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContent: {
        width: '75%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 8
    },
    label: {
        fontSize: 18,
        color: colors.white,
        textAlign: 'left',
        fontWeight: '400'
    }
})

export default styles