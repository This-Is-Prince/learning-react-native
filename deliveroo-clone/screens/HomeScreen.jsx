import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Body from "../components/Home/Body";
import Header from "../components/Home/Header";
import Search from "../components/Home/Header/Search";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView edges={["top", "left", "right"]} className="bg-white">
      {/* Header */}
      <Header />
      {/* Search */}
      <Search />
      {/* Body */}
      <Body />
    </SafeAreaView>
  );
};

export default HomeScreen;
