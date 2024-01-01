import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

import Header from './src/components/Header';
import Timer from './src/components/Timer';
import ToggleTimer from './src/components/ToggleTimer';
import ResetTimer from './src/components/ResetTimer';

const options = ['Pomodoro', 'Short Break', 'Long Break']; // Titulo opciones disponibles.
const Colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2']; // Colores de fondo según la opción seleccionada.
const Times = [(1 * 60), (2 * 60), (15 * 60)]; // Tiempos por opción [Cantidad minutos * 60 (segundos) = total de segundos].

export default function App() {
	const [started, setStarted] = useState(false); // Guardar si el contador se ha iniciado.
	const [selected, setSelected] = useState(0); // Opción vista seleccionada [Por defecto 0 = 'Pomodoro'].
	const [timer, setTimer] = useState(Times[selected]); // Contador actual corriendo.
	const [TimerWorking, setTimerWorking] = useState(0); // Guarda cual de las opciones esta corriendo el timer de fondo.

	useEffect(() => {
		// Si se inició el contador, procedemos a realizar un setInterval para restarle un 1 cada segundo que pase.
		let interval = null;
		if (started) {
			interval = setInterval(() => {
				setTimer(timer - 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}

		// Reiniciamos el contador cuando llegue a 0.
		if (timer == 0)
			resetTimer();

		return () => clearInterval(interval);
	}, [started, timer]);

	// Función para resetear el contador o reloj.
	const resetTimer = () => {
		playSound();
		setStarted(false); // Detenemos el contador.
		setTimer(Times[TimerWorking]); // Reiniciamos el contador según el tab que se estuviera ejecutando de fondo.
	}

	// Función para iniciar y detener el reloj.
	const handleStarted = () => {
		playSound();
		setTimerWorking(selected); // Guardamos cual es la opción corriendo de fondo ['Pomodoro', 'Short Break', 'Long Break'].

		// Si intenta iniciar el contador y ya hay uno iniciado pero de otra Tab, deshabilita el anterior y habilita la nueva.
		if (selected !== TimerWorking && started) {
			setTimer(Times[selected]) // Reiniciamos el contador pero con el tiempo de la nueva tabla seleccionada.
		} else {
			setStarted(!started); // Si se mantiene el la misma vista, solo inicia o detiene el contador dependiendo de su estado.
		}
	};

	// Función para cambiar de opción.
	const handleSelected = (tabSelected) => {
		setSelected(tabSelected); // Esto solo cambia la vista.
	};

	// Función para reiniciar el contador sin detenerlo.
	const handleReset = () => {
		setTimer(Times[TimerWorking]); // Reiniciamos el contador según el tab que se estuviera ejecutando de fondo.
	};

	// Función para reproducir el sonido al cliquear el botón Iniciar/Detener
	const playSound = async () => {
		const { sound } = await Audio.Sound.createAsync(require('./assets/alert.wav'));
		sound.playAsync();
	};

	return (
		<View style={[styles.container, { backgroundColor: Colors[selected] }]}>
			<Text style={styles.text}>POMODORO</Text>

			<Header options={options} selected={selected} handleSelected={handleSelected} />
			<Timer timer={timer} Times={Times} selected={selected} TimerWorking={TimerWorking} />
			<ToggleTimer started={started} selected={selected} TimerWorking={TimerWorking} handleStarted={handleStarted} />
			{selected === TimerWorking && timer !== Times[selected] && <ResetTimer handleReset={handleReset}/>}

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 35,
		paddingHorizontal: 20,
		backgroundColor: '#ffffff',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
});
