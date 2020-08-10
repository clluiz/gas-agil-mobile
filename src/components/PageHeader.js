import React from 'react'
import {
  StyleSheet
} from 'react-native'
import { 
  Header, 
  Button 
} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../styles'

const styles = StyleSheet.create({
  containerStyle : {
    backgroundColor : COLORS.LIGHT_GRAY,
    height : 50,
    padding : 15
  }
})

export default (props) => {
  const { navigation } = props
  return (
    <Header 
      containerStyle={styles.containerStyle}
    >
      <Button 
          type='clear'
          styles={{flex:1}}
          onPress={() => navigation.goBack()} 
          icon={<Icon 
                  name='arrow-left' 
                  color={COLORS.PRIMARY} 
                  size={25} 
                />} 
          />
    </Header>
  )
}