import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const QuickReplies = ({ currentMessage, onSend }) => <View style={styles.container}>
	{currentMessage.quickReplies.map(quickReply => <TouchableOpacity
		style={styles.quickReplyButton}
		key={quickReply.value}
		onPress={() => onSend([{ text: quickReply.value, user: { _id: 2 } }])}
	>
		<Text style={styles.buttonText}>{quickReply.value}</Text>
	</TouchableOpacity>)}
</View>;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxHeight: 200,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	quickReplyButton: {
		width: 130,
		height: '30%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		backgroundColor: '#6b9080'
	},
	buttonText: {
		fontSize: 12,
		color: 'white'
	}
});

export default QuickReplies;