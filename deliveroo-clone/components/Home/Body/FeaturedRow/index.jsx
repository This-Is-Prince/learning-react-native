import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../../../../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [featuredCategories, setFeaturedCategories] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type=="featured"] {
      ...,
      restaurants[]->{
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
    <View className="mt-4">
      <View className="flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards... */}
        <RestaurantCard
          id={123}
          imgUrl={`https://links.papareact.com/gn7`}
          title={"Yo! Sushi"}
          rating={4.5}
          genre="Japanese"
          address="123 Main st."
          short_description={"This is a Test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={`https://links.papareact.com/gn7`}
          title={"Yo! Sushi"}
          rating={4.5}
          genre="Japanese"
          address="123 Main st."
          short_description={"This is a Test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={`https://links.papareact.com/gn7`}
          title={"Yo! Sushi"}
          rating={4.5}
          genre="Japanese"
          address="123 Main st."
          short_description={"This is a Test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={`https://links.papareact.com/gn7`}
          title={"Yo! Sushi"}
          rating={4.5}
          genre="Japanese"
          address="123 Main st."
          short_description={"This is a Test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
