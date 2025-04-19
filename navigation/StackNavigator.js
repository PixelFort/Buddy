import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';
import BookScreen from '../screens/BookScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import CreateActivity from '../screens/CreateActivity';
import VenueInfoScreen from '../screens/VenueinfoScreen';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import NameScreen from '../screens/NameScreen';
import SelectImage from '../screens/SelectImage';
import PreFinalScreen from '../screens/PreFinalScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PasswordScreen from '../screens/PasswordScreen';
import { AuthContext } from '../AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  const { token } = useContext(AuthContext);

  const BottomTabs = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: ({ focused }) =>
            <Ionicons name="home-outline" size={24} color={focused ? 'green' : '#989898'} />,
        }}
      />
      <Tab.Screen
        name="Play"
        component={PlayScreen}
        options={{
          tabBarActiveTintColor: 'green',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            <AntDesign name="addusergroup" size={24} color={focused ? 'green' : '#989898'} />,
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={{
          tabBarActiveTintColor: 'green',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            <SimpleLineIcons name="book-open" size={24} color={focused ? 'green' : '#989898'} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: 'green',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            <Ionicons name="person-outline" size={24} color={focused ? 'green' : '#989898'} />,
        }}
      />
    </Tab.Navigator>
  );

  const AuthStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Name" component={NameScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Image" component={SelectImage} options={{ headerShown: false }} />
      <Stack.Screen name="PreFinal" component={PreFinalScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );

  const MainStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Venue" component={VenueInfoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
      <Stack.Screen name="Create" component={CreateActivity} options={{ headerShown: false }} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {token == null || token === '' ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
