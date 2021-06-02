import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

export default class Write extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={(styles.displaytext, { fontSize: 24, width: "100%", height: 40, marginTop: 50, borderWidth: 3,})}
          placeholder="story's name"
        />
        <TextInput
          style={
            (styles.displaytext,
            { fontSize: 24, width: "100%", height: 40, marginTop: 30, borderWidth: 3 })
          }
          placeholder="author"
        />
        <TextInput
          style={
            (styles.displaytext,
            { fontSize: 18, width: "100%", height: 260, marginTop: 20, borderWidth: 3, })
          }
          placeholder="story"
        />

        <TouchableOpacity style={styles.button}>submit</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  displaytext: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    fontFamily: "Fira Sans, Menlo",
    fontWeight: "bold",
    outline: "none",
  },

  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: "Menlo",
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'lightgreen'
  }
});
