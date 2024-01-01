import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ({ handleReset }) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.text}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F9842D',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
});
