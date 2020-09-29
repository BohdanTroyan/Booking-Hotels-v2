import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import UserContainer from "../User/UserContainer";

function RoomCard({ data, idh }) {
  const navigation = useNavigation();
  return (
    <View style={styles.roomCardContainer}>
      <Image source={{ uri: data.image }} style={styles.roomCardImage} />
      <View style={styles.roomCardDiscribe}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Room", {
              id_Hotel: idh,
              id_Room: data.id,
            });
          }}
        >
          <Text style={styles.roomCardNameRoom}>{data.nameRoom}</Text>
        </TouchableOpacity>
        <Text style={styles.roomCardDiscribeText}>Номер {data.number}</Text>
        <Text style={styles.roomCardDiscribeText}>Цена {data.price}</Text>
      </View>
    </View>
  );
}

function Hotel({ hotel }) {
  return (
    <ScrollView>
      <UserContainer />
      <View style={styles.container}>
        <Text style={styles.textName}>{hotel.nameHotel}</Text>
        <Image source={{ uri: hotel.mainImage }} style={styles.mainImage} />
        <Text style={styles.textDiscribe}>{hotel.discribe}</Text>
        <Text style={styles.freeRooms}>Доступные номера</Text>
        {hotel.Rooms.map((data) =>
          data.booked ? (
            []
          ) : (
            <RoomCard data={data} key={data.id} idh={hotel.id} />
          )
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5,
  },
  textName: {
    fontSize: 38,
    fontWeight: "200",
    textAlign: "center",
  },
  textDiscribe: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "300",
  },
  mainImage: {
    height: 300,
    width: "95%",
    alignItems: "center",
    borderRadius: 30,
  },
  roomCardContainer: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "grey",
    width: "95%",
    flexDirection: "row",
    marginVertical: 5,
  },
  roomCardImage: {
    width: 150,
    height: 150,
    borderRadius: 28,
  },
  roomCardDiscribeText: {
    fontSize: 18,
  },
  freeRooms: {
    fontSize: 28,
    fontWeight: "300",
  },
  roomCardNameRoom: {
    fontSize: 16,
  },
});

export default Hotel;
