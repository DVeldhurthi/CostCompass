import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Clinical from './Screens/Clinical';
import Home from './Screens/Home';
import TrialCostsScreen from './Screens/TrialCosts';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator  initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{title: 'Home', headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Clinical' component={Clinical} options={{title: 'Clinical', headerShown: false}}></Stack.Screen>
        <Stack.Screen name='TrialCosts' component={TrialCostsScreen} options={{title: 'TrialCosts', headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
