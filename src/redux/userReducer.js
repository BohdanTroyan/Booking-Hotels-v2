const SET_USER_DATA = "SET_USER_DATA";
const SIGN_OUT = "SIGN_OUT";
const PAYMENT = "PAYMENT";

let initialState = {
  user: {},
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, user: action.user, isLogin: true };
    }
    case SIGN_OUT: {
      return { ...state, user: {}, isLogin: false };
    }
    case PAYMENT: {
      let newBalance = state.user.balance - action.price;
      return { ...state, user: { ...state.user, balance: newBalance } };
    }
    default:
      return state;
  }
};

export const setUserData = (user) => ({
  type: SET_USER_DATA,
  user: user,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const payment = (price) => ({
  type: PAYMENT,
  price: price,
});

export default userReducer;
