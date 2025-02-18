import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.titulo}>Olá Mundo React Native!</Text>
      <Text style={styles.desc}>Descrição: Esse é meu app</Text>
      <Logo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'whie',
    paddingBottom: 10
  },
  desc: {
    fontStyle: 'italic',
    fontFamily: 'Open Seans',
    color: 'white',
    textDecorationLine: 'underline',
    padding: 20,
    backgroundColor:'black',
    borderRadius: 20
  },
  image: {
    width: 50,
    height: 50,
  }
});
