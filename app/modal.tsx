import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { storage } from "@/store/mmkv";
import { useMMKVString } from "react-native-mmkv";

const ModalScreen = () => {
  const [name, setName] = useMMKVString("user.name", storage);

  const updateName = () => {
    storage.set("user.name", "harddfoon ");
  };
  return (
    <View style={styles.container}>
      <Text>Welcome to the app : {name}</Text>
      <Button title="update" onPress={updateName} />
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
