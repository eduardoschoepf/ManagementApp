import React from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

class EditingWindow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newItem: {
        month: this.props.item.month,
        businessDays: this.props.item.businessDays,
        workedDays: this.props.item.workedDays
      }
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Modal transparent={true} visible={this.props.modal} >
              <View style={styles.modalContainer}>
                <Text style={styles.title}>{this.props.item.month.toUpperCase()}</Text>
                <View style={styles.rowContainer}>
                  <Text style={styles.label}>Business days : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder={this.props.item.businessDays.toString()}
                    placeholderTextColor="#b3b1b1"
                    keyboardType="numeric"
                    onChangeText={(valor) => {
                      this.setState({
                        newItem: {
                          month: this.props.item.month,
                          businessDays: parseInt(valor),
                          workedDays: parseInt(this.props.item.workedDays) !== parseInt(this.state.newItem.workedDays) ? parseInt(this.state.newItem.workedDays) : parseInt(this.props.item.workedDays),
                        }
                      })
                    }} />
                </View>
                <View style={styles.rowContainer}>
                  <Text style={styles.label}>Worked days : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder={this.props.item.workedDays.toString()}
                    placeholderTextColor="#b3b1b1"
                    keyboardType="numeric"
                    onChangeText={(valor) => {
                      this.setState({
                        newItem: {
                          month: this.props.item.month,
                          businessDays: parseInt(this.props.item.businessDays) !== parseInt(this.state.newItem.businessDays) ? parseInt(this.state.newItem.businessDays) : parseInt(this.props.item.businessDays),
                          workedDays: parseInt(valor)
                        }
                      })
                    }} />
                </View>
                <Text style={styles.closeBtn} onPress={() => this.props.updateModal(false)}>X</Text>
                <TouchableOpacity 
                  style={styles.submitBtn}
                  onPress={() => {
                    this.props.setData(this.state.newItem);
                    this.props.updateModal(false)
                  }}>
                  <Text style={styles.text}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    position: 'absolute',
    top: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: "row",
    height: 30,
    justifyContent: "space-between",
    alignItems: "center"
  },
  label: {
    flex: 1
  },
  textInput: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 200,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  submitBtn: {
    backgroundColor: '#2596BE',
    fontSize: 20,
    padding: 10,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
  closeBtn: {
    position: 'absolute',
    fontSize: 20,
    padding: 10,
    color: 'grey',
    top: 10,
    right: 10,
  },
})
export default EditingWindow