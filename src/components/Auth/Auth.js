import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Auth(props) {
  const rememberUser = async (login, password) => {
    try {
      await AsyncStorage.setItem("login", login);
    } catch (error) {
      console.log(error);
    }
    try {
      await AsyncStorage.setItem("password", password);
    } catch (error) {
      console.log(error);
    }
  };
  const getRememberedUser = async () => {
    try {
      const login = await AsyncStorage.getItem("login");
      const password = await AsyncStorage.getItem("password");

      if (login !== null && password !== null) {
        props.loginIn(login, password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRememberedUser();
  }, []);

  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainText}>Auth Screen</Text>
        <TextInput
          placeholder={"login"}
          style={styles.input}
          onChangeText={(login) => setLogin(login)}
          value={login}
        />
        <TextInput
          placeholder={"password"}
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.loginIn(login, password).then(() => {
              rememberUser(login, password);
            });
          }}
        >
          <Text>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Registration");
          }}
        >
          <Text>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 4,
    fontSize: 30,
    width: 200,
    height: 45,
    margin: 5,
  },
  button: {
    borderWidth: 2,
    borderColor: "black",
    margin: 5,
  },
  mainText: {
    fontSize: 30,
  },
});

export default Auth;
