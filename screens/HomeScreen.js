import { StyleSheet, Text, View,ScrollView, Image, Pressable, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function HomeScreen() {
   const navigation=useNavigation();
   useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle:"",
      headerLeft:()=>(
          <View>
            <Text style={{marginLeft:15,fontWeight:'bold'}}>MNNIT ALLAHABAD</Text>
          </View>
      ),
      headerRight:()=>(
         <View style={{flexDirection:'row',marginRight:15,alignItems:'center',gap:10}}>
           <Ionicons name="chatbox-outline" size={24} color="black" />
           <Ionicons name="notifications-outline" size={24} color="black" />

            <Pressable>
              <Image style={{height:30,width:30,borderRadius:15}} source={{uri:"https://lh3.googleusercontent.com/ogw/AF2bZyir6Sqlf8phGWjAPbO0NeatiNusNv5TyUqezTyFnB7vgOo=s64-c-mo"}}/>
            </Pressable>
         </View>

      )
    })
   },[])
   
   const data = [
    {
      id: '10',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/Tennis%20Spotlight.png',
      text: 'Learn Tennis',
      description: 'Know more',
    },
    {
      id: '11',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_08.png',
      text: 'Up Your Game',
      description: 'Find a coach',
    },
    {
      id: '12',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_03.png',
      text: 'Hacks to win',
      description: 'Yes, Please!',
    },
    {
      id: '13',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_02.png',
      text: 'Spotify Playolist',
      description: 'Show more',
    },
  ];
  return (
    <ScrollView style={{flex:1,backgroundColor:"#F8F8F8"}}>
      <View 
      style={{padding:14,backgroundColor:'white',margin:16,borderRadius:12,flexDirection:'row',alignItems:'center',gap:12,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.35,shadowRadius:3 }}>
      <View>
          <Image
            style={{width: 40, height: 40, borderRadius: 25}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/785/785116.png',
            }}
          />
        </View>
        <View>
          <View style={{flexDirection:'row',alignItems:'center',gap:4,}}>
            <Text style={{fontWeight:"bold"  }}>Set Your Weekly Fit Goal</Text>
             <Image
              style={{width: 20, height: 20, borderRadius: 10}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/426/426833.png',
              }}
            />
          </View>
          <Text style={{marginTop:9,color:'gray'}}>KEEP YOURSELF FIT</Text>
        </View>
        </View>
        <View style={{borderRadius:12,backgroundColor:'white',padding:13,marginVertical:6,marginHorizontal:13 }}>
          <View style={{
            borderRadius:4,backgroundColor:"#E0E0E0",paddingHorizontal:10,paddingVertical:4  ,  width:220,marginVertical:5
          } }>
            <Text style={{ color:"#484848",fontSize:13,}}>GEAR UP FOR YOUR GAME  </Text>
          </View>
            <View style={
              {
                flexDirection:'row',alignItems:'center' ,justifyContent:'space-between' 
              }
            }>
              <Text style={{marginTop:12,fontSize:16,fontWeight:500}}>Badminton Activity</Text>
              <Pressable style={{backgroundColor:'white',borderRadius:8, shadowColor:"#000",shadowOffset:{width:0,height:3},shadowOpacity:0.35,shadowRadius:3.84 ,width:80,padding:10}}>
                <Text style={{textAlign:'center',fontWeight:'bold'}}>VIEW</Text>
              </Pressable>
            </View>
           
              <Text style={{marginTop:4,color:'gray'}}>You have no Games Today</Text>
         
          <Pressable style={{
            marginTop:17,
            marginLeft:'auto',marginRight:'auto'
          }}>
            <Text style={{fontSize:16,fontWeight:'600',textAlign:'center',textDecorationLine:'underline'}}>View My Calendar</Text>
          </Pressable>
        </View>

        <View style={{padding:13,flexDirection :'row' ,alignItems:'center',gap:23}}>
          <Pressable style={{flex:1}}>
            <View style={{borderRadius:10}}>
            <Image
              style={{
                width: 180,
                height: 130,

                borderRadius: 10,
              }}
              source={{
                uri: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
            />

            </View>
            <Pressable style={{backgroundColor:'white',padding:12,width:180,borderRadius:10}}  >
              <View>
                <Text  style={{fontSize:15,fontWeight:'500'}}>Play</Text>
                <Text style={{fontSize:15,color:'gray',marginTop:7}}>Find Players and join their activities </Text>
              </View>
            </Pressable>
          </Pressable>

          <Pressable style={{flex:1 }}>
            <View style={{borderRadius:10}}>
            <Image
              style={{
                width: 180,
                height: 130,

                borderRadius: 10,
              }}
              source={{
                uri: 'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
            />
            </View>
            <Pressable style={{backgroundColor:'white',padding:12,width:180,borderRadius:10}}>
              <View>
                <Text style={{fontSize:15,fontWeight:'500' }}>Book</Text>
                <Text style={{fontSize:15,color:'gray',marginTop:7}}>Book your-slots in venues nearby</Text>
              </View>
            </Pressable>
          </Pressable>
        </View>
          <View style={{padding:14}}>
            <View style={{flexDirection:'row',backgroundColor:'white',padding:10,borderRadius:10 ,gap:12,marginTop:10}}>
              <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#29AB87',padding:10,justifyContent:'center',alignItems:'center'}} >
              <AntDesign name="addusergroup" size={24} color="green" />
              </View>
              <View>
              <Text style={{fontWeight:'bold',}}>Groups</Text>
              <Text style={{color:'gray',marginTop:7}}>Connect,Complete and Discuss</Text>
              </View>
              <View>

              </View>
              <View>
              <View>
                
              </View>
            </View>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'white',padding:10,borderRadius:10 ,gap:12,marginTop:7}}>
              <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#D95D39',padding:10,justifyContent:'center',alignItems:'center'}} >
              <Ionicons name="basketball-outline" size={24} color="black" />
              </View>
              <View>
              <Text style={{fontWeight:'bold',}}>Game Time Activities </Text>
              <Text style={{color:'gray',marginTop:7}}>355 Buddy hosted games</Text>
              </View>
              <View>

              </View>
              <View>
              <View>
                
              </View>
            </View>
            </View>
          </View>
          <View style={{padding:14}}>
            <View style={{padding:10,backgroundColor:'white',borderRadius:10}}>
              <Text style={{fontSize:15,fontWeight:'500'}}>SpotLight</Text>
             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {data?.map((item) => (
    <ImageBackground
      key={item.id} // Add key prop to ensure unique identification for each child
      imageStyle={{ borderRadius: 10 }}
      style={{ width: 220, height: 280, resizeMode: "contain", marginRight: 10, marginVertical: 15 }}
      source={{ uri: item?.image }}
    >
      {/* You can add other content inside ImageBackground if needed */}
    </ImageBackground>
  ))}
</ScrollView>

            </View>
          </View>
          <View>
            <View style={{marginLeft:'auto',marginRight:'auto'}}>
            <Image
            style={{width: 240, height: 80, resizeMode: 'contain'}}
            source={{
              uri: 'https://drive.google.com/uc?export=view&id=10WxPKQHQ_wybzsqKtsyoi2ERkguLY-tD',
            }}
          />
            </View>
            <Text style={{color:'gray',textAlign:'center',marginTop: 5}}>Your Sports community app</Text>
          </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})