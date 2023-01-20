import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Year extends React.Component {
    
    render() {
        return (
            <View style={styles.main_container}>
                <Text>Year</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Year;