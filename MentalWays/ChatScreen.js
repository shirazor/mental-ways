import React, { useState, useEffect } from 'react';
import { View, Platform, KeyboardAvoidingView, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { conversationMock } from './conversationMock';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(conversationMock.initialStep);
  const [isFirstStep, setIsFirstStep] = useState(true);
   
  useEffect(() => {
    // Simulate bot sending the first message
    if (!isFirstStep) return;

    initiateStep(currentStep);
    setIsFirstStep(false);
  }, []);

  const initiateStep = step => {
    const nextQuestionMessage = {
        _id: step._id,
        text: step.question,
        createdAt: new Date(),
        user: { _id: 2, name: 'Chatbot' },
        quickReplies: step.answers.map(answer => ({
          title: answer.value,
          value: answer.value,
        })),
      };

      setMessages(prevMessages =>
        GiftedChat.append(prevMessages, [nextQuestionMessage])
      );
  }
  const onSend = newMessages => {
        const userMessage = newMessages[0].text;
    
        const userResponseMessage = {
          _id: Math.random().toString(),
          text: userMessage,
          createdAt: new Date(),
          user: newMessages[0].user,
        };
    
        setMessages(prevMessages =>
          GiftedChat.append(prevMessages, [userResponseMessage])
        );
    
        if (currentStep) {
          const nextAnswer = currentStep.answers.find(
            answer => answer.value === userMessage
          );
    
          if (nextAnswer) {
            const nextStep = nextAnswer.nextStep;
            setCurrentStep(nextStep);
    
            if (nextStep) {
              initiateStep(nextStep);
            }
          }
        }
      };
    
      const renderQuickReplies = ({currentMessage}) => 
        currentMessage.quickReplies ? 
        currentMessage.quickReplies.map(reply => (
            <Button
              key={reply.value}
              title={reply.title}
              onPress={() => onSend([{ text: reply.value, user: { _id: 1 } }])}
            />)) : null;
      
    
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
