import ChatScreen from '../ChatScreen';
import TestScreen from '../TestScreen';
import ManagerScreen from '../ManagerScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomStack = () =>
	<Drawer.Navigator>
		<Drawer.Screen
			name="Test"
			component={TestScreen}
		/>
		<Drawer.Screen
			name="Chat"
			component={ChatScreen}
		/>
		<Drawer.Screen
			name="Manager"
			component={ManagerScreen}
		/>
	</Drawer.Navigator>;

export default CustomStack;