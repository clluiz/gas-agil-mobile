import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import PageHeader from '../components/PageHeader'
import {
  Formik
} from 'formik'
import {
  MaskedTextInput,
  TextInput
} from '../components/Inputs'
import {
  COLORS
} from '../styles'
import {
  Button
} from 'react-native-elements'
import KeyboardShift from '../components/KeyboardShift'

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 15
  },
  confirmButton: {
    height: 50,
    width: '100%',
    backgroundColor: COLORS.CONFIRM,
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 15,
    color: COLORS.PRIMARY
  }
})

export default (props) => {

  return (<KeyboardShift extraGap={100}>
    {
      () => (
        <>
          <PageHeader navigation={props.navigation} />
          <Text style={styles.title}>Preencha seus dados pessoais</Text>
          <Formik
            initialValues={{ name: '', email: '', phone: '', address: '', password: '', confirmPassword: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.form}>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Nome"
                />
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Email"
                />
                <MaskedTextInput
                  onChangeText={handleChange('phone')}
                  placeholder="Telefone celular"
                  mask={'([00]) [0] [0000] [0000]'}
                />
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Senha"
                  secureTextEntry={true}
                />
                <TextInput
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder="Confirme sua senha"
                  secureTextEntry={true}
                />
                <Button buttonStyle={styles.confirmButton} onPress={handleSubmit} title="Confirmar" />
              </View>
            )}
          </Formik>
        </>
      )
    }
  </KeyboardShift>)
}