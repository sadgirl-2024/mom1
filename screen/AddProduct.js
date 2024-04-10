// AddProduct.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AddProduct = ({ route }) => {
  const { productId, category, name, price, quality, image } = route.params; // Get product details from route params

  return (
    <View style={styles.container}>
      <Text>Product ID: {productId}</Text>
      <Text>Category: {category}</Text>
      <Text>Name: {name}</Text>
      <Text>Price: ${price}</Text>
      <Text>Quality: {quality}</Text>
      {/* Display more product details here */}
      {/* Display the clicked sub-product's image */}
      <Image source={image} style={styles.productImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 5,
  },
});

export default AddProduct;
