import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CalenderScreen from '../screens/CalenderScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ChatScreen from '../screens/ChatScreen';
import Friday from '../screens/Friday';
import Saturday from '../screens/Saturday';
import Sunday from '../screens/Sunday';
import Login from '../screens/Login'
import GlobalChat from '../screens/GlobalChat';
import RideShare from '../screens/RideShare';
import Trade from '../screens/Trade';
import ImageUpload from '../screens/ImageUpload';

const HomeStack = createStackNavigator({
  Login: Login,
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const CalenderStack = createStackNavigator({
  Calender: CalenderScreen,
  Friday: Friday,
  Saturday: Saturday,
  Sunday: Sunday
});

CalenderStack.navigationOptions = {
  tabBarLabel: 'Calender',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar'}
    />
  ),
};

const GalleryStack = createStackNavigator({
  Gallery: GalleryScreen,
  ImageUpload: ImageUpload
});

GalleryStack.navigationOptions = {
  tabBarLabel: 'Gallery',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-camera${focused ? '' : '-outline'}` : 'md-camera'}
    />
  ),
};

const ChatStack = createStackNavigator({
  Chat: ChatScreen,
  GlobalChat: GlobalChat,
  RideShare: RideShare,
  Trade: Trade
})

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? `ios-chatbubbles${focused ? '' : '-outline'}` : 'md-chatbubbles'}
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  CalenderStack,
  GalleryStack,
  ChatStack
});
