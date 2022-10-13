import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.ladida}>
      <View style={styles.container}>
      
        <Text>BICARE</Text>
        <Text>Barter your bike repair anywhere</Text>
        <StatusBar style="auto" />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  ladida: {
    backgroundColor: 'linear-gradient(#751A33, #B34233)',
    backgroundSize: 'cover',
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
