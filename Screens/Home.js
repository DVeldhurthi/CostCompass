import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Home = ({navigation , route}) => {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Cost Compass</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
            navigation.navigate('Clinical');
      }}>
        <Text style={styles.buttonText}>Find Clinical Trials nearby</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('TrialCosts');}}>
        <Text style={styles.buttonText}>Find Costs for treatments</Text>
      </TouchableOpacity>
    </View>
    );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      borderWidth: 1,
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    title: {
      fontSize: 45,
      fontWeight: 'bold',
      fontFamily: 'sans-serif', 
      marginBottom: 30,
    },
    button: {
      backgroundColor: '#a5d7ff',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderWidth: 1,
      borderColor: '#8ac2ff',
      borderRadius: 3,
      marginVertical: 10,
      minWidth: 260,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'sans-serif',
    },
    hostingText: {
      fontSize: 20,
      fontWeight: '600',
      fontFamily: 'sans-serif',
      marginTop: 40,
      marginBottom: 15,
    },
    signUpButton: {
      minWidth: 100,
    },
  });

export default Home; 