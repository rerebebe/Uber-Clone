import { FlatList, TouchableOpacity, View,  Image, Text } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
  {
    id:"123",
    title:"Get a ride",
    image:"https://pics.clipartpng.com/midle/White_Lorinser_Mercedes_Benz_CL_Class_Car_PNG_Clipart-130.png",
    screen:"MapScreen"
  },
  {
    id:"456",
    title:"Order food",
    image:"https://pics.clipartpng.com/midle/Asian_Fast_Food_PNG_Clip_Art-2541.png",
    screen:"EatsScreen"
  }
]

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin)
  return (
  <FlatList 
   data={data}
   horizontal
   keyExtractor={(item)=>item.id}
   renderItem={({item}) => (
    <TouchableOpacity 
    onPress={() => navigation.navigate(item.screen)} 
    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`} 
    disabled={!origin}
    >
      <View style={tw`${!origin && "opacity-10"}`}>
        <Image 
         style={{width:120, height:120, resizeMode:"contain"}}
         source={{uri: item.image}}
        />
        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
        <Icon
          style={tw`p-2 bg-black rounded-full w-10 mt-4`} 
          type="antdesign" color="white" name="arrowright"
        />
      </View>
    </TouchableOpacity>
   )}
  />
  )
}

export default NavOptions

//  