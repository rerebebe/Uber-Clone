// rnfes
import { SafeAreaView, Image, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import NavFavorites from '../components/NavFavorites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux';
import {setOrigin, setDestination} from "../slices/navSlice"

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{width:100, height:100, resizeMode:"contain"}} 
          source={{
          uri:"https://1000logos.net/wp-content/uploads/2021/04/Uber-logo-768x269.png"
          }}
        />
        <GooglePlacesAutocomplete
          placeholder='Where From?'
          styles={{
            container: {
              flex: 0,
            },
            textInput:{
              fontSize: 18
            }
          }}
          returnKeyType={"search"}
          onPress={(details, data = null) => {
            dispatch(
              setOrigin({
                location: data.geometry.location,
                description: details.description
              }))
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          query={{
            key:GOOGLE_MAPS_APIKEY,
            language:'en'
          }}
          minLength={2}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOptions />
        <NavFavorites />
     </View>
    </SafeAreaView>
  )
}

export default HomeScreen

// const styles = StyleSheet.create({
//   text:{
//     color: "blue"
//   }
// })