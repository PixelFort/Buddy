import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, FlatList } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VenueCard from '../components/VenueCard';

const BookScreen = () => {
  const venues = [

    {
      name: "Badminton Court MP HALL",
      rating: 4.4,
      deferLink: "https://mnnit.ac.in/sports",
      fullLink: "https://maps.app.goo.gl/wCGLb69A42twExBr6",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.61998,
      lng: 81.87704,
      icon: "https://maps.app.goo.gl/wCGLb69A42twExBr6",
      filter_by: ["Badminton"],
      sportsAvailable:[ {
        id: '1',
        name: 'Badminton',
        icon: 'badminton',
        price: 500,
      }],
      image: "https://lh5.googleusercontent.com/p/AF1QipMyY2E9pnLIDeubwj8ACObykYb4Iiyd24_eWKao=w425-h240-k-no",
      location: " MP HALL ,MNNIT",
      address: "Barrister Mullah Colony, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211004",
      bookings: [],
    },
    {
      name: "Tennis Court , Near Gymkhana Ground",
      rating: 4.3,
      deferLink: "https://mnnit.ac.in/sports",
      fullLink: "https://maps.app.goo.gl/Koc5ftygYBVtZUyL7",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.49410,
      lng: 81.86592,
      icon: "https://maps.app.goo.gl/Koc5ftygYBVtZUyL7",
      filter_by: ["Tennis"],
      sportsAvailable:[ {
        id: '1',
        name: 'Tennis',
        icon: 'Tennis',
        price: 500,
      }],
      image: "https://lh5.googleusercontent.com/p/AF1QipMo_bcTpiMtkQ1rHkRSola2ZXy2N33-ampvUycc=w408-h834-k-no",
      location: "Near  Gymkhana Ground ,MNNIT",
      address: "FVV8+H9M, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211002",
      bookings: [],
    },
    {
      name: " Gymkhana Ground, Near Boys Gym",
      rating: 4.5,
      deferLink: "https://mnnit.ac.in/sports",
      fullLink: "https://maps.app.goo.gl/ZHWBkBfYtyoJMJnN7",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.492372,
      lng: 81.866113,
      icon: "https://maps.app.goo.gl/ZHWBkBfYtyoJMJnN7",
      filter_by: ["Football", "Cricket", "Hockey","Kabbadi"],
      sportsAvailable:[ 
        {
          id: '2',
          name: 'Football',
          icon: 'football',
          price: 500,
        },
        {
          id: '3',
          name: 'Cricket',
          icon: 'cricket',
          price: 500,
        },
        {
          id: '4',
          name: 'Hockey',
          icon: 'hockey',
          price: 500,
        },
        {
          id: '5',
          name: 'Kabbadi',
          icon: 'kabbadi',
          price: 500,
        },
      ],
      image: "https://lh5.googleusercontent.com/p/AF1QipOn6Pcg4NjO6jW_AoxK-ImMf8ACXJn42-hrHP4l=w408-h306-k-no",
      location: "Near Gym ,MNNIT",
      address: "FVV8+993, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211002",
      bookings: [],
    },
    {
      name: "Basketball Court , Near MP HALL",
      rating: 4.0,
      deferLink: "https://mnnit.ac.in/sports",
      fullLink: "https://maps.app.goo.gl/bMoWkk8gG7vRVAW19",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.49240,
      lng: 81.86608,
      icon: "https://maps.app.goo.gl/bMoWkk8gG7vRVAW19",
      filter_by: ["BasketBall"],
      sportsAvailable:[ {
        id: '1',
        name: 'Basketball',
        icon: 'basketball',
        price: 500,
      }],
      image: "https://lh3.googleusercontent.com/p/AF1QipOOMMPIcTahqv5pny1oYS9UaQd4Ayy_RcNvSUKH=w426-h240-k-no",
      location: "Near  MP HALL ,MNNIT",
      address: "Barrister Mullah Colony, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211004",
      bookings: [],
    },
    {
      name: "Badminton Court  CV Raman Hostel",
      rating: 4.4,
      deferLink: "https://maps.app.goo.gl/UcFCarVLn24tEgcD9",
      fullLink: "https://maps.app.goo.gl/UcFCarVLn24tEgcD9",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.49822,
      lng: 81.87014,
      icon: "https://maps.app.goo.gl/UcFCarVLn24tEgcD9",
      filter_by: ["Badminton"],
      sportsAvailable:[ {
        id: '1',
        name: 'Badminton',
        icon: 'badminton',
        price: 500,
      }],
      image: "https://i.ytimg.com/vi/-gv_rB84u3s/maxresdefault.jpg",
      location: " Raman Hostel ,MNNIT",
      address: "FVX9+6XF, Shivkuti, Govindpur, Teliarganj, Prayagraj, Uttar Pradesh 211004",
      bookings: [],
    },
    {
      name: "Student Activity Centre, MNNIT",
      rating: 3.8,
      deferLink: "https://maps.app.goo.gl/wUZBotUWqdbtgkVi6",
      fullLink: "https://maps.app.goo.gl/wUZBotUWqdbtgkVi6",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.49498,
      lng: 81.86769,
      icon: "https://maps.app.goo.gl/wUZBotUWqdbtgkVi6",
      filter_by: ["Chess,Table Tennis"],
      sportsAvailable:[ 
        {
          id: '1',
          name: 'Chess',
          icon: 'chess-king',
          price: 500,
        },
        {
          id: '2',
          name: 'Table Tennis',
          icon: 'table-tennis',
          price: 500,
        }
      ],
      image: "https://lh5.googleusercontent.com/p/AF1QipNTbXqyf3ccAvYgFVaHyMzsoftvDfd51zYVUdi5=w408-h255-k-no",
      location: "Near Tilak Hostel,MNNIT",
      address: "FVV9+X3P, MNNIT Allahabad Campus, Lukarganj, Prayagraj, Uttar Pradesh 211002",
      bookings: [],
    },
    {
      name: "Gym MNNIT",
      rating: 3.5,
      deferLink: "https://maps.app.goo.gl/pxaDTZM2h5QQzT4t7",
      fullLink: "https://maps.app.goo.gl/pxaDTZM2h5QQzT4t7",
      avgRating: 4.0,
      ratingCount: 94,
      lat: 25.49279,
      lng: 81.86582,
      icon: "https://maps.app.goo.gl/pxaDTZM2h5QQzT4t7",
      filter_by: ["Gym"],
      sportsAvailable:[
        {
          id: '1',
          name: 'Gym',
          icon: 'sports-gymnastics',
          price: 500,
        }
      ],
      image: "https://lh5.googleusercontent.com/p/AF1QipPNqP8Ty8aBMDU2pWRjU5NbcrzFaUi3yua1I4yX=w408-h306-k-no",
      location: "Near Diamond Jubilee UnderPass,MNNIT",
      address: "FVV8+38W, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211002",
      bookings: [],
    },
    {
      name: "MNNIT Stadium",
      rating: 3.5,
      deferLink: "https://maps.app.goo.gl/GXXZHAhZ6iroVUQ8A",
      fullLink: "https://maps.app.goo.gl/GXXZHAhZ6iroVUQ8A",
      avgRating: 4.0,
      ratingCount: 94,
      lat: 25.49502,
      lng: 81.86473,
      icon: "https://maps.app.goo.gl/GXXZHAhZ6iroVUQ8A",
      filter_by: ["Runnig","Cricket","FootBall"],
      sportsAvailable:[ 
        {
          id: '2',
          name: 'Football',
          icon: 'football',
          price: 500,
        },
        {
          id: '3',
          name: 'Cricket',
          icon: 'cricket',
          price: 500,
        },
        {
          id: '4',
          name: 'Running',
          icon: 'running',
          price: 500,
        }
      ],
      image: "https://lh5.googleusercontent.com/p/AF1QipMy-irDmhDLVB_sIFfXKIUQceJLeiU1xOHvbG92=w408-h306-k-no",
      location: "Near Diamond Jubilee UnderPass,MNNIT",
      address: "FVV7+XWR, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211002",
      bookings: [],
    },


    
  ];
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
            source={{ uri: "https://lh3.googleusercontent.com/ogw/AF2bZyir6Sqlf8phGWjAPbO0NeatiNusNv5TyUqezTyFnB7vgOo=s64-c-mo" }}
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