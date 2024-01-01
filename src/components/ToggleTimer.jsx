import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function ({ started, handleStarted, timer }) {
	return (
		<View>
			<TouchableOpacity style={styles.button} onPress={handleStarted}>
				<Text style={styles.text}>{ started ? "Iniciar" : "Detener"}</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		color: '#ffffff',
		backgroundColor: '#444444',
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
