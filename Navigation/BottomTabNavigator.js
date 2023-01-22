import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome, FontAwesome5, MaterialIcons, SimpleLineIcons, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import DashboardStackScreen from '../Stacks/DashboardStackScreen';
import ActualsStackScreen from '../Stacks/ActualsStackScreen';
import PlannedStackScreen from '../Stacks/PlannedStackScreen';
import ProfilesStackScreen from '../Stacks/ProfilesStackScreen';
import InputsStackScreen from '../Stacks/InputsStackScreen';

const Tab = createMaterialBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={DashboardStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          />
        <Tab.Screen name="Actuals" component={ActualsStackScreen} />
        <Tab.Screen name="Planned" component={PlannedStackScreen} />
        <Tab.Screen name="Profiles" component={ProfilesStackScreen} />
        <Tab.Screen name="Inputs" component={InputsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}