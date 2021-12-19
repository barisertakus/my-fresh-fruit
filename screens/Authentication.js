import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RegisterHeader from '../components/Authentication/RegisterHeader'
import RegisterForm from '../components/Authentication/RegisterForm'

const Authentication = ({navigation}) => {

  return (
    <View style={styles.container}>
      <RegisterHeader />
      <RegisterForm navigation={navigation} />
    </View>
  )
}

export default Authentication

const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor: "#fff"
  }
})
