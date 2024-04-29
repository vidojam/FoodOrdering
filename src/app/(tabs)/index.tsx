import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import { startTransition } from 'react';
import Colors from '../../constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pepperoni Pizza</Text>
      <Text style={styles.price} >$12.99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    
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
