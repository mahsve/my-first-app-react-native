import { StyleSheet, Text, View } from "react-native";

export default function ({ timer, Times, selected, TimerWorking }) {
	const counter = selected === TimerWorking ? timer : Times[selected];
	const formattedTime = `${(Math.floor(counter / 60).toString().padStart(2, "0"))}:${(counter % 60).toString().padStart(2, "0")}`;

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
		fontSize: 60,
		color: '#333333',
	}
});