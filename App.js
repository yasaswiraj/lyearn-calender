import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeModules from './src/HomeModules';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeModules}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerLeft: () => (
              <TouchableOpacity>
                <Image
                  style={{width: 35, height: 35}}
                  source={require('./icons/menu.png')}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Image
                    style={{width: 30, height: 30, marginRight: 20}}
                    source={require('./icons/search.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{width: 35, height: 35}}
                    source={require('./icons/avatar.png')}
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
