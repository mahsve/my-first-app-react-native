import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const optionsTab = ['Pomodoro', 'Short Break', 'Long Break'];

export default function ({ setTime, option, setOption }) {
  const handleOption = (option) => {
    const newTime = option == 0 ? 25 * 60 : option == 1 ? 5 * 60 : 15 * 60;
    setOption(option);
    setTime(newTime);
  };

  return (
    <View style={styles.container}>
      {optionsTab.map((text, index) => (
        <TouchableOpacity key={index} style={[styles.touchable, option === index && styles.touchableActive]} onPress={() => handleOption(index)}>
          <Text>{text}</Text>
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