import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';
import BookScreen from '../screens/BookScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
   const Stack = createNativeStackNavigator();
   const Tab = createBottomTabNavigator();

    function BottomTabs(){
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarActiveTintColor:"blue",
                    tabBarIcon:({focused}) => 
                        focused ? (
                            <Ionicons name="home-outline" size={24} color="blue" />
                        ):(
                            <Ionicons name="home-outline" size={24} color="#989898" />
                        )
                }} />
                
                <Tab.Screen name="Play" component={PlayScreen} options={{
                    tabBarActiveTintColor:"blue",
                    tabBarIcon:({focused}) => 
                        focused ? (
                            <AntDesign name="addusergroup" size={24} color="blue" />
                        ):(
                            <AntDesign name="addusergroup" size={24} color="#989898" />
                        )
                }} />
                
                <Tab.Screen name="Book" component={BookScreen} options={{
                    tabBarActiveTintColor:"blue",
                    tabBarIcon:({focused}) => 
                        focused ? (
                            <Ionicons name="home-outline" size={24} color="blue" />
                        ):(
                            <Ionicons name="home-outline" size={24} color="#989898" />
                        )
                }} />

               <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarActiveTintColor:"blue",
                    tabBarIcon:({focused}) => 
                        focused ? (
                            <Ionicons name="home-outline" size={24} color="blue" />
                        ):(
                            <Ionicons name="home-outline" size={24} color="#989898" />
                        )
                }} />


                
            </Tab.Navigator>
        )
    }
    const AuthStack =() =>{
         return (
             <Stack.Navigator>
                 {/* <Stack.Screen name="Login" component={LoginScreen} />
                 <Stack.Screen name="Register" component={RegisterScreen} /> */}
             </Stack.Navigator>
         )
    };

    function MainStack(){
         return (
             <Stack.Navigator>
                 <Stack.Screen name="Main" component={BottomTabs}  options={{headerShown:false}}/>
                 <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}} />
             </Stack.Navigator>
         );
    }
    return (
    <NavigationContainer>  
        <MainStack/>
         </NavigationContainer>
  );
}

export default StackNavigator

const styles = StyleSheet.create({})