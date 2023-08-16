import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-elements';
import ChatListItem from './ChatListItem';

const shit = [
	{
		id: 'shit',
		title: 'shit'
	},
	{
		id: 'shit2',
		title: 'shit'
	},
	{
		id: 'shit3',
		title: 'shit'
	},
	{
		id: 'shit4',
		title: 'shit'
	},
	{
		id: 'shit5',
		title: 'shit3dsw'
	},
	{
		id: 'shit6',
		title: 'shit'
	},
	{
		id: 'shit7',
		title: 'shit'
	},
	{
		id: 'שיט',
		title: 'שיט7'
	},
	{
		id: 'shit9',
		title: 'shit'
	},
	{
		id: 'shit10',
		title: 'shit'
	},
	{
		id: 'shit11',
		title: 'shitdaw'
	},
]

const ManageScreen = () => {
	const [selectedItemId, setSelectedItemId] = useState();

	const renderChatItem = ({ item }) => <ChatListItem
		item={item}
		onPress={() => setSelectedItemId(item.id)}
	/>;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>עריכת שיחות</Text>
				<FAB size='small' icon={{ name: 'add', color: 'white' }} color='#6b9080' />
			</View>
			<FlatList
				style={styles.flatList}
				data={shit}
				renderItem={renderChatItem}
				keyExtractor={item => item.id}
				extraData={selectedItemId}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#f0d7c2',
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