import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
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
        {/* Restaurant Cards */}
        <RestaurantCard
          id={123}
          title="Bob's Restaurant"
          rating="5 Stars"
          genre="Breakfast"
          address="124, Lincon Blvd"
          short_description="Eat your food the way you want it..."
          dishes="Some Other Dishes"
          long="3433"
          lat="3456"
          imgUrl="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <RestaurantCard
          id={123}
          title="Bob's Restaurant"
          rating="5 Stars"
          genre="Breakfast"
          address="124, Lincon Blvd"
          short_description="Eat your food the way you want it..."
          dishes="Some Other Dishes"
          long="3433"
          lat="3456"
          imgUrl="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <RestaurantCard
          id={123}
          title="Bob's Restaurant"
          rating="5 Stars"
          genre="Breakfast"
          address="124, Lincon Blvd"
          short_description="Eat your food the way you want it..."
          dishes="Some Other Dishes"
          long="3433"
          lat="3456"
          imgUrl="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
