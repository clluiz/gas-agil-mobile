import React from 'react';
import { 
  TextInput as Input,
  StyleSheet 
} from 'react-native'
import { COLORS } from '../../../styles';
import TextInputMask from 'react-native-text-input-mask';

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderColor: COLORS.LIGHT_GRAY,
    borderWidth: 1,
    color: COLORS.DARK_GRAY,
    marginVertical: 5,
    borderRadius: 5
  }
})

const TextInput = (props) => {
  return (<Input {...props} style={styles.input} />)
}

const MaskedTextInput = (props) => {
  return (<TextInputMask {...props} style={styles.input} />)
}

export {
  TextInput,
  MaskedTextInput
}