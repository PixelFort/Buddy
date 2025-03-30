import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
const CreateActivity = () => {
  const [sport, setSport] = useState('');
  const [area, setArea] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS == 'android' ? 35 : 0, // for some device safe area not work so give this
      }}>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <Ionicons name="arrow-back" size={24} color="black"></Ionicons>
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            Create Activity
          </Text>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}>
            <MaterialCommunityIcons
              name="whistle"
              size={24}
              color="gray"></MaterialCommunityIcons>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Sport</Text>
              <TextInput
                value={sport}
                onChangeText={setSport}
                style={{marginTop: 8, fontSize: 15}}
                placeholderTextColor="gray"
                placeholder="Eg Badminton / FootBall / Cricket "
              />
            </View>
            <AntDesign name="arrowright" size={24} color="gray"></AntDesign>
          </Pressable>

          <Text
            style={{borderColor: '#E0E0E0', borderWidth: 1, height: 1}}></Text>

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}>
            <Entypo name="location" size={24} color="gray"></Entypo>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Area</Text>
              <TextInput
                value={area}
                onChangeText={setArea}
                style={{marginTop: 8, fontSize: 15, color: 'black'}}
                placeholderTextColor="gray"
                placeholder="Locality or Venue name "
              />
            </View>
            <AntDesign name="arrowright" size={24} color="gray"></AntDesign>
          </Pressable>

          <Text
            style={{borderColor: '#E0E0E0', borderWidth: 1, height: 1}}></Text>

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}>
            <Feather name="calendar" size={24} color="gray"></Feather>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Date</Text>
              <TextInput
                editable={false}
                style={{marginTop: 8, fontSize: 15, color: 'black'}}
                placeholderTextColor={date ? 'black' : 'gray'}
                placeholder={date ? date : 'Pick a Day'}
              />
            </View>
            <AntDesign name="arrowright" size={24} color="gray"></AntDesign>
          </Pressable>
          <Text
            style={{borderColor: '#E0E0E0', borderWidth: 1, height: 1}}></Text>

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}>
            <AntDesign name="clockcircle" size={24} color="gray"></AntDesign>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18, fontWeight: '500'}}>Time</Text>
              <TextInput
                style={{marginTop: 8, fontSize: 15}}
                placeholderTextColor={time ? 'black' : 'gray'}
                placeholder={time ? time : 'Pick Exact Time'}
              />
            </View>
            <AntDesign name="arrowright" size={24} color="gray"></AntDesign>
          </Pressable>

          <Text
            style={{borderColor: '#E0E0E0', borderWidth: 1, height: 1}}></Text>

            <View>
            <Feather name="activity" size={24} color="gray"></Feather>
            <View>
              <Text>Activity Access</Text>
              <Pressable>
                <Pressable>
                  
                </Pressable>
              </Pressable>
            </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateActivity;

const styles = StyleSheet.create({});
