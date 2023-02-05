import React from 'react';
import { FlatList, View, Text } from 'react-native';
import UserRow from '../Components/UserRow'
import { ref, child, get, set } from "firebase/database";
import { db } from '../src/Firebase/config'

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    _getData = () => {
        get(child(ref(db, "consultants/"), "0")).then((snapshot) => {
            this.setState({
                data: snapshot.val()
            })
        });
    }

    _setData = () => {
        set(ref(db, "consultants/0"), this.state.data);
    }

    _getItem = (item) => {
        alert(`Month : ${item.month}\nBusiness days : ${item.businessDays}\nWorked days : ${item.workedDays}`);
    }

    _renderItem = ({ item }) => (
        <UserRow
            month={item.month}
            businessDays={item.businessDays}
            workedDays={item.workedDays}
            item={item} 
            getItem={this._getItem}/>
    )

    _renderSeparator = () => <View style={{ height: 1, backgroundColor: 'grey', marginLeft: 80 }} />

    _renderHeader = () => (   
        <View style={{ height: 60, backgroundColor: 'white', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 26 }}>2023</Text>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>{this.state.data.email}</Text>
        </View>
    )

    _renderEmpty = () => (
        <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
            <Text>Aucun résultat</Text>
        </View>
    )

    _renderSectionHeader = ({ section }) => (
        <View>
            <Text>{section.title}</Text>
        </View>
    );

    _renderSection = ({ section }) => (
        <View style={{ padding: 8, backgroundColor: '#59036E' }}>
            <Text style={{ color: 'white' }}>{section.title}</Text>
        </View>
    )

    render() {
        this._getData();
        return (
            <FlatList
                data={this.state.data.months}
                renderItem={this._renderItem}
                keyExtractor={item => item.month}
                ItemSeparatorComponent={this._renderSeparator}
                ListHeaderComponent={this._renderHeader}
                ListEmptyComponent={this._renderEmpty} />
        );
    }
}

export default Inputs;