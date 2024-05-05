import {Stack,useLocalSearchParams} from 'expo-router'
import {View, Text, Image} from 'react-native';
import products from '@assets/data/products';
import { defaultPizzaImage } from '@/components/ProductListItem';

const ProductDetailsScreen = () => { 
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() === id); 

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image 
       source={{ uri: product.image || defaultPizzaImage }} 
       style={styles.image} />

      <Text style={styles.price }>${product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    image: {
      width: '100%',
      aspectRatio: 1
    },
    price: {}
  },
});
export default ProductDetailsScreen;