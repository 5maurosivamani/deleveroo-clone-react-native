import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowLongRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

export default function Featured({ id, title, description }) {
  return (
    <View className="px-4">
      <View className="mt-4 flex-row items-center justify-between"> 
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowLongRightIcon color="#00CCBB" size={35} />
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>

     <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        paddingHorizontal:15
     }} className="pt-4">
        {/* Restaurant Cards */}
        <RestaurantCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yo! Sushi"
        rating={4.5}
        genre="Japanese"
        address="Mount Chamber"
        short_description="This is the test description"
        dishes={[]}
        long={20}
        lat={0}
        />
         
     </ScrollView>
    </View>
  );
}
