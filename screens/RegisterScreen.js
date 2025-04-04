import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../registrationUtils';
const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    getRegistrationProgress('Register').then(progressData => {
      if (progressData) {
        setEmail(progressData.email || '');
      }
    });
  }, []);
  const next = () => {
    if (email.trim() !== '') {
      saveRegistrationProgress('Register', {email});
    }

    navigation.navigate('Password');
  };
  return (
    <SafeAreaView>
      {/* view one */}

      <View style={{padding: 13}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          {' '}
          You're Almost There{' '}
        </Text>

        <View style={{flexDirection: 'column', gap: 16, marginVertical: 40}}>
          <Text>Enter Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={{
              padding: 15,
              borderColor: '#d0d0d0',
              borderWidth: 1,
              borderRadius: 10,
            }}
            //placeholder="email"
          />
          navigation.navigate("Password")
          {/* Now we have to add the next page so as we can navigate from the "Next" button */}
          <Pressable
            onPress={next}
            style={{
              padding: 15,
              backgroundColor: email?.length > 4 ? '#2dcf30' : '#E0E0E0',
              borderRadius: 8,
            }}>
            <Text style={{textAlign: 'center'}}>Next</Text>
          </Pressable>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 15, fontWeight: '500', textAlign: 'center'}}>
            I agree to recieve update over Whatsapp
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              textAlign: 'center',
              marginTop: 20,
            }}>
            By Signing Up, you agree to the terms of services and privacy and
            privacy policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RegisterScreen;
const styles = StyleSheet.create({});
