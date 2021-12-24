import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DetailsHeader from '../components/ProductDetails/DetailsHeader'
import Product from '../components/ProductDetails/Product'

const ProductDetails = ({navigation, route}) => {

  const product = route.params;

  return (
    <View style={styles.container}>
      <DetailsHeader image={product.src} />
      <Product product={product} />
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
