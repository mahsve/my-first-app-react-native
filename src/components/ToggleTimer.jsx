import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function ({ started, selected, TimerWorking, handleStarted }) {
	// Verificamos si el tab seleccionado es el mismo que esta trabajando de fondo.
	let textButton = '';
	if (selected === TimerWorking) {
		textButton = started === false ? "Iniciar" : "Detener";
	} else {
		textButton = "Iniciar";
	}

	return (
		<View>
			<TouchableOpacity style={styles.button} onPress={handleStarted}>
				<Text style={styles.text}>{textButton}</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#6F00E5',
		alignItems: 'center',
		padding: 10,
		marginTop: 20,
		borderRadius: 10,
	},
	text: {
		color: '#ffffff',
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
});
