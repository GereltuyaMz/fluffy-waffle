import React from "react";
import { Animated, Dimensions, Easing } from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// screens
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Map from "../screens/Map";
import Notification from "../screens/Notification";
import NotificationDetail from "../screens/NotificationDetail";
import Attendance from "../screens/Attendance";
import Register from "../screens/Register";
import All from "../screens/request/All";
import Pending from "../screens/request/Pending";
import Decline from "../screens/request/Decline";
import News from "../screens/News";
import NewsDetail from "../screens/NewsDetail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function MapStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Location" navigation={navigation} scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Register} options={{ header: () => null }} />
    </Stack.Navigator>
  )
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="User"
    >
      <Stack.Screen
        name="User"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Attendance"
        component={Attendance}
      />
      <Stack.Screen name="Request" component={TopStack} options={{
        header: ({ navigation, scene }) => (
          <Header
            title="Request"
            navigation={navigation}
          />
        ),
      }} />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Notification"
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={NotificationDetail}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Detail"
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="News"
              navigation={navigation}
            />
          ),
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Detail"
              navigation={navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export function BottomStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { paddingBottom: 6, paddingTop: 5, height: 60 } }} >
      <Tab.Screen name="HomeTab" component={HomeStack} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <AntDesignIcons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Location" component={MapStack} options={{
        tabBarLabel: 'Location',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcons name="map-o" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <AntDesignIcons name="user" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  )
}

function TopStack() {
  return (
    <TopTab.Navigator
      initialRouteName="All"
    >
      <TopTab.Screen
        name="All"
        component={All}
        options={{ tabBarLabel: 'All' }}
      />
      <TopTab.Screen
        name="Pending"
        component={Pending}
        options={{ tabBarLabel: 'Pending' }}
      />
      <TopTab.Screen
        name="Decline"
        component={Decline}
        options={{ tabBarLabel: 'Decline' }}
      />
    </TopTab.Navigator>
  )
}