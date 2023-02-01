import { Component }  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inputs from '../Screens/Inputs';

const Stack = createStackNavigator();

class InputsStackScreen extends Component {

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Inputs Screen" component={Inputs} />
            </Stack.Navigator>
        )
    }
}

export default InputsStackScreen