import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Splash from './screens/Splash';
import Welcome from './screens/Welcome';
import Authentication from './screens/Authentication';
import Password from './screens/Password';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;