import { SafeAreaView, Text, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import { ChevronDownIcon} from "react-native-heroicons/outline";

export default function HomeScreen() {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* <Text className="text-red-500">HomeScreen</Text> */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image source={{
          uri: "https://links.papareact.com/wru"
        }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text className="font-bold text-gray-400 text-xs">Delever Now!</Text>
          <Text className="font-bold text-xl">Current Location 
          <ChevronDownIcon color="#000" size={20} />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}