import React, {ReactText} from 'react';
import {Picker} from '@react-native-community/picker';

interface Language {
  handleChange: (codeLanguage: ReactText) => void;
  language: ReactText | undefined;
}

const Language = ({handleChange, language}: Language) => {
  // var languages = "All";
  return (
    <Picker
      selectedValue={language}
      onValueChange={(itemValue, itemIndex) => {
        handleChange(itemValue);
      }}
      mode={'dialog'}>
      <Picker.Item label="All" value="All" />
      <Picker.Item label="Python" value="Python" />
      <Picker.Item label="C++" value="C++" />
      <Picker.Item label="C#" value="C#" />
      <Picker.Item label="TypeScript" value="TypeScript" />
      <Picker.Item label="JavaScript" value="JavaScript" />
      <Picker.Item label="CSS" value="CSS" />
      <Picker.Item label="PHP" value="PHP" />
      <Picker.Item label="Swift" value="Swift" />
    </Picker>
  );
};

export default Language;
