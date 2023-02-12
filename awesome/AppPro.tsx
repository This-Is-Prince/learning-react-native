import React, {FC} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

const AppPro: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
      <Text style={!isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
