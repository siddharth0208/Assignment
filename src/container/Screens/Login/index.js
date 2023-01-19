import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import Lottie from 'lottie-react-native';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef?.current?.play();
  }, []);

  const onSubmit = () => {
    setLoading(true);
    let time = setTimeout(() => {
      setSuccess(true);
      // clearTimeout(time);
      let time2 = setTimeout(() => {
        // alert();
        setSuccess(false);
        navigation.navigate('Dashbord');
        // clearTimeout(time2);
      }, 500);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode={'stretch'}
        style={styles.loginImg}
        source={require('../../../assets/Images/login.png')}
      />
      {loading === false ? (
        <View>
          <Text style={styles.title}>Enter 6 digit OTP sent on</Text>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
            <Text style={styles.subTitle}>+91-999-014-7856</Text>
            <Text style={styles.topBotton}>Change</Text>
          </View>
          <OTPTextInput
            tintColor="#0062FF"
            offTintColor="#0062FF"
            containerStyle={{
              width: '70%',
              alignSelf: 'center',
              marginVertical: 20,
            }}
            inputCount={6}
            textInputStyle={styles.textInput}
          />
          <TouchableOpacity
            style={styles.submitBotton}
            onPress={() => {
              onSubmit();
            }}>
            <Text style={styles.submitBottonText}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.bottomText}>Resend OTP 30s</Text>
        </View>
      ) : (
        <View>
          {success === true ? (
            <Text style={styles.loginSuccess}>Login Success!</Text>
          ) : (
            <></>
          )}
          <View>
            {success === false ? (
              <Lottie
                style={{
                  width: 110,
                  height: 110,
                  alignSelf: 'center',
                  marginTop: 25,
                }}
                ref={animationRef}
                source={require('../../../assets/Animations/Loading.json')}
                autoPlay={true}
              />
            ) : (
              <Lottie
                style={{
                  width: 110,
                  height: 110,
                  alignSelf: 'center',
                  marginTop: 35,
                }}
                ref={animationRef}
                source={require('../../../assets/Animations/Success.json')}
                autoPlay={true}
              />
            )}
          </View>
        </View>
      )}
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
  bottomText: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 18,
    marginTop: 12,
  },
  loginSuccess: {
    color: '#181818',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
});
export default Login;
