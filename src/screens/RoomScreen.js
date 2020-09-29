import React from "react";
import RoomContainer from "../components/Room/RoomContainer";

function RoomScreen({ route, navigation }) {
  const { id_Hotel } = route.params;
  const { id_Room } = route.params;
  return <RoomContainer id_Hotel={id_Hotel} id_Room={id_Room} />;
}

export default RoomScreen;
