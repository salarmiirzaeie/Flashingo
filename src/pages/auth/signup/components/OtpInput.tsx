import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import React, {useRef, useState} from 'react';

const OtpInput = () => {
  const [inputValues, setInputValues] = useState<string[]>([]);

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const handleKeyPressed = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === 'Backspace') {
      setInputValues([]);
      inputRefs[0]?.current?.focus();
    }
  };
  const handleOnChangeText = async (value: string, index: number) => {
    var temp = inputValues;
    if (value === '') return;
    if (value.length === 1) {
      if (index !== 3) {
        inputRefs[index + 1]?.current?.focus();
      }
      temp[index] = value;
      setInputValues([...temp]);
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 13,
      }}>
      {inputRefs.map((k, index) => (
        <TextInput
          key={index}
          maxLength={1}
          onKeyPress={event => handleKeyPressed(event)}
          value={inputValues[index]}
          selectTextOnFocus={true}
          ref={inputRefs[index]}
          onChangeText={value => {
            handleOnChangeText(value, index);
          }}
          style={{
            borderColor: '#e0e0e0',
            borderWidth: 1,
            borderRadius: 8,
            width: 56,
            height: 56,
            textAlign: 'center',
            fontSize: 24,
            backgroundColor: '#F5F5F5',
          }}
          keyboardType={'number-pad'}
          autoComplete="sms-otp"
          textContentType={'oneTimeCode'}
        />
      ))}
    </View>
  );
};

export default OtpInput;
