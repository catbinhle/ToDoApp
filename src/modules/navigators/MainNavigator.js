import {
    createStackNavigator, 
    createAppContainer
} from "react-navigation"
import * as Types from "../base/types"
import * as Screens from "../base/index"
import colors from "../../configs/colors"

//MAIN
const MainNavigator = createStackNavigator(
    {
        [Types.TODO_SCREEN]: {
            screen: Screens.ToDoScreen,
            navigationOptions: {
                headerTitle: 'To-do Items',
                headerStyle: {backgroundColor: colors.darkBlue},
                headerTitleStyle: {color: colors.white}
            },
        },
        [Types.UPDATE_TODO_SCREEN]: {
            screen: Screens.ItemScreen,
            navigationOptions: {
                headerStyle: {backgroundColor: colors.darkBlue},
                headerTitleStyle: {color: colors.white},
                headerTintColor: colors.white
            },
        }
    }
)

export default createAppContainer(MainNavigator)