import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import ImageButton from './components/ImageButton';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageButton 
        onPress={() => console.log("Button as component")} 
        imageStyle={styles.image} 
        source={require("./assets/icon.png")}
        text="Press me!!!!" 
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
  image: {
    width: 50,
    height: 50
  }
});
