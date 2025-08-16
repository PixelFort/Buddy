import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const Game = ({item}) => {
  return (
   <Pressable>
    <View>
        <Text>Regular</Text>
        <Feather name='bookmark' size={24} color="black" />
    </View>
   </Pressable>
  )
}

export default Game

const styles = StyleSheet.create({})