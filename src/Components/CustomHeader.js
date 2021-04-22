import React, {useEffect, useMemo, useState} from 'react';
import {Platform} from 'react-native';
import {StatusBar} from 'react-native';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {Header} from 'react-native-elements';
import Colors from '../../Constants/Colors';

const CustomHeader = ({onLeftButtonPress, onRightButtonPress, title,leftIconSource = require('../../Assets/back_arrow.png'), route}) => {
  // const [heading, setHeading] = useState('GET STARTED NOW');
  // useEffect(() => {
  //   console.log(title,route);
  //   // setHeading(currTitle=>{
  //   //   if(route?.routeName=='ChooseScreen') return 'GET STARTED NOW'
  //   //   if(route?.routeName=='Login') return 'LOGIN'
  //   //   if(route?.routeName=='SignUp') return 'REGISTER'
  //   //   if(route?.routeName=='ChooseScreen') return 'GET STARTED NOW'
  //   //   if(route?.routeName=='ChooseScreen') return 'GET STARTED NOW'
  //   //   if(route?.routeName=='ChooseScreen') return 'GET STARTED NOW'
  //   //   return currTitle
  //   // })
    
    
  // }, [route]);
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {onLeftButtonPress && (
          <View>
            <TouchableOpacity onPress={onLeftButtonPress}>
              <Image style={styles.back_icon} source={leftIconSource} />
            </TouchableOpacity>
          </View>
        )}

        {onRightButtonPress && (
          <View>
            <TouchableOpacity onPress={onRightButtonPress}>
              <Image style={styles.back_icon} source={require('../../Assets/back_arrow.png')} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>

    // <Header
    //   statusBarProps={{barStyle: 'light-content'}}
    //   height={78}
    //   containerStyle={styles.container}
    //   backgroundColor={Colors.blue_color}
    //   placement={'left'}
    //   leftComponent={
    //     <TouchableOpacity onPress={onLeftButtonPress}>
    //       <Image style={styles.back_icon} source={require('../../Assets/back_arrow.png')} />
    //     </TouchableOpacity>
    //   }
    //   leftContainerStyle={styles.left_container}
    //   centerComponent={<Text style={styles.title}>{title}</Text>}
    // />
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue_color,
    height: 78,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    zIndex: 100,
    // borderWidth: 2,
    // borderColor : 'red',
    // backgroundColor:'green'
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: StatusBar.currentHeight,
    zIndex: 0,
  },
  left_container: {
    // paddingTop:33,
    // paddingBottom: 6,
    // alignSelf:'center',
    // zIndex:5,
  },
  back_icon: {
    width: 30,
    height: 25,
    tintColor: '#fff',
    margin: 10,
    paddingTop: 15,
    paddingBottom: 15,
    zIndex: 50,
  },
});
