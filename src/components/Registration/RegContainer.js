import React from "react";
import Reg from "./Reg";
import { connect } from "react-redux";
import { saveUser } from "../../api/api";

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: async (login, password, balance) => {
      await saveUser(login, password, balance);
    },
  };
};

const RegContainer = connect(null, mapDispatchToProps)(Reg);

export default RegContainer;
