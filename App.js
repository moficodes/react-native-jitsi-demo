/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, NativeModules} from 'react-native';

const App = () => {
  const activityStarter = NativeModules.ActivityStarter;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        onPress={() =>
          activityStarter.navigateToExample('https://chat.moficodes.dev')
        }>
        Hello World
      </Text>
    </View>
  );
};

export default App;
