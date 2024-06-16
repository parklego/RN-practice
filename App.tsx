import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import {DefaultTheme} from 'react-native-paper';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function App(): React.JSX.Element {
  const theme = useTheme();

  return (
    <PaperProvider>
      <SafeAreaView style={[styles.safeAreaView]}>
        <Text style={styles.text}>Hello world!!</Text>
        <Text
          style={{
            backgroundColor: theme.colors.primaryContainer,
          }}>
          Hello React-Native!!
        </Text>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DefaultTheme.colors.primary,
  },
  text: {
    fontSize: 20,
  },
});
