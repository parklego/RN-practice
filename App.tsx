import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {createRandomPerson} from './src/data/createRandomPerson';

const person = createRandomPerson();

const onPress = () => {
  Alert.alert('home pressed.', 'message');
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{JSON.stringify(person, null, 2)}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableHighlight onPress={onPress}>
          <Text>TochableHightlight</Text>
        </TouchableHighlight>
        <Button title="button" onPress={onPress} />
        <TextInput
          placeholder="type something"
          onFocus={() => console.log('focused')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
