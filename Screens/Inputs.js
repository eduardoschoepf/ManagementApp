import React from 'react';
import { FlatList, SectionList, View, Text } from 'react-native';
import UserRow from '../Components/UserRow'
import Data from '../Data/data'
import { ref, child, get, set } from "firebase/database";
import { app, analytics, db } from '../src/Firebase/config'

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      formatedData: {}
    }
    this._setData();
  }

  _setData = () => {
    get(child(ref(db, "consultants/"), "karljohnsonexamplecom")).then((snapshot) => {
      console.log(snapshot.val());
      this.setState({ 
        data : snapshot.val(),
        formatedData : this._fromArrayToSectionData(snapshot.val())
      })
    });
  }

  _writeData(userId, email) {
  set(ref(db, "consultants/" + userId), {
    email: email
  });
}

  _renderItem = ({ item }) => (
    <UserRow
      month={item.month}
      businessDays={item.businessDays}
      workedDays={item.workedDays} />
  )

  _renderSectionHeader = ({ section }) => (
    <View>
      <Text>{section.title}</Text>
    </View>
  );

  _renderSeparator = () => <View style={{ height: 1, backgroundColor: 'grey', marginLeft: 80 }}/>

  _renderHeader = () => (
    <View style={{ height: 40, backgroundColor: 'white', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 30 }}>2023</Text>
    </View>
  )

  _renderEmpty = () => (
    <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
      <Text>Aucun résultat</Text>
    </View>
  )

  _renderSection = ({ section }) => (
    <View style={{ padding: 8, backgroundColor: '#59036E' }}>
      <Text style={{ color: 'white' }}>{section.title}</Text>
    </View>
  )

  _fromArrayToSectionData(item) {
    return { title: `${item.name.first} ${item.name.last}`, data: item.months }
  }

  render() {
    return (
      <SectionList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={item => item.email}
        ItemSeparatorComponent={this._renderSeparator}
        sections={this.state.formatedData}
        renderSectionHeader={this._renderSection}
        ListHeaderComponent={this._renderHeader}
        ListEmptyComponent={this._renderEmpty}/>
    );
  }
}

export default Inputs;