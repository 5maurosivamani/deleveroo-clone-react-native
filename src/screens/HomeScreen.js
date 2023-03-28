import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { Categories, FeaturedRow } from "../components";
import "url-search-params-polyfill";
import 'react-native-url-polyfill/auto';

import sanityClient from "../../sanity";

export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"]{
          ...,
          restaurent[]->{
            ...,
            dishes[]->   
          }
        }
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);


  return (
    <SafeAreaView className="bg-white pt-5">
      <ScrollView>
        {/* StatusBar */}
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        {/* Location plus user Icon */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Delever Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon color="#00CCBB" size={20} />
            </Text>
          </View>
          <UserIcon color="#00CCBB" size={30} />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-4 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center">
            <MagnifyingGlassIcon color="#00CCBB" size={20} />
            <TextInput
              placeholder="Restaurent and cusiness"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" size={20} />
        </View>

        {/* Body */}
        <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        >
          {/* Categories */}
          <Categories />
        </ScrollView>

        {/* Featured */}
        {featuredCategories?.map(category => (
          <FeaturedRow
            id={category._id}
            key={category._id}
            title={category.name}
            description={category.short_description}

          />
        ))}
        
      </ScrollView>
    </SafeAreaView>
  );
}
