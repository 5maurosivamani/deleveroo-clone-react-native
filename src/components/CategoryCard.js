import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function CategoryCard({title, imageUrl}) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{uri: imageUrl}} className="h-20 w-20 rounded" />  
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}