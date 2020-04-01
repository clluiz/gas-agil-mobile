import React from 'react'
import {
  Formik
} from 'formik'
import {
  View
} from 'react-native'
import {
  TextInput
} from '../inputs'

const Address = () => {
  return (
    <Formik
    >
      {() => (
        <View>
          <TextInput 
            placeholder="CEP"
          />
        </View>
      )}
    </Formik>
  )
}

export default Address;