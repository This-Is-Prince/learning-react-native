import { View, Text, TextInput } from "react-native";
import React from "react";
import { SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";

const Search = () => {
  return (
    <View className="flex-row gap-x-2 items-center px-4 pb-2">
      <View className="flex-row gap-x-2 flex-1 bg-gray-200 p-3 rounded-sm">
        <SearchIcon color="#9b9ea3" size={20} />
        <TextInput
          placeholder="Restaurants and cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsIcon color="#00CCBB" />
    </View>
  );
};

export default Search;
