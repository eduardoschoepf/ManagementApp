import { Component }  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Actuals from '../Screens/Actuals';

const Stack = createStackNavigator();

class ActualsStackScreen extends Component {

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Actuals" component={Actuals} />
            </Stack.Navigator>
        )
    }
}

export default ActualsStackScreen