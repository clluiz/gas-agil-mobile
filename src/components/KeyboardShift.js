/**
 * Solução baseada em: https://codeburst.io/react-native-keyboard-covering-inputs-72a9d3072689
 * Criada a propriedade extraGap para adicionar um espaço extra na parte inferior do componente
 */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { 
  Animated, 
  Dimensions, 
  Keyboard, 
  StyleSheet, 
  TextInput, 
  UIManager 
} from 'react-native'

const { State: TextInputState } = TextInput

export default class KeyboardShift extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shift: new Animated.Value(0),
    }
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow)
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide)
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove()
    this.keyboardDidHideSub.remove()
  }

  render() {
    const { children: renderProp } = this.props
    const { shift } = this.state
    return (
      <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
        {renderProp()}
      </Animated.View>
    )
  }

  handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window')
    const keyboardHeight = event.endCoordinates.height
    const currentlyFocusedField = TextInputState.currentlyFocusedField()
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height
      const fieldTop = pageY
      const gap = (windowHeight - (keyboardHeight + this.props.extraGap)) - (fieldTop + fieldHeight)
      if (gap >= 0) {
        return
      }
      Animated.timing(
        this.state.shift,
        {
          toValue: gap,
          duration: 1000,
          useNativeDriver: true,
        }
      ).start()
    })
  }

  handleKeyboardDidHide = () => {
    Animated.timing(
      this.state.shift,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start()
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  }
})

KeyboardShift.propTypes = {
  children: PropTypes.func.isRequired,
  extraGap: PropTypes.number
}

KeyboardShift.defaultProps = {
  extraGap: 0
}