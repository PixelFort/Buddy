import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable,
  } from 'react-native';
  import React, { useEffect, useRef } from 'react';
  import MapView, { Marker } from 'react-native-maps';
  
  const MNNIT_COORDS = {
    latitude: 25.4920, 
    longitude: 81.8639,
  };
  
  const generateCircularPoints = (center, radius, numpoints) => {
    const points = [];
    const angleStep = (2 * Math.PI) / numpoints;
    for (let i = 0; i < numpoints; i++) {
      const angle = i * angleStep;
      const latitude = center.latitude + (radius / 111) * Math.cos(angle);
      const longitude =
        center.longitude +
        (radius / (111 * Math.cos(center.latitude))) * Math.sin(angle);
      points.push({ latitude, longitude });
    }
    return points;
  };
  
  const StartScreen = () => {
    const mapView = useRef(null);
  
    const users = [
      {
        image: 'https://images.pexels.com/photos/7208625/pexels-photo-7208625.jpeg?auto=compress&cs=tinysrgb&w=800',
        id: '1',
        name: 'sujan',
        description: 'Hey!',
      },
      {
        image: 'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=800',
        id: '2',
        name: 'suhas',
        description: "let's play",
      },
    ];
  
    const numPoints = users.length;
    const radius = 0.5; // Reduced radius to fit within MNNIT campus
  
    const circularPoints = generateCircularPoints(MNNIT_COORDS, radius, numPoints);
  
    useEffect(() => {
      if (mapView.current) {
        mapView.current.fitToCoordinates(circularPoints, {
          edgePadding: { top: 70, bottom: 70, left: 70, right: 70 },
        });
      }
    }, []);
  
    return (
      <>
        <SafeAreaView>
          <MapView
            ref={mapView}
            style={{ width: '100%', height: 400 }}
            initialRegion={{
              latitude: MNNIT_COORDS.latitude,
              longitude: MNNIT_COORDS.longitude,
              latitudeDelta: 0.01, // Zoomed in on MNNIT
              longitudeDelta: 0.01,
            }}>
            {circularPoints.map((point, index) => {
              const user = users[index % users.length];
              return (
                <Marker key={index} coordinate={point}>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      style={{ width: 70, height: 70, borderRadius: 35 }}
                      source={{ uri: user.image }}
                    />
                  </View>
                  <View style={{ paddingHorizontal: 10, paddingVertical: 7, borderRadius: 7, backgroundColor: 'white' }}>
                    <Text style={{ textAlign: 'center', fontSize: 13, fontWeight: '500' }}>{user.description}</Text>
                  </View>
                </Marker>
              );
            })}
          </MapView>
          <View style={{ marginTop: 35, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '500', width: '50%', textAlign: 'center' }}>
              Find Player in your Neighbhourhood
            </Text>
            <Text style={{ marginTop: 20, color: 'gray', fontSize: 15 }}>
              Just like you did as a kid!
            </Text>
          </View>
          <Pressable style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: 'gray' }}>Already have an account? Login</Text>
          </Pressable>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
            <Image
              style={{ width: 150, height: 100, resizeMode: 'contain' }}
              source={{
                uri: 'https://drive.google.com/uc?export=view&id=10WxPKQHQ_wybzsqKtsyoi2ERkguLY-tD',
              }}
            />
          </View>
        </SafeAreaView>
        <View style={{ padding: 10, backgroundColor: 'white', marginTop: 'auto' }}>
          <Pressable
            style={{
              backgroundColor: '#1EC921',
              padding: 12,
              borderRadius: 7,
              marginBottom: 20,
            }}>
            <Text style={{ textAlign: "center", color: "white", fontWeight: "500" }}>READY SET GO</Text>
          </Pressable>
        </View>
      </>
    );
  };
  
  export default StartScreen;
  
  const styles = StyleSheet.create({});
  