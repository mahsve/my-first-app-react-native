import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ({ options, setTime, option, setOption }) {
  const handleOption = (option) => {
    const newTime = option == 0 ? 2 * 60 : option == 1 ? 1 * 60 : 1 * 60;
    setOption(option);
    setTime(newTime);
  };

  return (
    <View style={styles.container}>
      {options.map((opt, index) => (
        <TouchableOpacity key={index} style={[styles.touchable, opt === index && styles.touchableActive]} onPress={() => handleOption(index)}>
          <Text>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}





const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
  },
  touchable: {
    width: '32.5%',
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  touchableActive: {
    backgroundColor: '#ffffff',
  }
});