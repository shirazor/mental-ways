import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-elements';
import ChatListItem from './ChatListItem';

const shit = [
	{
		id: '1',
		title: 'שיחה1'
	},
	{
		id: '2',
		title: 'שיחה2'
	},
	{
		id: '3',
		title: 'שיחה3'
	},
	{
		id: '4',
		title: 'שיחה4'
	},
	{
		id: '5',
		title: 'שיחה5'
	},
	{
		id: '6',
		title: 'שיחה6'
	},
	{
		id: '7',
		title: 'שיחה7'
	},
	{
		id: '8',
		title: 'שיחה8'
	},
	{
		id: '9',
		title: 'שיחה9'
	},
	{
		id: '10',
		title: 'שיחה10'
	},
	{
		id: '11',
		title: 'שיחה11'
	},
]

const ManageScreen = ({ navigation }) => {
	const renderChatItem = ({ item }) => <ChatListItem
		item={item}
		onPress={() => navigateToCreateConversation(item.id)}
	/>;

	const navigateToCreateConversation = (id) => {
		navigation.navigate('צור שיחות', { id });
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>עריכת שיחות</Text>
				<FAB
					onPress={() => navigateToCreateConversation(null)}
					size='small'
					icon={{
						name: 'add',
						color: 'white'
					}}
					color='#6b9080' />
			</View>
			<FlatList
				style={styles.flatList}
				data={shit}
				renderItem={renderChatItem}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#eee6dF',
		alignItems: 'center'
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '85%'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 26
	},
	flatList: {
		marginTop: 10,
		height: '100%',
		width: '85%',
		gap: 2
	}
});

export default ManageScreen;