import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustormTabbar from 'components/CustormTabbar';
import SplashScreen from 'screens/SplashScreen';
import GenderSelectScreen from 'screens/GenderSelectScreen';
import HomeScreen from 'screens/HomeScreen';
import BookmarkScreen from 'screens/BookmarkScreen';
import SettingScreen from 'screens/SettingScreen';
import FashionScreen from 'screens/FashionScreen';
import AccessoriesScreen from 'screens/AccessoriesScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="GenderSelectScreen" component={GenderSelectScreen} />
      <Stack.Screen name="Tabbar" component={Tabbar} />
    </Stack.Navigator>
  );
};
const Tabbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustormTabbar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Fashion" component={FashionScreen} />
      <Tab.Screen name="Accessories" component={AccessoriesScreen} />
    </Tab.Navigator>
  );
};
export default function NaviStack() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
