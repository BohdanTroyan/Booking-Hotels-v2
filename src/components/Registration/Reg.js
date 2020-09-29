import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

function Reg(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState("0");
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainText}>Registration Screen</Text>
        <TextInput
          placeholder={"login"}
          style={styles.input}
          onChangeText={(login) => setLogin(login)}
          value={login}
        />
        <TextInput
          placeholder={"password"}
          style={styles.input}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <TextInput
          keyboardType={"numeric"}
          placeholder={"balance"}
          style={styles.input}
          onChangeText={(balance) => setBalance(balance)}
          value={balance}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.saveUser(login, password, balance);
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

export default Reg;
