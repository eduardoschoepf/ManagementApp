import React from 'react';
import { StyleSheet, View, FlatList, Alert, Text } from 'react-native';
import { ListItem } from 'react-native-elements'

class Inputs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                name: 'John Doe',
                startDate: '01/01/2022',
                endDate: '01/01/2023',
                iban: 'PT50 000 0000 0001 2345 67'
              },{
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28co',
                name: 'Dorn Tiup',
                startDate: '01/01/2022',
                endDate: '01/01/2023',
                iban: 'PT50 000 0000 0001 2345 67'
              }],
            searchedText: "" // Initialisation de notre donnée searchedText dans le state
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={renderItem}
                />
            </View>
        )
    }
}

const getListViewItem = (item) => {  
    Alert.alert(item.name);  
}

const renderItem = ({item}) => {
    return (
        <View style={styles.item}>
            <Text>{`${item.name} - ${item.iban}`}</Text>
        </View>       
    );
}

const styles = StyleSheet.create({
    container: {  
        flex: 1,
        marginTop: 50 
    },  
    item: {  
        padding: 5,  
        fontSize: 20,  
        height: 40,
    },  
})

export default Inputs;