import {StyleSheet, Text, View, Image, TouchableOpacit, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, TouchableOpacity} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-anchor-carousel';
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

const Home = () => {

  const [background,setBackground] = useState({
    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
    name: 'Avengers: End Game',
    stat: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
    desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  });

  const [gallery, setgallery] = useState([
 
    { image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', title: 'Avengers: End Game',released: '2019 ‧ Action/Sci-fi ‧ 3h 2m' ,key: '1' , desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.' },
    {
    image:'https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg', title: 'Frozen II',released: '2019 ‧ Animation/Musical ‧ 1h 43m',  key: '2' , desc: 'Elsa the Snow Queen has an extraordinary gift -- the power to create ice and snow. But no matter how happy she is to be surrounded by the people of Arendelle, Elsa finds herself strangely unsettled.' },
    { image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P', title: 'Alita: Battle Angel',released: '2019 ‧ Action/Sci-fi ‧ 2h 2m',key: '3', desc: 'Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.' },
    { image:'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', title: 'The Irish Man',released: '2019 ‧ Crime/Drama ‧ 3h 30m', key: '4', desc: 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa.' },
    { image:'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg', title: 'John Wick Chapter 3',released: '2019 ‧ Action/Thriller ‧ 2h 10m', key: '5', desc: 'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.' },
  ]);

  const carouselRef = useRef(null);

  const {width, height} = Dimensions.get('window');

  const renderItem = ({item,index}) => {
    return (
      <View>
        <TouchableOpacity>
        <Image source={{uri: item.image}} style={styles.carouselImage} />
        <Text style={styles.carouselText}>{item.title}</Text>
        <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon} />
        </TouchableOpacity>
      </View>
    )
  }


  return(
    <ScrollView>
        <View style = {styles.carouselContentContainer}>
            <View style = {{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
                <ImageBackground
                    source ={{uri : background.uri}}
                    style = {styles.ImageBg}
                    blurRadius = {10}
                >
                  <View style ={styles.searchBoxContainer}>
                    <TextInput 
                      placeholder ='Search Movies'
                      placeholderTextColor='#666'
                      styles={styles.searchBoxContainer}
                    />
                    <Feather name = 'search' size = {22} color = '#666' 
                      style = {styles.searchBoxIcon}
                    />

                  </View>
                  <Text style ={{color : 'white', fontSize: 24, fontWeight : 'bold',
                  marginLeft: 10, marginVertical: 10 }}>Top Picks This Week</Text>
                  <View>
                    <Carousel style ={styles.Carousel} 
                      data = {gallery}
                      renderItem = {renderItem}
                      itemWidth = {200}
                      containerWidth = {width - 20}
                      separatorWidth = {0}
                      ref = {carouselRef}
                      inActiveOpacity = {0.4}
                    />
                  </View>
                
                </ImageBackground>
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContentContainer: {
      flex : 1,
      backgroundColor : '#000',
      height : 720,
      paddingHorizontal: 14
  },
  ImageBg: {
    flex : 1,
    height: null,
    width: null,
    opacity : 1,
    justifyContent: 'flex-start'
  },
  searchBoxContainer: {
    backgroundColor: '#fff',
    elevation:10,
    borderRadius : 4,
    marginVertical : 10,
    width : '95%',
    flexDirection : 'row',
    alignSelf : 'center'
  },
  SearchBox : {
    padding: 12,
    paddingLeft : 20,
    fontSize: 16
  },
  SearchboxIcon: {
    position: 'absolute', 
    right: 20, 
    top: 14
  },
  carouselContainerView: {
    width: '100%',
    height:350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex:1,
    overflow: 'visible',
    movieInfoContainer: {
      flexDirection: 'row', 
      marginTop: 16, 
      justifyContent: 'space-between', 
      width: Dimensions.get('window').width - 14
    },
    movieName: {
      paddingLeft: 14,
      color: 'white', 
      fontWeight: 'bold', 
      fontSize: 20,
      marginBottom: 6
    },
    movieStat: {
      paddingLeft: 14,
      color: 'white', 
      fontWeight: 'bold', 
      fontSize: 14, 
      opacity: 0.8
    },
    playIconContainer: {
      backgroundColor: '#212121',
      padding: 18,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 25,
      borderWidth: 4,
      borderColor: 'rgba(2, 173, 148, 0.2)',
      marginBottom: 14
    }
    });

export default Home;