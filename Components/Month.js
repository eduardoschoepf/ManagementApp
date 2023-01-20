import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Month extends React.Component {
    
    render() {
        return (
            <View style={styles.main_container}>
                <Text>Month</Text>
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

export default Month;