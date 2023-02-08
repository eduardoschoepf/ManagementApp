import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
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

    _renderItem = ({ item }) => (
        <UserRow
            item={item}
            setData={this._setData} />
    )

    _renderSeparator = () => <View style={{ height: 1, backgroundColor: 'grey', marginLeft: 60 }} />

    _renderHeader = () => (
        <View style={{ backgroundColor: 'white', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ flex: 4, padding: 10 }}>
                    <Text style={{}}>Identification:</Text>
                    <Text style={{ fontSize: 20 }}>{this.state.data.email}</Text>
                </View>
                <View style={{ flex: 1, padding: 10 }}>
                    <Text style={{}}> Year: </Text>
                    <Text style={{ fontSize: 26 }}>2023</Text>
                </View>
            </View>

            <Text style={{ height: 1, backgroundColor: 'grey' }} />
            <View style={styles.row}>
                <Text style={{ flex: 3 }}>Month</Text>
                <Text style={{ flex: 2 }}>Days</Text>
                <Text style={{ flex: 2 }}>Real</Text>
                <Text style={{ flex: 2 }}>Worked</Text>
                <Text style={{ flex: 2 }}></Text>
            </View>
            <Text style={{ height: 1, backgroundColor: 'grey' }} />
        </View>
    )

    _renderEmpty = () => (
        <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
            <Text>Aucun résultat</Text>
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

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
})

export default Inputs;