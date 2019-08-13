import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start'
    },
    headerContainer: {
        margin: 8,
        height: 24,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    selectionView: {
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calendar: {
        width: '100%'
    },
    updateButtonView: {
        marginTop: 8,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLabel: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        fontWeight: 'bold'
    }
})

export default styles