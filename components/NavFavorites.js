import { FlatList, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from "tailwind-react-native-classnames"
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'

const NavFavorites = () => {

  const dispatch = useDispatch()
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destinations: " No.16, Ln.461, Sec. 2, Xing'an Rd., Beitun Dist., Taichung City"
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destinations: "Hawaii, US"
    }

  ]

  return (
    <FlatList 
      data={data} 
      keyExtractor={(item)=>item.id}
      // 就是分隔線
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 0.5}]} />
      )}
      renderItem={({item:{ location, icon, destinations }})=>(
        <TouchableOpacity 
          style={tw`flex-row items-center p-3`}
          onPress={() => {
            dispatch(
              setDestination({
                location: destinations,
                description: location
              })
            )
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
           />
           <View>
             <Text style={tw`font-semibold text-lg`}>{location}</Text>
             <Text style={tw`text-gray-500`}>{destinations}</Text>
           </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavFavorites

// const styles = StyleSheet.create({})