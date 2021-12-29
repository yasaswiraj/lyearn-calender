import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Menu from './src/Assets/icons/menu.svg';
import Search from './src/Assets/icons/search.svg';
import Avatar from './src/Assets/icons/avatar.svg';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerLeft: () => (
              <TouchableOpacity>
                <Menu width={28} height={28} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={{marginRight: 24}}>
                  <Search width={28} height={28} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Avatar width={36} height={36} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
