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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const CreateActivity = () => {
  const [sport, setSport] = useState('');
  const [area, setArea] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [noOfPlayers, setnoOfPlayers] = useState(0);

  const [selected, setSelected] = useState(['Public']);

  const navigation = useNavigation();

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
           
           {/* write sports name directly  */}
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

 
    {/*  area part will take you to the venue screen  and after selecting venue come back again to this screen */}
          <Pressable
            onPress={() => navigation.navigate("TagVenue")}
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

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 7,
              marginVertical: 10,
            }}>
            <Feather name="activity" size={24} color="gray"></Feather>
            <View style={{marginTop: 12}}>
              <Text
                style={{marginBottom: 13, fontSize: 15, fontWeight: 'bold'}}>
                Activity Access
              </Text>
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Pressable
                  onPress={() => setSelected('Public')}
                  style={
                    selected.includes('Public')
                      ? {
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          backgroundColor: '#07bc0c',
                          width: 140,
                          justifyContent: 'center',
                          borderRadius: 3,
                          padding: 10,
                        }
                      : {
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          backgroundColor: 'white',
                          width: 140,
                          justifyContent: 'center',
                          borderRadius: 3,
                          padding: 10,
                        }
                  }>
                  <Ionicons
                    name="earth"
                    size={25}
                    color={
                      selected.includes('Public') ? 'white' : 'black'
                    }></Ionicons>
                  <Text
                    style={
                      selected.includes('Public')
                        ? {color: 'white', fontWeight: 'bold', fontSize: 15}
                        : {color: 'black', fontWeight: 'bold', fontSize: 15}
                    }>
                    Public
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => setSelected(' Invite Only')}
                  style={
                    selected.includes(' Invite Only')
                      ? {
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          backgroundColor: '#07bc0c',
                          width: 140,
                          justifyContent: 'center',
                          borderRadius: 3,
                          padding: 10,
                        }
                      : {
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          backgroundColor: 'white',
                          width: 140,
                          justifyContent: 'center',
                          borderRadius: 3,
                          padding: 10,
                        }
                  }>
                  <AntDesign
                    name="lock1"
                    size={25}
                    color={
                      selected.includes(' Invite Only') ? 'white' : 'black'
                    }></AntDesign>
                  <Text
                    style={
                      selected.includes(' Invite Only')
                        ? {color: 'white', fontWeight: 'bold', fontSize: 15}
                        : {color: 'black', fontWeight: 'bold', fontSize: 15}
                    }>
                    Invite Only
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </View>
          <Text
            style={{
              borderColor: '#E0E0E0',
              borderWidth: 1,
              height: 1,
              marginTop: 6,
            }}></Text>

          <Text style={{fontSize: 15, fontWeight: '500', marginTop: 20}}>
            Total Players
          </Text>
          <View
            style={{
              padding: 10,
              backgroundColor: '#F0F0F0',
              marginTop: 10,
              borderRadius: 6,
            }}>
            <View style={{marginVertical: 5}}>
              <View>
                <TextInput
                  value={noOfPlayers}
                  onChangeText={setnoOfPlayers}
                  style={{
                    padding: 10,
                    backgroundColor: 'white',
                    borderColor: '#D0D0D0',
                    borderWidth: 1,
                    borderRadius: 4,
                  }}
                  placeholder="Total Players (including you) "></TextInput>
              </View>
            </View>
          </View>

          <Text
            style={{
              borderColor: '#E0E0E0',
              borderWidth: 1,
              height: 1,
              marginTop: 15,
            }}></Text>

          <Text style={{marginTop: 16, fontSize: 15}}>Add Instructions</Text>

          <View
            style={{
              padding: 10,
              backgroundColor: '#F0F0F0',
              marginTop: 10,
              borderRadius: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Ionicons name="bag-check" size={24} color={'red'}></Ionicons>

              <Text style={{fontSize: 15, flex: 1, fontWeight: '500'}}>
                Bring your own equipment
              </Text>
              <FontAwesome
                name="check-square"
                size={24}
                color={'green'}></FontAwesome>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="directions-fork"
                size={24}
                color={'#FEBE10'}></MaterialCommunityIcons>

              <Text style={{fontSize: 15, flex: 1, fontWeight: '500'}}>
                Cost Shared
              </Text>
              <FontAwesome
                name="check-square"
                size={24}
                color={'green'}></FontAwesome>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <FontAwesome5
                name="syringe"
                size={24}
                color={'green'}></FontAwesome5>

              <Text style={{fontSize: 15, flex: 1, fontWeight: '500'}}>
                Covid Vaccinated players prefered
              </Text>
              <FontAwesome
                name="check-square"
                size={24}
                color={'green'}></FontAwesome>
            </View>
            <TextInput
              style={{
                padding: 10,
                backgroundColor: 'white',
                borderColor: '#D0D0D0',
                borderWidth: 1,
                marginVertical: 8,
                borderRadius: 5,
              }}
              placeholder="Add Additional Instructions"></TextInput>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 15,
              marginVertical: 10,
            }}>
            <AntDesign name="setting" size={24} color={'black'}></AntDesign>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>
                Advanced Settings
              </Text>
            </View>

            <AntDesign name="arrowright" size={24} color="gray"></AntDesign>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateActivity;

const styles = StyleSheet.create({});
