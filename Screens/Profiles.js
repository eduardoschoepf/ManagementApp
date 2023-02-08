import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';

class Profiles extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            radioBtnsData: ['Mr', 'Ms'],
            checked: 0,
            firstName: "",
            lastName: "",
            email: "",
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    {this.state.radioBtnsData.map((data, key) => {
                        return (
                            <View key={key}>
                                {this.state.checked == key ?
                                    <TouchableOpacity style={styles.btn}>
                                        <Image style={styles.img} source={require("../assets/img/rb_selected.png")} />
                                        <Text>{data}</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => { this.setState({ checked: key }) }} style={styles.btn}>
                                        <Image style={styles.img} source={require("../assets/img/rb_unselected.png")} />
                                        <Text>{data}</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        )
                    })}
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="First name"
                        onChangeText={value => this.setState({ firstName: value })}
                        defaultValue={this.state.firstName}
                    />
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Last name"
                        onChangeText={value => this.setState({ lastName: value })}
                        defaultValue={this.state.lastName}
                    />
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Email"
                        onChangeText={value => this.setState({ email: value })}
                        defaultValue={this.state.email}
                    />
                </View>
                <Button mode="contained" style={styles.submitBtn} onPress={() => { }}>Add</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerText: {
        color: ''
    },
    submitBtn: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 20,
    },
    img: {
        height: 20,
        width: 20
    },
    btn: {
        flexDirection: 'row'
    }
})

export default Profiles;