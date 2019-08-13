import { StyleSheet } from "react-native"
import colors from '../../../../configs/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    headerContainer: {
        margin: 8,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    noContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lineView: {
        backgroundColor: colors.darkBlue, 
        height: 1
    },
    bottomNotesHeaderContainer: {
        backgroundColor: colors.darkBlue,
        marginBottom: 8
    },
    bottomNotesHeader: {
        height: 24, 
        margin: 8,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    },
    bottomContentView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginLeft: 16, 
        marginRight: 16
    },
    iconContentView: {
        width: 16, 
        height: 16 , 
        borderColor: colors.black, 
        borderWidth: 0.5
    },
    contentTextView: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textLabel: {
        fontSize: 16,
        color: colors.black,
        textAlign: 'center',
        fontWeight: 'bold'
    },
})

export default styles