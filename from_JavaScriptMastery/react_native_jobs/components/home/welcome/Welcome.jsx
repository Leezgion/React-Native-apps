import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SIZES, icons } from "../../../constants";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { useState } from "react";

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={() => {}} placeholder="What are you looking for?" />
        </View>

        <TouchableOpacity>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
