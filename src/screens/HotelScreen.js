import React from "react";
import HotelContainer from "../components/Hotel/HotelContainer";

function HotelScreen({ route, navigation }) {
  const { id_Hotel } = route.params;
  return <HotelContainer id_Hotel={id_Hotel} />;
}

export default HotelScreen;
