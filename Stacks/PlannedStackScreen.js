import { Component }  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Planned from '../Screens/Planned';

const Stack = createStackNavigator();

class PlannedStackScreen extends Component {

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Planned Screen" component={Planned} />
            </Stack.Navigator>
        )
    }
}

export default PlannedStackScreen