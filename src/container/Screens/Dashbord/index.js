import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Dashbord = () => {
  const DATA = [
    {path: require('../../../assets/Images/abhishek.png')},
    {path: require('../../../assets/Images/akash.png')},
    {path: require('../../../assets/Images/mohit.png')},
    {path: require('../../../assets/Images/shuman.png')},
    {path: require('../../../assets/Images/akash.png')},
    {path: require('../../../assets/Images/abhishek.png')},
  ];

  const topPosition = new Animated.Value(-800);
  const bottomPosition = new Animated.Value(800);

  useEffect(() => {
    Animated.timing(topPosition, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.timing(bottomPosition, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{translateY: topPosition}],
        }}>
        <Image
          resizeMode={'cover'}
          style={styles.backgroundImg}
          source={require('../../../assets/Images/Background.png')}
        />
        <View style={{flexDirection: 'row', position: 'absolute'}}>
          <View>
            <Text style={styles.title}>Welcome To BigHit</Text>
            <Text style={styles.subtitle}>India’s biggest sports platform</Text>
          </View>

          <TouchableOpacity style={styles.topBotton}>
            <Text style={styles.topBottonText}>Create Profile</Text>
          </TouchableOpacity>
        </View>
        <Image
          resizeMode={'cover'}
          style={styles.HeaderImg}
          source={require('../../../assets/Images/Header.png')}
        />
      </Animated.View>
      <Animated.View
        style={{
          transform: [{translateY: bottomPosition}],
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            resizeMode={'cover'}
            style={styles.middleImg}
            source={require('../../../assets/Images/Player.png')}
          />
          <Image
            resizeMode={'cover'}
            style={styles.middleImg}
            source={require('../../../assets/Images/sport.png')}
          />
          <Image
            resizeMode={'cover'}
            style={styles.middleImg}
            source={require('../../../assets/Images/coach.png')}
          />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <FontAwesome
            name="star"
            color={'#FFA700'}
            size={20}
            style={{marginLeft: 15, paddingTop: 2}}
          />
          <Text style={styles.bottomText}>
            Top Players on BigHit Leaderboard
          </Text>
        </View>
        <FlatList
          data={DATA}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({item}) => (
            <Image
              source={item.path}
              resizeMode="contain"
              style={{width: 80, height: 100}}
            />
          )}
          keyExtractor={item => item.id}
        />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    top: 0,
    width: '100%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 30,
    marginLeft: 20,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2,
    marginLeft: 20,
  },
  topBotton: {
    borderRadius: 10,
    width: 126,
    height: 35,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 33,
    marginLeft: 55,
    borderRadius: 50,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBottonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  HeaderImg: {
    alignSelf: 'center',
    width: '95%',
    marginTop: -210,
  },
  middleImg: {
    height: 180,
    width: '30%',
    marginHorizontal: 7,
  },
  bottomText: {
    color: '#000000',
    marginLeft: 10,
    fontSize: 17,
    fontWeight: '600',
  },
  listImg: {
    backgroundColor: 'green',
  },
});
export default Dashbord;
