import { Colors } from '@/constants/Colors';
import { StyleSheet, 
  View, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  ImageBackground, 
  Alert, 
  Dimensions
} from 'react-native';


const width = Dimensions.get('window').width;
export default function savedScreen() {
  const recommendations = [
    { img: require("../../assets/images/horror.png")},
    { img: require("../../assets/images/histfic.png")},
    { img: require("../../assets/images/fantasy.png")},
    { img: require("../../assets/images/act.png")},
    { img: require("../../assets/images/scifi.png")},
    { img: require("../../assets/images/classic.png")},
    { img: require("../../assets/images/rom.png")},
    { img: require("../../assets/images/bio.png")}
  ]
  return (
    <View style={styles.main}>
      <ScrollView style={styles.recContainer}>          
          <Text>Your Saved</Text>
          <View style={styles.recommendedSection}>
            {
              recommendations.map((item, index) => (
                <View style={styles.cardContainer} key={index}>
                  <TouchableOpacity                     
                    onPress={() => Alert.alert('Explore more')}
                  >
                    <ImageBackground source={item.img} imageStyle={styles.recItems}>
                      
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              ))
            }            
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    marginTop: 50
  },
  recContainer: {
    flex: 1,
    borderTopWidth: 1,
    padding: 10,
    borderTopColor: Colors.light.borderPrimary,
  },
  recommendedSection: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  recItems: {
    borderWidth: 1,
    borderColor: Colors.light.borderPrimary,
    borderRadius: 10,
    width: width * 0.4,
    height: 200,
  },
  cardContainer: {
    width: width * 0.4,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  recSubTitle: {
    height: 20
  }
});
