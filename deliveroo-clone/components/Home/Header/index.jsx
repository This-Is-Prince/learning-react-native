import { Image, Text, View } from "react-native";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";
import React from "react";

const Header = () => {
  return (
    <View className="flex-row pb-3 items-center gap-x-2 px-4">
      <Image
        source={{ uri: `https://links.papareact.com/wru` }}
        className="h-8 w-8 bg-gray-300 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl">
          Current Location
          <ChevronDownIcon size={20} color="#00CCBB" />
        </Text>
      </View>
      <UserIcon size={35} color="#00CCBB" />
    </View>
  );
};

export default Header;
