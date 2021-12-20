import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DetailsHeader from '../components/ProductDetails/DetailsHeader'
import Product from '../components/ProductDetails/Product'

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <DetailsHeader />
      <Product />
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
