import { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet, Image } from 'react-native';
import { Button, Card, Text, CheckBox } from 'react-native-elements';
import AlertComponent from '../Alert'; 

const HomeScreen = ({ navigation }) => {

	const [isTermsAgreed, setIsTermsAgreed] = useState(false);
	const [isAlertVisible, setAlertVisible] = useState(false);

	const openAlert = () => {
	  setAlertVisible(true);
	};
  
	const closeAlert = () => {
	  setAlertVisible(false);
	};

	const navigateToChat = () => {
		if (isTermsAgreed) {
			navigation.navigate("צ'אט");
		}
		else {
			openAlert();
		}
	};

	return <View style={styles.container}>
		<Image style={{ flex: 1, resizeMode: 'cover' }} source={require('../assets/homePage.jpeg')} />
		<View  style={{ position: 'absolute', top: 20, left: 0, right: 0, opacity: 0.85 }} >
		<Card >
			<Card.Title>איך זה עובד:</Card.Title>
			<Card.Divider />
			<View style={{ position: "relative", alignItems: "center" }}>
				<Text style={styles.buttonTitle}>MentalWays מנגישה מידע מותאם אישית בצורה קלה ונוחה מלווה בקבלת שירות ושומרת על רצף ומעקב טיפולי עבור המתמודדים.ות ובני משפחתם</Text>
				<CheckBox
					center
					title="שימוש במידע על אחריות המשתמש בלבד"
					checked={isTermsAgreed}
					onPress={() => setIsTermsAgreed(prev => !prev)}
				/>
				<Button
					title="להמשיך בשיחה"
					buttonStyle={{
						backgroundColor: 'rgba(111, 202, 186, 1)',
						borderRadius: 5,
					}}
					titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
					containerStyle={{
						marginHorizontal: 50,
						height: 50,
						width: 200,
						marginVertical: 10,
					}}
					onPress={navigateToChat}
				/>
			</View>
		</Card>
		</View>
		<AlertComponent isVisible={isAlertVisible} onClose={closeAlert} />
  </View>
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#6b9080'
	},
	button: {
		width: 200,
		height: 200,
		borderRadius: 100,
		fontSize: 50,
		backgroundColor: '#6b9080',
		alignSelf: 'center'
	}, buttonTitle: {
		textAlign: 'center',
		writingDirection: 'rtl'
	}
});

export default HomeScreen;