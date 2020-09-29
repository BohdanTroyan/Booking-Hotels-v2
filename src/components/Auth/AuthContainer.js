import React from "react";
import Auth from "./Auth";
import { connect } from "react-redux";
import { loginIn } from "../../api/api";
import { setUserData } from "../../redux/userReducer";

const mapDispatchToProps = (dispatch) => {
  return {
    loginIn: async (login, password) => {
      const data = await loginIn(login, password);
      dispatch(setUserData(data.data));
    },
  };
};

const AuthContainer = connect(null, mapDispatchToProps)(Auth);

export default AuthContainer;
