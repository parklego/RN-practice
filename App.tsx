import React from 'react';
import {
  Platform,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import {DefaultTheme} from 'react-native-paper';

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
          {`현재 OS는 ${Platform.OS}이며, 실행된 폰의 크기는 ${
            Dimensions.get('window').width
          } x ${Dimensions.get('window').height}입니다.`}
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
    padding: Platform.select({
      ios: 10,
      android: 20,
    }),
  },
});
