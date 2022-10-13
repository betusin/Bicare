import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.ladida}>
      <View style={styles.container}>
      
        <Text style={styles.title}>BICARE</Text>
        <Text style={styles.text}>Barter your bike repair anywhere</Text>
        <StatusBar style="auto" />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 42,
    fontFamily: 'Courier',
  },
  text: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'Courier'
  },
  ladida: {
    backgroundImage: 'linear-gradient(#751A33, #B34233)',
    backgroundSize: 'cover',
    height: "100%",
  },
  container: {
    flex: 0.3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
