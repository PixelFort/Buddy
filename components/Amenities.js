import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Amenities = () => {
  const services = [
    {
      id: '0',
      name: 'First Aid',
    },
    {
      id: '1',
      name: 'free wifi',
    },
    {
      id: '3',
      name: 'Change Room',
    },
    {
      id: '3',
      name: 'Drinking Water',
    },
    {
      id: '4',
      name: 'Juice',
    },
    {
      id: '5',
      name: 'Fitness Coach ',
    },
    {
      id: '6',
      name: 'First Aid',
    },
    {
      id: '7',
      name: 'Members Lounge',
    },
  ];
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 17, fontWeight: '500'}}>
        Most Popular facilities
      </Text>
      <View style={{flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
        {services?.map((item, index) => (
          <View
            style={{
              margin: 10,
              backgroundColor: '#17B169',
              paddingHorizontal: 11,
              paddingVertical: 5,
              borderRadius: 25,
            }}
            key={index}>
            <Text style={{textAlign:"center",color:"white"}}>{item?.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
export default Amenities;
const styles = StyleSheet.create({});