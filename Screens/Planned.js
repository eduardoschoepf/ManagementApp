import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Planned extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Planned</Text>
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

export default Planned;