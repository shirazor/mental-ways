import ChatScreen from '../ChatScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from '../TestScreen';
import ManagerScreen from '../ManagerScreen';

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
		<Stack.Screen
			name="Manager"
			component={ManagerScreen}
			options={{
				headerTintColor: 'white',
				headerStyle: { backgroundColor: 'blue' },
			}}
		/>
	</Stack.Navigator>;

export default CustomStack;