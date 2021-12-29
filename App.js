import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';

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
                <Image
                  style={{width: 35, height: 35}}
                  source={require('./src/Assets/icons/menu.png')}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Image
                    style={{width: 30, height: 30, marginRight: 20}}
                    source={require('./src/Assets/icons/search.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{width: 36, height: 36}}
                    source={require('./src/Assets/icons/avatar.png')}
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
