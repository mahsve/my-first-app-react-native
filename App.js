import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

import Header from './src/components/Header';
import Timer from './src/components/Timer';

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [option, setOption] = useState(0);

  const handleStatusTime = () => {
    playSound();
    setIsWorking(!isWorking);
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/alert.wav')
    );
    sound.playAsync();
  }

  return (
    <View style={[styles.container, { backgroundColor: colors[option] }]}>
      <Text style={styles.text}>Pomodoro</Text>
      <Header setTime={setTime} option={option} setOption={setOption} />
      <Timer time={time} />

      <TouchableOpacity style={styles.button} onPress={handleStatusTime}>
        <Text style={{ color: '#ffffff' }}>{!isWorking ? "START" : "STOP"}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 35,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    color: '#ffffff',
    backgroundColor: '#444444',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  }
});
