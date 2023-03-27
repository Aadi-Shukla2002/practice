import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Pressable,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    ActivityIndicator,
  } from 'react-native';
  import React, {useState, useEffect, useCallback} from 'react';
  import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
  import Camera1 from '../transform/camera';
  import Search from '../transform/search';
  import Wishlist from '../transform/wishlist';  
  
  export function Home() {
    const [dimension, setDimension] = useState(Dimensions.get('window'));
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const onChange = () => {
      setDimension(Dimensions.get('window'));
    };
  
    useEffect(() => {
      Dimensions.addEventListener('change', onChange);
    });
   
    const Images = [
      {
        url: 'https://img.freepik.com/premium-photo/eye-shadows-with-lipstick-powder-brush-table_23-2148047068.jpg',
      },
      {url: 'https://i.ibb.co/7G5qqGY/1.jpg'},
      {url: 'https://i.ibb.co/Jx7xqf4/pexels-august-de-richelieu-4427816.jpg'},
      {url: 'https://i.ibb.co/GV08J9f/pexels-pixabay-267202.jpg'},
      {url: 'https://i.ibb.co/sK92ZhC/pexels-karolina-grabowska-4210860.jpg'},
    ];
  
    const setIndex = event => {
      let viewSize = event.nativeEvent.layoutMeasurement.width;
      let contentOffset = event.nativeEvent.contentOffset.x;
      let carouselIndex = Math.floor(contentOffset / viewSize);
      setSelectedIndex(carouselIndex);
    };
  
    return (
      <View style={styles.main}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.srcContainer}>
            <Search
              style={{
                marginTop: moderateScale(12, 0.1),
                paddingLeft: moderateScale(32, 0.1),
              }}
            />
            <TextInput
              style={styles.inp}
              placeholder="Search what you need"
              placeholderTextColor={'#C0C0C0'}
            />
          </View>
          <Pressable android_ripple={{color: 'black'}}>
            <Camera1
              style={{
                marginHorizontal: moderateScale(10, 0.1),
                marginTop: moderateScale(23, 0.1),
              }}
            />
          </Pressable>
        </View>
        <View style={{width: dimension.width}}>
          <ScrollView
            horizontal
            onMomentumScrollEnd={setIndex}
            showsHorizontalScrollIndicator={false}
            style={{opacity: 0.8}}
            pagingEnabled>
            {Images.map((value, key) => (
              <Image
                source={{uri: `${value.url}`}}
                style={{
                  width: dimension?.width,
                  height: verticalScale(200),
                  resizeMode: 'cover',
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
            ))}
            <Image
              source={require('../images/image-1.jpg')}
              style={{
                width: dimension?.width,
                height: verticalScale(200),
                resizeMode: 'cover',
                opacity: 0.35,
                position: 'absolute',
              }}
            />
          </ScrollView>
          <View style={styles.vw}>
            <Text style={styles.txt}>Discount of all types of cosmetics</Text>
            <View
              style={{
                backgroundColor: '#FF9900',
                marginLeft: moderateScale(165, 0.1),
                marginRight: moderateScale(100, 0.1),
              }}>
              <Text
                style={{
                  flex: 1,
                  color: 'white',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 15,
                  paddingHorizontal: moderateScale(5, 0.1),
                  paddingTop: moderateScale(2, 0.1),
                }}>
                Up to 45 %
              </Text>
            </View>
            <Text
              style={{
                color: '#414141',
                fontFamily: 'Poppins-Regular',
                fontSize: 6,
                marginLeft: moderateScale(165, 0.1),
              }}>
              only on the night sale 12-13 October
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: moderateScale(0, 0.1),
              alignSelf: 'center',
            }}>
            {Images.map((val, key) => (
              <Text
                key={key}
                style={
                  key === selectedIndex ? {color: 'white'} : {color: '#888'}
                }>
                ⬤
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.disc}>
          <Text style={styles.discTxt}>Discount ends in</Text>
          <Text style={styles.timer}>02</Text>
          <Text style={styles.ind}>:</Text>
          <Text style={styles.timer1}>24</Text>
          <Text style={styles.ind}>:</Text>
          <Text style={styles.timer1}>09</Text>
          <Text style={styles.sa}>See all</Text>
        </View>
        <ScrollView horizontal style={{marginBottom: 0}}>
          {/* item 1 */}
          <View
            style={{
              flexDirection: 'column',
              marginLeft: moderateScale(12, 0.1),
              height: verticalScale(20),
              width: scale(120),
            }}>
            <Image source={require('../images/Rectangle21.jpg')} />
            <View style={{backgroundColor: 'white', paddingLeft: moderateScale(5,0.1), marginRight: moderateScale(2.5,0.1)}}>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(5, 0.1),
              }}>
              <Text style={styles.nm}>Donatello</Text>
              <Wishlist
                style={{marginLeft: 'auto', marginRight: moderateScale(5, 0.1)}}
              />
            </View>
            <Text style={styles.nm1}>Cream elegant</Text>
            <Text style={styles.pr}>$ 398.90</Text>
            <Text style={styles.pr1}>$ 402.00</Text>
            </View>
          </View>
  
          {/* item 2 */}
          <View
            style={{
              flexDirection: 'column',
              marginLeft: moderateScale(8, 0.1),
              height: verticalScale(50),
              width: scale(120),
              // backgroundColor: 'white'
  
            }}>
            <Image source={require('../images/Rectangle23.jpg')} />
            <View style={{backgroundColor: 'white', paddingLeft: moderateScale(5,0.1), marginRight: moderateScale(2.5,0.1)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(5, 0.1),
              }}>
              <Text style={styles.nm}>Hermes</Text>
              <Wishlist
                style={{marginLeft: 'auto', marginRight: moderateScale(5, 0.1)}}
              />
            </View>
            <Text style={styles.nm1}>Antelope </Text>
            <Text style={styles.pr}>$ 400.00</Text>
            <Text style={styles.pr1}>$ 456.00</Text>
            </View>
          </View>
  
          {/* item 3 */}
          <View
            style={{
              flexDirection: 'column',
              marginLeft: moderateScale(8, 0.1),
              height: verticalScale(50),
              width: scale(120),
            }}>
            <Image source={require('../images/1234.png') } style={{width: scale(117.5), height: verticalScale(87) }}/>
            <View style={{backgroundColor: 'white', paddingLeft: moderateScale(5,0.1), marginRight: moderateScale(2.5,0.1)}}>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(5, 0.1),
              }}>
              <Text style={styles.nm}>Dior</Text>
              <Wishlist
                style={{marginLeft: 'auto', marginRight: moderateScale(5, 0.1)}}
              />
            </View>
            <Text style={styles.nm1}>Donker deep</Text>
            <Text style={styles.pr}>$ 134.89</Text>
            <Text style={styles.pr1}>$ 1355.89</Text>
            </View>
          </View>
  
          {/* item 4 */}
          <View
            style={{
              flexDirection: 'column',
              marginLeft: moderateScale(8, 0.1),
              height: verticalScale(150),
              width: scale(120),
            }}>
            <Image source={require('../images/Rectangle21.jpg')} />
            <View style={{backgroundColor: 'white', paddingLeft: moderateScale(5,0.1), marginRight: moderateScale(2.5,0.1)}}>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(5, 0.1),
              }}>
              <Text style={styles.nm}>Donatello</Text>
              <Wishlist
                style={{marginLeft: 'auto', marginRight: moderateScale(5, 0.1)}}
              />
            </View>
            <Text style={styles.nm1}>Cream elegant</Text>
            <Text style={styles.pr}>$ 398.90</Text>
            <Text style={styles.pr1}>$ 402.00</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.up}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.up1}>Upcoming promotion</Text>
            <Text style={styles.up3}>See all</Text>
          </View>
        </View>
        <View style={{marginLeft: moderateScale(10,0.1)}}>
          <Image source={require('../images/Rectangle26.png') } style={{height: 70, width: 70,}} />
          <Image source={require('../images/123.png')} style={{position: 'absolute', height:verticalScale(60), marginTop: moderateScale(5,0.1), marginLeft: moderateScale(6,0.1)}}/>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      backgroundColor: '#E5E5E5',
    },
    srcContainer: {
      flexDirection: 'row',
      marginLeft: moderateScale(20, 0.1),
      marginVertical: moderateScale(20, 0.1),
      backgroundColor: '#EEEEEE',
      width: scale(280),
    },
    inp: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      padding: moderateScale(5, 0.1),
      width: scale(270),
    },
    vw: {
      position: 'absolute',
    },
    txt: {
      fontFamily: 'Poppins-Bold',
      color: '#FFFFFF',
      fontSize: 14,
      marginLeft: moderateScale(165, 0.1),
      marginTop: moderateScale(60, 0.1),
      marginRight: moderateScale(30, 0.1),
    },
    disc: {
      flexDirection: 'row',
      marginLeft: moderateScale(9, 0.1),
      marginVertical: moderateScale(12, 0.1),
      alignItems: 'center',
    },
    discTxt: {
      fontFamily: 'Poppins-Medium',
      fontSize: 12,
      fontWeight: '600',
      color: 'black',
    },
    timer: {
      fontFamily: 'Poppins-Bold',
      fontSize: 10,
      marginLeft: moderateScale(5, 0.1),
      paddingHorizontal: moderateScale(4, 0.1),
      paddingTop: moderateScale(2, 0.1),
      borderRadius: 5,
      color: 'white',
      backgroundColor: '#6C28FE',
    },
    ind: {
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      color: '#6C28FE',
      marginHorizontal: moderateScale(3, 0.1),
      paddingTop: moderateScale(2, 0.1),
    },
    timer1: {
      fontFamily: 'Poppins-Bold',
      fontSize: 10,
      // marginLeft: moderateScale(5, 0.1),
      paddingHorizontal: moderateScale(4, 0.1),
      paddingTop: moderateScale(2, 0.1),
      borderRadius: 5,
      color: 'white',
      backgroundColor: '#6C28FE',
    },
    sa: {
      color: '#6C28FE',
      fontFamily: 'Poppins-Medium',
      marginLeft: 'auto',
      fontSize: 14,
      marginRight: moderateScale(5, 0.1),
      marginTop: moderateScale(7, 0.1),
    },
    nm: {
      fontFamily: 'Poppins-Medium',
      fontSize: 11,
      color: '#161616',
      marginBottom: moderateScale(-4, 0.1),
    },
    nm1: {
      fontFamily: 'Poppins=Medium',
      fontSize: 10,
      color: '#A4A4A4',
    },
    pr: {
      fontFamily: 'Poppins-Medium',
      color: '#6C28FE',
      fontSize: 11,
      marginTop: moderateScale(2, 0.1),
    },
    pr1: {
      color: '#777777',
      fontFamily: 'Poppins-Medium',
      fontSize: 8,
      marginTop: moderateScale(-2, 0.1),
      textDecorationLine: 'line-through',
    },
    up: {
      marginVertical: moderateScale(10, 0.1),
      marginTop: moderateScale(20,0.1)
    },
    up1: {
      fontFamily: 'Poppins-Medium',
      fontSize: 12,
      fontWeight: '600',
      color: 'black',
      marginLeft: moderateScale(9, 0.1),
    },
    up3: {
      fontFamily: 'Poppins-Medium',
      marginLeft: 'auto',
      marginRight: moderateScale(5, 0.1),
      fontSize: 11,
      color: '#6C28FE'
    },
  });
  