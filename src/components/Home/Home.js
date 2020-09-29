import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  AsyncStorage,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserContainer from "../User/UserContainer";
import { TouchableOpacity } from "react-native-gesture-handler";

function HotelCard({ data }) {
  const navigation = useNavigation();
  return (
    <View style={styles.HotelCard}>
      <Image style={styles.image} source={{ uri: data.mainImage }} />
      <View style={styles.options}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Hotel", {
              id_Hotel: data.id,
            });
          }}
        >
          <Text style={styles.textName}>{data.nameHotel}</Text>
        </TouchableOpacity>
        <Text style={styles.textDiscribe}>{data.discribe}</Text>
      </View>
    </View>
  );
}

function Home(props) {
  const forgetUser = async () => {
    try {
      await AsyncStorage.removeItem("login");
    } catch (error) {
      console.log(error);
    }
    try {
      await AsyncStorage.removeItem("password");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    props.getHotelsData();
  }, []);

  return (
    <ScrollView>
      <UserContainer />
      <View style={styles.container}>
        {props.hotels.hotels.map((data) => (
          <HotelCard data={data} key={data.id} toHotel={props.toHotel} />
        ))}
      </View>
      <TouchableOpacity
        style={styles.exit}
        onPress={() => {
          props.signOut();
          forgetUser();
        }}
      >
        <Text style={styles.exitText}>Выйти</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { margin: 2, borderWidth: 1, borderRadius: 30 },
  HotelCard: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 30,
    margin: 5,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 28,
  },
  options: {
    width: "50%",
  },
  textName: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "300",
  },
  textDiscribe: {
    fontSize: 14,
    fontWeight: "300",
    margin: 5,
  },
  exit: {
    margin: 5,
  },
  exitText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
  },
});

export default Home;
