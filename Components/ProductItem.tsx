// components/ProductItem.js
import React from 'react';
import {  Text, StyleSheet, TouchableOpacity } from 'react-native';
type Product = {
  title: string;
  price: string | number;
  description?: string;
};

type ProductItemProps = {
  product: Product;
  onPress: () => void;
};

const ProductItem = ({ product, onPress }: ProductItemProps) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
  fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 4,
  },
});

export default ProductItem;