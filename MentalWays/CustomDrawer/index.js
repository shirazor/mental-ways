import ChatScreen from '../ChatScreen';
import HomeScreen from '../HomeScreen';
import ManageScreen from '../ManageConversions';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CreateConversion from '../CreateConversion';

const Drawer = createDrawerNavigator();

const CustomDrawer = () =>
	<Drawer.Navigator
		backBehavior='history'
		screenOptions={{
			headerStyle: {
				backgroundColor: '#f0d7c2'
			}
		}}>
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
			component={ManageScreen}
		/>
		<Drawer.Screen
			name="צור שיחות"
			component={CreateConversion}
		/>
	</Drawer.Navigator>;

export default CustomDrawer;