import { Component }  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profiles from '../Screens/Profiles';

const Stack = createStackNavigator();

class ProfilesStackScreen extends Component {

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Profiles" component={Profiles} />
            </Stack.Navigator>
        )
    }
}

export default ProfilesStackScreen