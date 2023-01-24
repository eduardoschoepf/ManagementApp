import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Profiles extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.innerText}>Profiles</Text>
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

export default Profiles;