import { StyleSheet,Text, View, Image } from 'react-native';
import Colors from '../../constants/Colors';
import products from '../../../assets/data/products';



const ProductListItem = ({ product }) => {

  return ( 
    <View style={styles.container}>
    <Image source={{ uri: product.image }} style={styles.image} />

    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price} >${product.price}</Text>
  </View>
  )
}   

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]}/>
      <ProductListItem product={products[1]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },

  image: { 
    width:'100%',
    aspectRatio: 1,
      
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});


