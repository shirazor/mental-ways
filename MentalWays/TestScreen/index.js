import { View, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const TestScreen = ({ navigation }) => {

	const navigateToChat = () => {
		navigation.navigate('Chat');
	};

	return <View style={styles.container}>
		<Button title='Test' onPress={navigateToChat}>
			Test
		</Button>
	</View>
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'green'
	},
});

export default TestScreen;