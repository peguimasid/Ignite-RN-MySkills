import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15,
  },
});

export default Button;
