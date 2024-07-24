import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import data from "@/assets/data.json";
import { Ionicons } from "@expo/vector-icons";
import useCartStore from "@/store/cartStore";
import { Product } from "@/store/interface";

const TabTwoScreen = () => {
  //get define action zustand
  const { addProduct, removeProduct, products } = useCartStore();

  const RenderItem: ListRenderItem<Product & { quantity: number }> = ({
    item,
  }) => {
    return (
      <View style={styles.cartItemContainer}>
        <Image style={styles.cartImage} source={{ uri: item?.image }} />
        <View style={styles.itemContainer}>
          <Text style={styles.cartItemName}>{item?.title}</Text>
          <Text style={{}}>Price: ${item?.price}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => removeProduct(item)}
          >
            <Ionicons name="remove" size={20} color={"#000"} />
          </TouchableOpacity>
          <Text style={{ padding: 10 }}>{item?.quantity}</Text>
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => addProduct(item)}
          >
            <Ionicons name="add" size={20} color={"#000"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TabOneScreen</Text>
      <FlatList data={products} renderItem={RenderItem} />
    </View>
  );
};

export default TabTwoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  cartItemContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  cartImage: {
    height: 50,
    width: 50,
  },
  itemContainer: {
    flex: 1,
  },
  cartItemName: {},
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
