import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

interface LoginOverlayProps {
  isOverlayVisible: boolean;
  onClose: () => void;
  navigation: any;
}

const LoginOverlay: React.FC<LoginOverlayProps> = ({ isOverlayVisible, onClose, navigation }) => {
  const [email, setEmail] = useState<string>('');

  const toggleModal = () => {
    onClose();
  };

  const handleContinue = () => {
    // You can navigate to the Login component or any other screen here
    navigation.navigate('Login');
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isOverlayVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.loginContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <AntDesign name="close" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.loginHeader}>Log in or sign up</Text>
          </View>
          <View style={styles.headerLine}></View>

          {/* Email Input Box */}
          <View style={styles.DoNothingButton}>
            <TextInput
              style={styles.emailInput}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#777"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          {/* Continue Button */}
          <TouchableOpacity style={styles.continueButton} onPress={() => {handleContinue}}>
            <Text style={styles.continueButtonsText}>Continue</Text>
          </TouchableOpacity>

          {/* Horizontal Line and 'or' Text */}
          <View style={styles.orContainer}>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.orText}>or</Text>
            <View style={styles.horizontalLine}></View>
          </View>

          {/* Continue with Phone */}
          <TouchableOpacity style={styles.DoNothingButton} onPress={() => {/* Handle continue with phone */}}>
            <Feather size={24} name="phone"></Feather>
            <Text style={styles.DoNothingButtonsText}>Continue with Phone</Text>
          </TouchableOpacity>

          {/* Continue with Apple */}
          <TouchableOpacity style={styles.DoNothingButton} onPress={() => {/* Handle continue with Apple */}}>
            <AntDesign name="apple1" size={24} color="black" />
            <Text style={styles.DoNothingButtonsText}>Continue with Apple</Text>
          </TouchableOpacity>

          {/* Continue with Google */}
          <TouchableOpacity style={styles.DoNothingButton} onPress={() => {/* Handle continue with Google */}}>
            <AntDesign name="google" size={24} color="black" />
            <Text style={styles.DoNothingButtonsText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Continue with Facebook */}
          <TouchableOpacity style={styles.DoNothingButton} onPress={() => {/* Handle continue with Facebook */}}>
            <AntDesign name="facebook-square" size={24} color="black" />
            <Text style={styles.DoNothingButtonsText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loginContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    flex: 0.9,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    marginBottom: 10,
  },
  loginHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    flex: 1,
  },
  headerLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  DoNothingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  DoNothingButtonsText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
    flex: 1,
  },
  emailInput: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0066',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  continueButtonsText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
    flex: 1,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginBottom: 10,
  },
  horizontalLine: {
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  orText: {
    color: '#777',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LoginOverlay;
