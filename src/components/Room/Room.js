import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import UserContainer from "../User/UserContainer";

function Room(props) {
  return (
    <View>
      <UserContainer />
      <View style={styles.container}>
        <Text style={styles.nameRoomText}>{props.room.nameRoom}</Text>
        <Image source={{ uri: props.room.image }} style={styles.image} />
        <Text style={styles.numberText}>Номер комнаты {props.room.number}</Text>
        <Text style={styles.numberText}>Цена {props.room.price}</Text>
        <TouchableOpacity
          disabled={props.room.booked}
          style={styles.button}
          onPress={() => {
            if (props.balance >= props.room.price) {
              props.setBook(props.id_Room, props.id_Hotel);
              props.bookedRoom(props.id_Hotel, props.id_Room, props.login);
              props.payment(props.room.price);
            } else {
              alert("Недостаточно средств!");
            }
          }}
        >
          <Text style={styles.bookingText}>
            {props.room.booked ? "Забронировано" : "Забронировать"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { alignItems: "center" },
  image: {
    width: "95%",
    height: 250,
    borderRadius: 30,
  },
  nameRoomText: {
    fontSize: 30,
    fontWeight: "300",
  },
  numberText: {
    fontSize: 24,
    fontWeight: "300",
  },
  bookingText: {
    fontSize: 30,
    fontWeight: "300",
    color: "white",
  },
  button: {
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 30,
    padding: 5,
    backgroundColor: "green",
  },
});

export default Room;
