import React from "react";
import { connect } from "react-redux";
import User from "./User";

let mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const UserContainer = connect(mapStateToProps)(User);

export default UserContainer;
