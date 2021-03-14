//用来存放路由结构
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/acount/Login'
import UserInfo from './pages/acount/UserInfo'
import  UserHome from './pages/userhome'
import Home from './pages/home'
import GameLibrary from './pages/gameLibrary'
import Community from './pages/community'
import Tabbar from './tabbar'
import SteamLogin from './pages/acount/Login/steamLogin'
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home122 Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Tabbar">
        <Stack.Screen name="Tabbar" component={Tabbar} /> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SteamLogin" component={SteamLogin} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GameLibrary" component={GameLibrary} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="UserHome" component={UserHome} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;