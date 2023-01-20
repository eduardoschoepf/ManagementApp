import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import { FontAwesome, FontAwesome5, MaterialIcons, SimpleLineIcons, Foundation} from "@expo/vector-icons";
import Dashboard from '../Components/Dashboard';
import Month from '../Components/Month';
import Year from '../Components/Year';
import Contracts from '../Components/Contracts';
import Scheduling from '../Components/Scheduling';


const BottomTabNavigator = createMaterialBottomTabNavigator(
    {
        Dashboard: { 
            screen: Dashboard,
            navigationOptions: {
                tabBarLabel: "Dashboard",
                tabBarIcon: (tabInfo) => (
                    <FontAwesome5 name="money-check-alt"
                    size={tabInfo.focused ? 26 : 20}
                    color={tabInfo.tintColor}
                  />
                ),
              },
        },
        Month: { 
            screen: Month,
            navigationOptions: {
                tabBarLabel: "Month",
                tabBarIcon: (tabInfo) => (
                    <FontAwesome name="list-alt"
                    size={tabInfo.focused ? 26 : 20}
                    color={tabInfo.tintColor}
                  />
                ),
              },
        },
        Year: { 
            screen: Year,
            navigationOptions: {
                tabBarLabel: "Year",
                tabBarIcon: (tabInfo) => (
                    <Foundation name="results-demographics"
                    size={tabInfo.focused ? 26 : 20}
                    color={tabInfo.tintColor}
                  />
                ),
              },
        },
        Contracts: { 
            screen: Contracts,
            navigationOptions: {
                tabBarLabel: "Contracts",
                tabBarIcon: (tabInfo) => (
                    <MaterialIcons name="app-registration"
                    size={tabInfo.focused ? 26 : 20}
                    color={tabInfo.tintColor}
                  />
                ),
              },
        },
        Scheduling: { 
            screen: Scheduling,
            navigationOptions: {
                tabBarLabel: "Scheduling",
                tabBarIcon: (tabInfo) => (
                    <SimpleLineIcons name="organization"
                    size={tabInfo.focused ? 26 : 20}
                    color={tabInfo.tintColor}
                  />
                ),
              },
         }
    },
    {
        initialRouteName: 'Dashboard',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
          barStyle: { backgroundColor: '#694fad' },
    });

export default createAppContainer(BottomTabNavigator);