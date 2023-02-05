import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';

class UserRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.primaryText}>{this.props.month}</Text>
        <Text style={styles.secondaryText}>{this.props.businessDays}</Text>
        <Text style={styles.secondaryText}>{this.props.workedDays != null ? this.props.workedDays : ""}</Text>
        <Text style={styles.secondaryText}>{this.props.workedDays != null ? this.props.workedDays : this.props.businessDays}</Text>
        <Button onPress={() => this.props.getItem(this.props.item)}>Press</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
    flex:4
  },
  secondaryText: { color: 'grey', flex: 2 },
})

export default UserRow;