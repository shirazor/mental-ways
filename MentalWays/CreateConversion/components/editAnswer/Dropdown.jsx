import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text } from "react-native";

const Dropdown = ({ options, onSelect }) => {
    const [visible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const toggleModal = () => {
      setVisible(!visible);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      onSelect(option);
      toggleModal();
    };
  
    return (
      <View>
        <TouchableOpacity onPress={toggleModal}>
          <Text>{selectedOption ? selectedOption.label : 'Select an option'}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={visible}
          onRequestClose={toggleModal}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default Dropdown;