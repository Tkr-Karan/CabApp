import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../styleSheets/LoginStyles";
import { LOGIN_CRED } from "../../constants/loginCreds";

const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handlePassword = (pass: string) => {
    setPassword(pass);
  };

  const login = () => {
    if (name === "" || password === "") return;

    if (name === LOGIN_CRED.username && password === LOGIN_CRED.password) {
      console.log("Login successfull");
      setPassword("");
      setName("");
      navigation.navigate("Dashboard");
    } else {
      Alert.alert("wrong creds entered!!☹️");
      console.log("wrong creds");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Image
          style={styles.carImage}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3097/3097180.png",
          }}
        />

        <Text>Username</Text>
        <TextInput
          placeholder="Please enter the name"
          style={styles.username}
          onChangeText={handleNameChange}
          value={name}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.password}
          secureTextEntry={true}
          value={password}
          onChangeText={handlePassword}
        />

        {/* <Button style={styles.loginButton} title="Login" onPress={login} /> */}

        <TouchableOpacity onPress={login}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>

        <Text>
          Not a Member{" "}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("Register")}
          >
            Register Here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
