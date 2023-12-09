import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Feather } from '@expo/vector-icons';
import LoginOverlay from "../../components/LoginOverlay";

export default function Profile() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const handleLogin = () => {
    toggleOverlay();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.profileText}>Profile</Text>
        <TouchableOpacity style={styles.bellIconContainer}>
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={handleLogin}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Log In</Text>
        </View>
      </TouchableWithoutFeedback>
      <LoginOverlay isOverlayVisible={isOverlayVisible} onClose={toggleOverlay} navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  profileText: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  loginTextContainer: {
    marginTop: 20,
  },
  loginText: {
    color: 'black',
    fontSize: 16,
  },
  bellIconContainer: {
    marginRight: 10,
  },
});
