import { StyleSheet, Text, View } from 'react-native';

const ManagerScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Hello world!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '75%',
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default ManagerScreen;