import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import AuthScreen from "./AuthScreen";
import HotelScreen from "./HotelScreen";
import RoomScreen from "./RoomScreen";
import { useSelector } from "react-redux";
import RegScreen from "./RegScreen";

const Stack = createStackNavigator();

export default function Router() {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <Stack.Navigator initialRouteName="Auth">
      {isLogin ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Hotel" component={HotelScreen} />
          <Stack.Screen name="Room" component={RoomScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Registration" component={RegScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
