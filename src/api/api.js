import axios from "axios";
import qs from "qs";

const api = axios.create({
  withCredentials: true,
  baseURL: "http://book-hotels.herokuapp.com/api/",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

export const fetchHotels = async () => {
  return await api.get("hotels");
};

export const loginIn = async (login, password) => {
  let data = qs.stringify({ login, password });
  return await api.post("users/login", data);
  // .then(
  //   (response) => {
  //     console.log(response);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
};

export const saveUser = async (login, password, balance) => {
  let data = qs.stringify({ login, password, balance });
  return await api.post("users/", data).then(
    (response) => {
      alert(response.data.message);
    },
    (error) => {
      alert(error.response.data.message);
    }
  );
};

export const bookedRoom = async (id_Hotel, id_Room, login) => {
  let data = qs.stringify({ id_Hotel, id_Room, login });
  return await api.put("hotels/booked/", data).then(
    (response) => {
      alert(response.data.message);
    },
    (error) => {
      alert(error.response.data.message);
    }
  );
};
