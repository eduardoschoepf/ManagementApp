import React from 'react';
import { FlatList, View, Text } from 'react-native';
import UserRow from '../Components/UserRow'
import { ref, child, get, set } from "firebase/database";
import { db } from '../src/Firebase/config'

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    _getData = () => {
        get(child(ref(db, "consultants/"), "0")).then((snapshot) => {
            this.setState({
                data: snapshot.val()
            })
        });
    }

    _getAddress = (month) => {
        let address = "consultants/0/months/"
        switch (month) {
            case "jan":
                return address + "0/";
                break;
            case "fev":
                return address + "1/";
                break;
            case "mar":
                return address + "2/";
                break;
            case "apr":
                return address + "3/";
                break;
            case "may":
                return address + "4/";
                break;
            case "jun":
                return address + "5/";
                break;
            case "jul":
                return address + "6/";
                break;
            case "aug":
                return address + "7/";
                break;
            case "sep":
                return address + "8/";
                break;
            case "oct":
                return address + "9/";
                break;
            case "nov":
                return address + "10/";
                break;
            case "dec":
                return address + "11/";
                break;
            default:
                return null;
                break;
        }
    }

    _setData = (item) => {
        set(ref(db, this._getAddress(item.month)), item);
        this._getData();
    }

    _getItem = (item) => {
        alert(`Month : ${item.month}\nBusiness days : ${item.businessDays}\nWorked days : ${item.workedDays}`);
    }

    _renderItem = ({ item }) => (
        <UserRow
            item={item}
            setData={this._setData} />
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
                keyExtractor={(item) => item.month}
                ItemSeparatorComponent={this._renderSeparator}
                ListHeaderComponent={this._renderHeader}
                ListEmptyComponent={this._renderEmpty} />
        );
    }
}

export default Inputs;