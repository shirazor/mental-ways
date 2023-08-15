import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const onSend = newMessages => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const quickReplies = options.map(option => ({
      title: option,
      value: option,
    }));

    const newMessage = {
      _id: Math.random().toString(),
      text: newMessages[0].text,
      createdAt: new Date(),
      user: newMessages[0].user,
      quickReplies,
    };

    setMessages(prevMessages =>
      GiftedChat.append(prevMessages, [newMessage])
    );
  };

  const renderQuickReplies = props => {
    const { currentMessage } = props;

    if (currentMessage.quickReplies) {
      return currentMessage.quickReplies.map(reply => (
        <Button
          key={reply.value}
          title={reply.title}
          onPress={() => onQuickReplyPress(reply.value)}
        />
      ));
    }

    return null;
  };

  const onQuickReplyPress = value => {
    const message = {
      _id: Math.random().toString(),
      text: value,
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    };

    setMessages(prevMessages => GiftedChat.append(prevMessages, [message]));
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
        renderQuickReplies={renderQuickReplies}
      />
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="height" />}
    </View>
  );
};

export default ChatScreen;