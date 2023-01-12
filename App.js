import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';




export default function App() {

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <View style={styles.global}>
      <Text style={styles.Title}>Bienvenue, nous allons enregistrer votre brossage de dents</Text>
      <Separator />
      <Button
        title='Brosser les dents'
        color={styles.Button.color}
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  global: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#606164',
  },
  Button: {
    color: '#00F',
  },
  Title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
