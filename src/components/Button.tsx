import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'

interface Props {
  label: string
}

const Button = (props: Props): JSX.Element => {
  const { label } = props
  return (
    <TouchableOpacity onPress={() => { Alert.alert('Pressed!')}} style={styles.button}>
    <Text style={styles.buttonLabel}>{label}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button :{
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 24
  }
})

export default Button
