import { ScrollView } from "react-native";
import React from "react";
import Categories from "./Categories";
import FeaturedRow from "./FeaturedRow";

const Body = () => {
  return (
    <ScrollView className="bg-gray-100">
      {/* Categories */}
      <Categories />

      {/* Featured */}
      <FeaturedRow
        id="123"
        title="Featured"
        description="Paid placements from our partners"
      />
      {/* Tasty Discounts */}
      <FeaturedRow
        id="1234"
        title="Tasty Discounts"
        description="Everyone's been enjoying these juicy discounts!"
      />
      {/* Offers near you */}
      <FeaturedRow
        id="12345"
        title="Offers near you!"
        description="Why not support your local restaurant tonight!"
      />
    </ScrollView>
  );
};

export default Body;
