import { StyleSheet, Text, View } from "react-native";

export default function ({ time }) {
  const formattedTime = `${(Math.floor(time / 60).toString().padStart(2, "0"))}:${(time % 60).toString().padStart(2, "0")}`

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formattedTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    marginTop: 20, 
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  text: {
    fontSize: 60
  }
});