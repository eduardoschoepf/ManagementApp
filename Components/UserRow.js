import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import EditingWindow from './EditItem'

class UserRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  updateModal = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.primaryText}>{this.props.item.month}</Text>
        <Text style={styles.secondaryText}>{this.props.item.businessDays}</Text>
        <Text style={styles.secondaryText}>{this.props.item.workedDays != 0 ? this.props.item.workedDays : ""}</Text>
        <Text style={styles.secondaryText}>{this.props.item.workedDays != 0 ? this.props.item.workedDays : this.props.item.businessDays}</Text>
        <Button icon="" mode="contained" onPress={() => this.updateModal()}>Edit</Button>
        <EditingWindow
          item={this.props.item}
          setData={this.props.setData}
          modal={this.state.modal}
          updateModal={this.updateModal} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
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