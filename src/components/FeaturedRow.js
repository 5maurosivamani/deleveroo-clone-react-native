import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLongRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import  sanityClient  from "../../sanity";
import { setupURLPolyfill } from 'react-native-url-polyfill';

setupURLPolyfill();

export default function FeaturedRow({ id, title, description }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{



    sanityClient.fetch(
      `
      *[_type == "featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...,
            type->{
              name
            }
          }
        }
      }[0]
      `,{id:id}
    ).then((data) =>{
      setRestaurants(data?.restaurants);
    });
  }, []);

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
        {restaurants.map(restaurant => (
          <RestaurantCard 
          id={restaurant._id}
          imgUrl={restaurant.image}
          title={restaurant.name}
          rating={restaurant.rating}
          genre={restaurant?.name}
          address={restaurant.address}
          short_description={restaurant.short_description}
          dishes={restaurant.dishes}
          long={restaurant.long}
          lat={restaurant.lat}
          key={restaurant._id}
          />
        ))}
        
         
     </ScrollView>
    </View>
  );
}
