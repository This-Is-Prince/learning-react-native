import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/Restaurant/DishRow";
import BasketIcon from "../components/Restaurant/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-300"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon color="#00CC88" size={20} />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row gap-x-2 my-1">
              <View className="flex-row items-center gap-x-1">
                <StarIcon color="green" size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> · {genre}
                </Text>
              </View>

              <View className="flex-row items-center gap-x-1">
                <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby · {address} · {genre}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
        </View>
        <TouchableOpacity className="flex-row items-center gap-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text className="flex-1 text-md font-bold">Have a food allergy?</Text>
          <ChevronRightIcon color="#00CC88" />
        </TouchableOpacity>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* Dishes */}
          {dishes.map((dish) => {
            const { _id, name, short_description, price, image } = dish;
            return (
              <DishRow
                key={_id}
                id={_id}
                name={name}
                description={short_description}
                price={price}
                image={image}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
