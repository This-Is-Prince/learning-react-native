import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import Categories from "./Categories";
import FeaturedRow from "./FeaturedRow";
import sanityClient from "../../../sanity";

const Body = () => {
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
    <ScrollView className="bg-gray-100">
      {/* Categories */}
      <Categories />

      {featuredCategories?.map((category) => {
        return (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        );
      })}
    </ScrollView>
  );
};

export default Body;
