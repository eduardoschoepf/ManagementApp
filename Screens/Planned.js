import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Planned extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.innerText}>Planned</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dbba4d'
    },
    innerText: {
        color: '#f5f4f0'
    }
})

export default Planned;