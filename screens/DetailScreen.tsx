// screens/DetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

const DetailsScreen = ({ route }: any) => {
  const { productId } = route.params;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]); // Runs whenever productId changes

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  if (error) {
    return <Text style={{ flex: 1, textAlign: 'center', marginTop: 20 }}>{error}</Text>;
  }

  if (!product) {
    return <Text style={{ flex: 1, textAlign: 'center', marginTop: 20 }}>Product not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: product.image }} 
        style={styles.image} 
        resizeMode="contain"
      />
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
  },
  category: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
  },
});

export default DetailsScreen;