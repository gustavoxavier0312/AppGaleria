import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Add {
  onPress: () => void;
}

const AddButton = ({ onPress }: Add) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>＋</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#22c55e", 
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 12,
  },
  text: {
    color: "#fff",
    fontSize: 32,
    fontFamily: "Poppins_700Bold",
    marginBottom: 2,
  },
});

export default AddButton;
