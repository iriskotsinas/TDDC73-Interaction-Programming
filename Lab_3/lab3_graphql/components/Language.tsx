import React, {ReactText} from 'react';
import {Picker} from '@react-native-community/picker';
import {StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Language {
  handleChange: (codeLanguage: ReactText) => void;
  language: ReactText | undefined;
}

const Language = ({handleChange, language}: Language) => {
  return (
    <TouchableOpacity>
      <Picker
        style={styles.color}
        selectedValue={language}
        onValueChange={(itemValue, itemIndex) => {
          handleChange(itemValue);
        }}
        mode={'dialog'}>
        <Picker.Item label="All languages" value="All" />
        <Picker.Item label="Python" value="Python" />
        <Picker.Item label="C++" value="C++" />
        <Picker.Item label="C#" value="C#" />
        <Picker.Item label="TypeScript" value="TypeScript" />
        <Picker.Item label="JavaScript" value="JavaScript" />
        <Picker.Item label="CSS" value="CSS" />
        <Picker.Item label="PHP" value="PHP" />
        <Picker.Item label="Swift" value="Swift" />
      </Picker>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  color: {
    color: 'white',
    marginBottom: 0,
    borderColor: 'black',
  },
});

export default Language;
