import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ({ options, selected, handleSelected }) {
	return (
		<View style={styles.container}>
			{options.map((opt, index) => (
				<TouchableOpacity key={index} style={[styles.touchable, selected === index && styles.touchableActive]} onPress={() => handleSelected(index)}>
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
		fontWeight: 'bold',
		backgroundColor: '#ffffff',
	}
});