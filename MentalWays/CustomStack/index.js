import ChatScreen from '../ChatScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from '../TestScreen';

const Stack = createNativeStackNavigator();

const CustomStack = () =>
	<Stack.Navigator>
		<Stack.Screen
			name="Test"
			component={TestScreen}
			options={{
				headerTintColor: 'white',
				headerStyle: { backgroundColor: 'tomato' },
			}}
		/>
		<Stack.Screen
			name="Chat"
			component={ChatScreen}
			options={{
				headerTintColor: 'white',
				headerStyle: { backgroundColor: 'tomato' },
			}}
		/>
	</Stack.Navigator>;

export default CustomStack;