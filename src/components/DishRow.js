import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../../sanity";
import Currency from "react-currency-formatter";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity>
      <View>
        <View>
          <Text>{name}</Text>
          <Text>{description}</Text>
          <Text>
            <Currency quantity={price} currency="INR" />
          </Text>
        </View>
        <View>
          <Image source={urlFor(image).url()} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
