import { Link, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import useCartStore from "@/store/cartStore";
import { Text, TouchableOpacity } from "react-native";

export default function TabLayout() {
  const { items } = useCartStore();
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // headerShown: false,
        headerStyle: { backgroundColor: "#1c3782" },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <TouchableOpacity style={{ padding: 10, marginRight: 5 }}>
                <Text
                  style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
                >
                  {items}
                </Text>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Two"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <TouchableOpacity style={{ padding: 10, marginRight: 5 }}>
                <Text
                  style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
                >
                  {items}
                </Text>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
