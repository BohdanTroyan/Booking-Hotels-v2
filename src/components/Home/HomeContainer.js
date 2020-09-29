import React from "react";
import Home from "./Home";
import { connect } from "react-redux";
import { setHotelsData } from "../../redux/hotelsReducer";
import { fetchHotels } from "../../api/api";
import { signOut } from "../../redux/userReducer";

let mapStateToProps = (state) => {
  return {
    hotels: state.hotels,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getHotelsData: async () => {
      const { data: hotels } = await fetchHotels();
      dispatch(setHotelsData(hotels));
    },
    signOut: () => {
      dispatch(signOut());
    },
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
