import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode={'stretch'}
        style={styles.loginImg}
        source={require('../../../assets/Images/login.png')}
      />
      <Text style={styles.title}>Enter 6 digit OTP sent on</Text>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
        <Text style={styles.subTitle}>+91-999-014-7856</Text>
        <Text style={styles.topBotton}>Change</Text>
      </View>
      <OTPTextInput
        tintColor="#0062FF"
        offTintColor="#0062FF"
        containerStyle={{width: '70%', alignSelf: 'center', marginVertical: 20}}
        inputCount={6}
        textInputStyle={styles.textInput}
        ref={e => (this.otpInput = e)}
      />
      <TouchableOpacity style={styles.submitBotton}>
        <Text style={styles.submitBottonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loginImg: {
    width: '100%',
    height: Dimensions.get('window').height / 2.2,
  },
  title: {
    fontSize: 20,
    color: '#181818',
    fontWeight: '600',
    textAlign: 'center',
  },
  subTitle: {
    color: '#4B4B4B',
    fontSize: 15,
  },
  topBotton: {
    color: '#0062FF',
    fontSize: 15,
    fontWeight: '500',
    paddingLeft: 10,
  },
  textInput: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    height: 52,
    width: 40,
  },
  submitBotton: {
    backgroundColor: '#000000',
    alignSelf: 'center',
    borderRadius: 50,
    width: 280,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBottonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default Login;
