import { StyleSheet, Text, Image, View, Pressable } from 'react-native';
import React from 'react';

const UpcomingGames = ({ item }) => {
  return (
    <Pressable
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 2,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          marginVertical: 7,
          borderBottomColor: '#E0E0E0',
          borderBottomWidth: 2,
          color: 'blue',
        }}
      >
        {item.date}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          backgroundColor: 'white',
          marginTop: 12,
        }}
      >
        <View>
          <Image
            source={{ uri: item?.adminUrl }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              flexWrap: 'wrap',
              marginBottom: 6,
            }}
          >
            {item?.adminName}'s {item?.sport} Game
          </Text>
          <Text
            style={{ color: 'gray', marginBottom: 10, flexShrink: 1 }}
            numberOfLines={2}
          >
            {item?.area}
          </Text>
          <View
            style={{
              marginVertical: 10,
              padding: item?.isBooked ? 0 : 15,
              borderRadius: 8,
              borderColor: '#E0E0E0',
              borderWidth: 1,
              width: '100%',
            }}
          >
            {item?.isBooked ? (
              <>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '500',
                    fontSize: 13,
                    paddingVertical: 10,
                  }}
                >
                  {item?.courtNumber}
                </Text>

                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#56cc79',
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: 'white',
                    }}
                  >
                    Booked
                  </Text>
                </View>
              </>
            ) : null}

            <Text style={{ textAlign: 'center', fontWeight: '500' }}>
              {item?.time}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {item?.players?.length}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10 }}>
            GOING
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default UpcomingGames;

const styles = StyleSheet.create({});
