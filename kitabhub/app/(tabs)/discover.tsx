import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, TextInput } from 'react-native';


export default function discoverScreen() {
  return (
    <View style={styles.main}>      
      <TextInput
        style={styles.searchInput}
        placeholder='Search Books'
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 50,
  },
  searchInput: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.light.borderSecondary,
    padding: 10,
    width: '90%',
    alignSelf: 'center'
  }
});
