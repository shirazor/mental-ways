import ChatScreen from '../ChatScreen';
import HomeScreen from '../HomeScreen';
import ManagerScreen from '../ManagerScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawer = () =>
	<Drawer.Navigator>
		<Drawer.Screen
			name="דף הבית"
			component={HomeScreen}
		/>
		<Drawer.Screen
			name="צ'אט"
			component={ChatScreen}
		/>
		<Drawer.Screen
			name="ניהול שיחות"
			component={ManagerScreen}
		/>
	</Drawer.Navigator>;

export default CustomDrawer;