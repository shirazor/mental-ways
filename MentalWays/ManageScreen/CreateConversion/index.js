import { StyleSheet, View } from 'react-native';
import { Input, Text, Button, Icon } from '@rneui/themed';
import { useState } from 'react';

const CreateConversion = () => {
	const [conversion, setConversion] = useState();
	const [initalStep, setInitalStep] = useState();

	const saveIntialStep = () => {
		setConversion({ ...conversion, initalStep })
	}

	return (
		<View style={styles.container}>
			<Text h2>שם השיחה</Text>
			<Input
				placeholder='שאלת התחלה'
				rightIcon={
					<Button radius={"sm"} type="solid" onPress={({ value }) => {
						console.log(value);
						setInitalStep({ ...initalStep, question: value })
					}}>
						<Icon name="save" color="white" />
					</Button>}
				onChange={({ nativeEvent }) => setInitalStep({ ...initalStep, question: nativeEvent.text })}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '75%',
		backgroundColor: 'rgb(238,230,223)',
		alignItems: 'center',
		justifyContent: 'start',
	},
});

export default CreateConversion;