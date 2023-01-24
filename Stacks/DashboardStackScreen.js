import { Component }  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../Screens/Dashboard';

const Stack = createStackNavigator();

class DashboardStackScreen extends Component {

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Dashboard} />
            </Stack.Navigator>
        )
    }
}

export default DashboardStackScreen