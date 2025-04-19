import { StyleSheet, Text, SafeAreaView, View, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

const TagVenueScreen = () => {
    const [venues, setVenues] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchVenues = async () => {
            try {
                const response = await axios.get("http://localhost:8000/venues");
                setVenues(response.data);
            } catch (err) {
                console.log("Error ", err);
            }
        }
        fetchVenues();
    }, []);

    console.log("V", venues);

    return (
        <SafeAreaView>
            <View style= {{padding: 10, backgroundColor: '#294461', paddingBottom: 10}} >
                <View style={{ marginHorizontal: 10, flexDirection: "row", alignItems: 'center', gap: 10,}}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                    <Text style={{fontSize: 15, fontWeight: "500", color: "white"}}>Tag Venue</Text>
                </View>
            </View>
            <FlatList data={venues} renderItem={({item}) =>(
                <Pressable>
                    <View>
                        <View>
                            <Image style={{width:90,height:90,resizeMode:"cover",borderRadius:7}} source={{uri:item?.image}} />
                        </View>
                    </View>
                </Pressable>
            )}/>
        </SafeAreaView>
    );
};

export default TagVenueScreen

const styles = StyleSheet.create({})