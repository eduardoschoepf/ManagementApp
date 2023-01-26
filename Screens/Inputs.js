import React, { Component } from 'react';
import { FlatList, SectionList, View, Text } from 'react-native';

import UserRow from '../Components/UserRow'
import Data from '../Data/data'

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      formatedData: this._fromArrayToSectionData(Data)
    };
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

  _renderSeparator = () => <View style={{ height: 1, backgroundColor: 'grey', marginLeft: 80 }} />

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

  _flatList = () => (
    <FlatList
      data={this.state.data}
      renderItem={this._renderItem}
      keyExtractor={item => item.email}
      ItemSeparatorComponent={this._renderSeparator}
      ListHeaderComponent={this._renderHeader}
      ListFooterComponent={this._renderFooter}
      ListEmptyComponent={this._renderEmpty} />
  )

  _fromArrayToSectionData(data) {
    let formated = data.map((item) => {
      return { title: `${item.name.first} ${item.name.last}`, data: item.months }
    })
    return formated
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
        ListEmptyComponent={this._renderEmpty} />
    );
  }
}

export default Inputs;