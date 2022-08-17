import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../../../sanity";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  console.log(urlFor(imgUrl).url());
  return (
    <TouchableOpacity className="bg-white mr-3 rounded-md shadow-md flex-col gap-y-1 pb-1">
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-t-md"
      />
      <View className="px-3">
        <Text className="font-bold text-lg">{title}</Text>
      </View>
      <View className="px-3 flex-row items-center gap-x-1">
        <StarIcon color="green" opacity={0.5} size={22} />
        <Text className="text-xs text-gray-500">
          <Text className="text-green-500">{rating}</Text> · {genre}
        </Text>
      </View>
      <View className="px-3 flex-row items-center gap-x-1 rounded-b-md">
        <LocationMarkerIcon color="gray" opacity={0.5} size={22} />
        <Text className="text-xs text-gray-500">Nearby · {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
