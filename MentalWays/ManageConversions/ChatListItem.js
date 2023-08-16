import { Text } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";

const ChatListItem = ({ item, onPress }) => {
	return <TouchableOpacity onPress={onPress} style={styles.item}>
		<Text style={styles.text}>{item.title}</Text>
	</TouchableOpacity>;
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#d9d9d9',
		justifyContent: 'center',
		padding: 10,
		height: 80,
		marginTop: 15
	},
	text: {
		fontSize: 20,
		marginLeft: 20
	}
});

export default ChatListItem;