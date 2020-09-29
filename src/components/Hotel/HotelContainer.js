import React from "react";
import Hotel from "./Hotel";
import { connect } from "react-redux";

let mapStateToProps = (state, props) => {
  return {
    hotel: state.hotels.hotels[props.id_Hotel - 1],
  };
};

const HotelContainer = connect(mapStateToProps)(Hotel);

export default HotelContainer;
