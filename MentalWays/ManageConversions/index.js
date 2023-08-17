import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-elements';
import ChatListItem from './ChatListItem';
import useConverstionsData from '../conversationsContext'

const ManageScreen = ({ navigation }) => {
	const {conversions} = useConverstionsData();
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
				data={conversions}
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