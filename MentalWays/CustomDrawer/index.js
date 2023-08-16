import ChatScreen from '../ChatScreen';
import HomeScreen from '../HomeScreen';
import ManageScreen from '../ManageScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CreateConversion from '../ManageScreen/CreateConversion';

const Drawer = createDrawerNavigator();

const CustomDrawer = () =>
	<Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#f0d7c2' } }}>
		<Drawer.Screen
			name="דף הבית"
			component={HomeScreen}
		/>
		<Drawer.Screen
			name="ניהול שיחות"
			component={ManageScreen}
		/>
		<Drawer.Screen
			name="צור שיחות"
			component={CreateConversion}
		/>
	</Drawer.Navigator>;

export default CustomDrawer;