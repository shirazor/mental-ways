import { View, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

	const navigateToChat = () => {
		navigation.navigate('Chat');
	};

	const navigateToManager = () => {
		navigation.navigate('Manager');
	};

	return <View style={styles.container}>
		<Button title='To Manager' onPress={navigateToManager}>
			Test
		</Button>
		<Button title='To Chat' onPress={navigateToChat}>
			Test
		</Button>
	</View>
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'green'
	},
});

export default HomeScreen;