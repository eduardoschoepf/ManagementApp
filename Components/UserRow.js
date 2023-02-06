import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import EditingWindow from './EditingWindow'

class UserRow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      newItem: {
        month: this.props.item.month,
        businessDays: this.props.item.businessDays,
        workedDays: this.props.item.workedDays
      }
    }
  }

  _updateModal = (val) => {
    this.setState({ modal: val })
  }

  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.primaryText}>{this.props.item.month}</Text>
        <Text style={styles.secondaryText}>{this.props.item.businessDays}</Text>
        <Text style={styles.secondaryText}>{this.props.item.workedDays != 0 ? this.props.item.workedDays : ""}</Text>
        <Text style={styles.secondaryText}>{this.props.item.workedDays != 0 ? this.props.item.workedDays : this.props.item.businessDays}</Text>
        <Button title="Edit" onPress={() => this._updateModal(true)} />
        <EditingWindow
          item={this.props.item}
          setData={this.props.setData}
          modal={this.state.modal}
          updateModal={this._updateModal} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
    flex: 4
  },
  secondaryText: {
    color: 'grey',
    flex: 2
  },
})

export default UserRow;