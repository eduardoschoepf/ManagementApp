import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, FontAwesome, Foundation, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
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
        activeColor="#694fad"
        inactiveColor="#694fad"
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={DashboardStackScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name={"home"} size={24} color={"#d5d5e0"}/>
            ),
          }}
          />
        <Tab.Screen 
          name="Actuals" 
          component={ActualsStackScreen} 
          options={{
            tabBarIcon: () => (
              <FontAwesome name={"list-alt"} size={24} color={"#d5d5e0"}/>
            ),
          }}
          />
        <Tab.Screen 
          name="Planned" 
          component={PlannedStackScreen} 
          options={{
            tabBarIcon: () => (
              <Foundation name={"results-demographics"} size={24} color={"#d5d5e0"}/>
            ),
          }}
          />
        <Tab.Screen 
          name="Profiles" 
          component={ProfilesStackScreen} 
          options= {{
            tabBarIcon: () => (
                <MaterialIcons name={"app-registration"} size={24} color={"#d5d5e0"}/>
            ),
          }}
          />
        <Tab.Screen 
          name="Inputs" 
          component={InputsStackScreen} 
          options= {{
            tabBarIcon: () => (
              <SimpleLineIcons name={"organization"} size={24} color={"#d5d5e0"}/>
            ),
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}