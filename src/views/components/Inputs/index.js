import React from 'react'
import { 
  TextInput as Input,
  StyleSheet 
} from 'react-native'
import { COLORS } from '../../../styles'
import TextInputMask from 'react-native-text-input-mask'

const styles = StyleSheet.create({
  input: {
    color: COLORS.DARK_GRAY,
    marginVertical: 5,
    borderBottomColor: COLORS.LIGHT_GRAY,
    borderBottomWidth: 1
  }
})

const TextInput = (props) => {
  return (<Input {...props} style={{...props.style, ...styles.input}} />)
}

const MaskedTextInput = (props) => {
  return (<TextInputMask {...props} style={{...props.style, ...styles.input}} />)
}

export {
  TextInput,
  MaskedTextInput
}