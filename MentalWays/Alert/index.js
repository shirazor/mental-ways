import React from 'react';
import { Overlay, Button, Text } from 'react-native-elements';

const Alert= ({ isVisible, onClose }) => {
  return (
    <Overlay isVisible={isVisible} onBackdropPress={onClose}>
      <Text style={{color: 'red', fontSize: '18'}}>אנא אשר קודם את תנאי השימוש</Text>
    </Overlay>
  );
};

export default Alert;