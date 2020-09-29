const SET_HOTELS_DATA = "SET_HOTELS_DATA";
const SET_BOOKED_ROOM = "SET_BOOKED_ROOM";

let initialState = {
  hotels: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS_DATA: {
      return { ...state, hotels: action.hotels };
    }
    case SET_BOOKED_ROOM: {
      const hotels = state.hotels.map((hotel) => {
        if (hotel.id === action.id_Hotel) {
          return {
            ...hotel,
            Rooms: hotel.Rooms.map((room) => {
              if (room.id === action.id_Room) {
                return { ...room, booked: true };
              }
              return room;
            }),
          };
        }
        return hotel;
      });

      return { ...state, hotels };
    }
    default:
      return state;
  }
};

export const setHotelsData = (hotels) => ({
  type: SET_HOTELS_DATA,
  hotels: hotels,
});
export const setBooking = (id_Room, id_Hotel) => ({
  type: SET_BOOKED_ROOM,
  id_Room,
  id_Hotel,
});

export default hotelsReducer;
