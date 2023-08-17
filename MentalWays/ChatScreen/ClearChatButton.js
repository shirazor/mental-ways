import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ClearChatButton = ({ onPress }) => <View style={styles.container}>
	<TouchableOpacity style={styles.button} onPress={onPress}>
		<Text style={styles.buttonText}>ניקוי שיחה</Text>
	</TouchableOpacity>
</View>;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '7%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		width: '90%',
		height: '75%',
		backgroundColor: '#6b9080',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	buttonText: {
		fontSize: 16,
		color: 'white'
	}
});

export default ClearChatButton;