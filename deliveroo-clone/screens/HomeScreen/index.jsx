import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView edges={["top", "left", "right"]} className="bg-white">
      {/* Header */}
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;
