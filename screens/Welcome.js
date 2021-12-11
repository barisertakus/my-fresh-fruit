import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WelcomeHeader from '../components/Welcome/WelcomeHeader'
import WelcomeContent from '../components/Welcome/Welcome'

const Welcome = ({navigation}) => {

  useLayoutEffect(()=>{
    navigation.setOptions({headerShown:false})
  },[])

  return (
    <View style={styles.container}>
      <WelcomeHeader />
      <WelcomeContent />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
    flex : 1,
  }
})
