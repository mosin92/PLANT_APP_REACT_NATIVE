import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Route } from './constants';
import { Login, Signup, Welcome, Forgot_Pswd, Home, Profile, Explore, Product } from './screens';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={Route.private.explore}
            screenOptions={{
              headerShown: false,

            }}
          >
            <Stack.Screen name={Route.public.login} component={Login} />
            <Stack.Screen name={Route.public.signup} component={Signup} />
            <Stack.Screen name={Route.public.welcome} component={Welcome} />
            <Stack.Screen name={Route.public.forgot_paswd} component={Forgot_Pswd} />
            <Stack.Screen name={Route.private.home} component={Home} />
            <Stack.Screen name={Route.private.profile} component={Profile} />
            <Stack.Screen name={Route.private.explore} component={Explore} />
            <Stack.Screen name={Route.private.product} component={Product} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
