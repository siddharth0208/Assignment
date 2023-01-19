import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashbord from '../../container/Screens/Dashbord';
import BlankScreen from '../../container/Screens/BlankScreen/BlankScreen';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {height: '10%'},
      }}>
      <Tab.Screen
        name="Home"
        component={Dashbord}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../../assets/BottomTabImages/Home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={BlankScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../../assets/BottomTabImages/Video.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Rankings"
        component={BlankScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/BottomTabImages/Ranking.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={BlankScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/BottomTabImages/Profile.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={BlankScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/BottomTabImages/Notification.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigation;
