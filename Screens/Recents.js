import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Recents = () => {
  return(
    <View style = {styles.container}>
      <Text> This is Recents </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Recents;