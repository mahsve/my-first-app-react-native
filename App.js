import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

import Header from './src/components/Header';
import Timer from './src/components/Timer';
import ToggleTimer from './src/components/ToggleTimer';

const options = ['Pomodoro', 'Short Break', 'Long Break']; // Titulo opciones disponibles.
const Colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2']; // Colores de fondo según la opción seleccionada.
const Times = [(25 * 60), (5 * 60), (15 * 60)]; // Tiempos por opción [Cantidad minutos * 60 (segundos) = total de segundos].

export default function App() {
	const [timer, setTimer] = useState(0); // Contador actual corriendo.
	const [started, setStarted] = useState(false); // Guardar si el contador se ha iniciado.
	const [option, setOption] = useState(0); // Opción timer seleccionada [Por defecto 0 = 'Pomodoro'].


	const [isWorking, setIsWorking] = useState(false);
	const [time, setTime] = useState(25 * 60);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {

	}, [started, timer]);

	const handleStarted = () => {
		setStarted(!started);
	};





	const handleStatusTime = () => {
		playSound();
		setIsActive(!isActive);
	};

	const playSound = async () => {
		const { sound } = await Audio.Sound.createAsync(
			require('./assets/alert.wav')
		);
		sound.playAsync();
	}

	return (
		<View style={[styles.container, { backgroundColor: Colors[option] }]}>
			<Text style={styles.text}>POMODORO</Text>
			
			<Header options={options}    setTime={setTime} option={option} setOption={setOption} />
			<Timer time={time} />
			<ToggleTimer started={started} handleStarted={handleStarted} timer={timer} />

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
});
