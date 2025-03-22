import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, FlatList } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VenueCard from '../components/VenueCard';

const BookScreen = () => {
  const venues = []; 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 12 }}>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text>Badminton Court</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="chatbox-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />

          {/* user image */}
          <Image
            style={{ height: 30, width: 30, borderRadius: 15 }}
            source={{ uri: "https://lh3.googleuser content.com/ogw/AF2bZyir6Sqlf8phGWjAPbO0NeatiNusNv5TyUqezTyFnB7vgOo=s64-c-mo" }}
          />

        </View>

      </View>

      <View style={{ marginHorizontal: 12, backgroundColor: "#E8E8E8", padding: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: 25 }}>
        <TextInput placeholder='Search for venues' />
        <Ionicons name="search" size={24} color="gray" />
      </View>

      <Pressable style = {{flexDirection:"row", alignItems:"center", gap:10, padding: 13}}>
        <View style={{padding:10, borderRadius:10, borderColor:"#E0E0E0", borderWidth:1}}>
          <Text>Sports & Availability</Text>
        </View>

        <View style={{padding:10, borderRadius:10, borderColor:"#E0E0E0", borderWidth:1}}>
          <Text>Favorites</Text>
        </View>

        <View style={{padding:10, borderRadius:10, borderColor:"#E0E0E0", borderWidth:1}}>
          <Text>Offers</Text>
        </View>
      </Pressable>

      <FlatList 
        data={venues} 
        renderItem={({item}) => <VenueCard item={item} />}
        contentContainerStyle={{paddingBottom: 20}}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default BookScreen

const styles = StyleSheet.create({})