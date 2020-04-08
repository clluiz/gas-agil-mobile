import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import {
  MaskedTextInput,
  TextInput
} from '../Inputs'
import {
  Formik
} from 'formik'

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 15
  }
})

const Address = () => {
  return (
    <Formik>
      {() => (
        <View style={styles.paddingHorizontal}>
          <MaskedTextInput
            mask={'[00000]-[000]'}
            placeholder="CEP"
          />

          <TextInput
            placeholder="Estado"
          />

          <TextInput
            placeholder="Cidade"
          />

          <View 
            flexDirection="row"
            justifyContent="space-around"
            paddingHorizontal={0}
          >
            <TextInput
              style={{ flex: 0.7}}
              placeholder="Rua"
            />

            <TextInput
              style={{ flex: 0.2}}
              placeholder="Nº"
            />
          </View>


          <TextInput
            placeholder="Bairro"
          />

          <TextInput
            placeholder="Complemento"
          />

          <TextInput
            placeholder="Referência"
          />

        </View>
      )}
    </Formik>
  )
}

export default Address