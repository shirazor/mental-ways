import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const conversationFlow = [
    {
      question: "What's your favorite color?",
      answers: ["Red", "Blue", "Green"],
    },
    {
      question: "How old are you?",
      answers: ["Under 18", "18-30", "31+"],
    },
    // Add more questions here
  ];

  const conversationMock = {
    _id: 1,
    title: 'hello',
    initialStep: stepOne
  };

  const stepOne = {
    _id: 1,
    question: "ask next questio about:",
    answers: [
        {
            value: "amit michles",
            nextStep: steptwo
        },
        {
            value: "or harush",
            nextStep: stepThree
        }
    ]
  }

  const steptwo = {
    _id: 2,
    question: "amit favorite food is",
    answers: [
        {
            value: "hamburger",
            nextStep: stepFour
        },
        {
            value: "pizza",
            nextStep: stepFour
        },
        {
            value: "back to first question",
            nextStep: stepOne
        }
    ]
  }

  const stepThree = {
    _id: 3,
    question: "ot harush lives in",
    answers: [
        {
            value: "raanana",
            nextStep: stepFour
        },
        {
            value: "eilat",
            nextStep: stepFour
        },
        {
            value: "back to first question",
            nextStep: stepOne
        }
    ]
  }

  const stepFour = {
    
  }


  const botUser = { _id: 2, name: 'Chatbot' };
  const [currentQuestionIndex, setIt] = useState(0);

  const onSend = newMessages => {
    const userMessage = newMessages[0].text;
    const currentQuestion = conversationFlow[currentQuestionIndex];
    
    const userResponseMessage = {
      _id: Math.random().toString(),
      text: userMessage,
      createdAt: new Date(),
      user: newMessages[0].user,
    };

    setMessages(prevMessages =>
      GiftedChat.append(prevMessages, [userResponseMessage])
    );

    if (currentQuestion) {
      const nextQuestionMessage = {
        _id: Math.random().toString(),
        text: currentQuestion.question,
        createdAt: new Date(),
        user: botUser,
        quickReplies: currentQuestion.answers.map(answer => ({
          title: answer,
          value: answer,
        })),
      };

      setMessages(prevMessages =>
        GiftedChat.append(prevMessages, [nextQuestionMessage])
      );

      setIt(x => x +1);
    }
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
    onSend([{ text: value, user: { _id: 1 } }]);
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