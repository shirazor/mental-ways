import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { Avatar, Bubble, GiftedChat, Message, MessageText, Time } from 'react-native-gifted-chat';
import { conversationMock } from '../conversationMock';
import avatarPicture from '../assets/avatar.png';
import QuickReplies from './QuickReplies';

const chatBotUser = {
  _id: 1,
  name: 'Chatbot',
  avatar: avatarPicture
};

const initialMessage = {
  _id: 1,
  text: conversationMock.initialStep.question,
  user: chatBotUser,
  createdAt: new Date(),
  quickReplies: conversationMock.initialStep.answers.map(answer => ({
    title: answer.value,
    value: answer.value,
  }))
};

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([initialMessage]);
  const [currentStep, setCurrentStep] = useState(conversationMock.initialStep);

  const findAnswerInStep = (messageText) => currentStep.answers.find(
    answer => answer.value === messageText
  );

  const onSend = chosenAnswers => {
    const chosenAnswer = chosenAnswers[0];
    const stepAnswer = findAnswerInStep(chosenAnswer.text);

    if (!currentStep.answers || !stepAnswer || messages[0].user.name !== chatBotUser.name) {
      return;
    }

    const nextStep = stepAnswer.nextStep;

    const chosenAnswerAsMessage = {
      _id: Math.random().toString(),
      text: chosenAnswer.text,
      createdAt: new Date(),
      user: chosenAnswer.user,
    }

    const nextStepQuestionAsMessage = {
      _id: Math.random().toString(),
      text: nextStep.question,
      createdAt: new Date(),
      user: chatBotUser,
      quickReplies: nextStep.answers.map(answer => ({
        title: answer.value,
        value: answer.value,
      }))
    };

    setCurrentStep(nextStep);
    setMessages(prevMessages =>
      GiftedChat.append(prevMessages, [nextStepQuestionAsMessage, chosenAnswerAsMessage])
    );
  };

  const renderQuickReplies = ({ currentMessage }) => <QuickReplies
    currentMessage={currentMessage}
    onSend={onSend} />;

  const renderBubble = (props) => <Bubble
    {...props}
    wrapperStyle={{
      left: {
        backgroundColor: '#93c5af',
        borderBottomLeftRadius: 0
      },
      right: {
        backgroundColor: '#d9d9d9',
        borderBottomRightRadius: 0
      }
    }} />

  const renderMessage = (props) => <Message
    {...props}
    containerStyle={{
      left: {
        // backgroundColor: 'red'
      }
    }} />

  const renderMessageText = (props) => <MessageText
    {...props}
    textStyle={{
      left: {
        color: 'white'
      },
      right: {
        color: 'black'
      }
    }} />

  const renderTime = (props) => <Time
    {...props}
    timeTextStyle={{
      left: {
        color: 'white'
      },
      right: {
        color: 'black'
      }
    }} />

  const renderAvatar = (props) => <Avatar
    {...props}
    containerStyle={{
      left: {
        bottom: '40%'
      }
    }}
  />

  const renderInputToolbar = () => null;

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        disableComposer={true}
        messages={messages}
        onSend={onSend}
        user={{
          _id: 2,
        }}
        renderQuickReplies={renderQuickReplies}
        renderMessageText={renderMessageText}
        renderBubble={renderBubble}
        renderTime={renderTime}
        renderAvatar={renderAvatar}
        // renderMessage={renderMessage}
        renderInputToolbar={renderInputToolbar}
      />
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="height" />}
    </View>
  );
};

export default ChatScreen;  
