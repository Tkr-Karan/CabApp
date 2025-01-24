// components/Register/Register.js
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../../styleSheets/RegisterStyles";

const Register = ({ navigation }) => {
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const register = () => {
    if (
      formData.userName === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    )
      return;
    else {
      console.log(formData);
      setFormData({
        userName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
    console.log("registered");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.registContainer}>
        <Text>Name</Text>
        <TextInput
          value={formData.userName}
          style={styles.inputField}
          placeholder="Enter Username"
          onChangeText={(value) => handleInputChange("userName", value)}
        />

        <Text>Phone</Text>
        <TextInput
          value={formData.phone}
          style={styles.inputField}
          placeholder="enter phone number"
          onChangeText={(value) => handleInputChange("phone", value)}
          maxLength={10}
        />

        <Text>Email</Text>
        <TextInput
          value={formData.email}
          style={styles.inputField}
          placeholder="enter your email"
          onChangeText={(value) => handleInputChange("email", value)}
        />

        <Text>Password</Text>
        <TextInput
          value={formData.password}
          style={styles.inputField}
          placeholder="enter password"
          onChangeText={(value) => handleInputChange("password", value)}
        />

        <Text>Confirm Password</Text>
        <TextInput
          value={formData.confirmPassword}
          style={styles.inputField}
          placeholder="enter confirm password"
          onChangeText={(value) => handleInputChange("confirmPassword", value)}
        />

        <TouchableOpacity onPress={register}>
          <Text style={styles.registerButton}>Register</Text>
        </TouchableOpacity>

        <Text>
          Already a member{" "}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")}
          >
            Log In
          </Text>{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
