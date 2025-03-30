import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlayScreen = () => {
  const [option, setOption] = useState("My Sports");
  const [sport, setSport] = useState("Cricket");

  return (
    <SafeAreaView>
      <View style={{ padding: 12, backgroundColor: "#223536" }} >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "white" }}>MNNIT CAMPUS</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Ionicons name="chatbox-outline" size={24} color="white" />
            <Ionicons name="notifications-outline" size={24} color="white" />
            <Image
              style={{ width: 30, height: 30, borderRadius: 15 }}
              source={{
                uri: user?.user?.image, // image to be added here
              }}
            />
          </View> 
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginVertical: 13 }}>
          <Pressable onPress={() => setOption("Calendar")} >
            <Text style={{ fontWeight: "500", fontSize: 15, color: option == "Calendar" ? "#12e04c" : "white" }}>Calendar</Text>
          </Pressable>
          <Pressable onPress={() => setOption("My Sports")}>
            <Text style={{ fontWeight: "500", fontSize: 15, color: option == "My Sports" ? "#12e04c" : "white" }}>My Sports</Text>
          </Pressable>
          <Pressable onPress={() => setOption("Other Sports")}>
            <Text style={{ fontWeight: "500", fontSize: 15, color: option == "Other Sports" ? "#12e04c" : "white" }}>Other Sports</Text>
          </Pressable>
        </View>
        <View>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <Pressable onPress={() => setSport("Cricket")} style={{ paddingHorizontal: 10, paddingVertical: 6, borderColor: "white", marginRight: 10, borderRadius: 8, borderWidth: sport == "Cricket" ? 0 : 1, backgroundColor: sport == "Cricket" ? "#1dff22" : "transparent", justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>Cricket</Text>
            </Pressable>
            <Pressable onPress={() => setSport("Football")} style={{ paddingHorizontal: 10, paddingVertical: 6, borderColor: "white", marginRight: 10, borderRadius: 8, borderWidth: sport == "Football" ? 0 : 1, backgroundColor: sport == "Football" ? "#1dff22" : "transparent", justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>Football</Text>
            </Pressable>
            <Pressable onPress={() => setSport("Badminton")} style={{ paddingHorizontal: 10, paddingVertical: 6, borderColor: "white", marginRight: 10, borderRadius: 8, borderWidth: sport == "Badminton" ? 0 : 1, backgroundColor: sport == "Badminton" ? "#1dff22" : "transparent", justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>Badminton</Text>
            </Pressable>
            <Pressable onPress={() => setSport("TT")} style={{ paddingHorizontal: 10, paddingVertical: 6, borderColor: "white", marginRight: 10, borderRadius: 8, borderWidth: sport == "TT" ? 0 : 1, backgroundColor: sport == "TT" ? "#1dff22" : "transparent", justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>TT</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, backgroundColor: "white" }} >
        <Pressable>
          <Text style={{ fontWeight: "bold" }}>Create Game</Text>
        </Pressable>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Pressable>
            <Text style={{ fontWeight: "bold" }}>Filter</Text>
          </Pressable>

          <Pressable>
            <Text style={{ fontWeight: "bold" }}>Sort</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PlayScreen;

const styles = StyleSheet.create({}); 
