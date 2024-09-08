import * as React from 'react';
import { Dimensions, Text, View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Alert} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Genres } from '../constants/constants';
import { Colors } from '@/constants/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function HomeScreen(props: any) {
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
        <View style={styles.carContainer}>          
          <Carousel
            style={[styles.carousel, {width: width}]}
            loop
            width={width * 0.3}
            height={width * 0.34}
            autoPlay={true}
            data={Genres}
            scrollAnimationDuration={1000}
            renderItem={({ index }) => (
              <View style={styles.carItemContainer} >
                <ImageBackground source={Genres[index].img} imageStyle={{ borderRadius: 160 }} >
                  <TouchableOpacity style={styles.item}
                    onPress={() => Alert.alert(Genres[index].title)}
                  >
                    

                  </TouchableOpacity>
                  
                  <Text style={{ textAlign: 'center', fontSize: 10 }}>
                    {Genres[index].title}
                  </Text>
                
                </ImageBackground>
              </View>
            )}
          /> 
        </View>
        <ScrollView style={styles.recContainer}>          
          <Text>Fresh Recomendation</Text>
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
  carContainer: {
    flex: .3
  },
  carousel: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: Colors.light.backgroundColor
  },
  carItemContainer: {    
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  item: {
    borderWidth: 2,
    borderColor: Colors.light.borderSecondary,
    borderRadius: 160,
    height: "100%"
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
    flexWrap: "wrap",
  },
  recItems: {
    borderWidth: 1,
    borderColor: Colors.light.borderPrimary,
    borderRadius: 10,
    width: width * 0.42,
    height: 200,
  },
  cardContainer: {
    width: width * 0.42,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  recSubTitle: {
    height: 20
  }
});
