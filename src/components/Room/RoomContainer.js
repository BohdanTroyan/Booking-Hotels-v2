import React from "react";
import Room from "./Room";
import { connect } from "react-redux";
import { setBooking } from "../../redux/hotelsReducer";
import { bookedRoom } from "../../api/api";
import { payment } from "../../redux/userReducer";

let mapStateToProps = (state, props) => {
  return {
    room: state.hotels.hotels[props.id_Hotel - 1].Rooms[props.id_Room - 1],
    login: state.user.user.login,
    balance: state.user.user.balance,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setBook: (id_Room, id_Hotel) => {
      dispatch(setBooking(id_Room, id_Hotel));
    },
    bookedRoom: (id_Hotel, id_Room, login) => {
      bookedRoom(id_Hotel, id_Room, login);
    },
    payment: (price) => {
      dispatch(payment(price));
    },
  };
};
const RoomContainer = connect(mapStateToProps, mapDispatchToProps)(Room);

export default RoomContainer;
