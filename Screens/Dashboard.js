import { Component }  from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Dashboard extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Dashboard</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Dashboard