import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'mobx-react';
import { createStores } from './stores';
import SwitchNavigator from './navigators/SwitchNavigator';
import SplashScreen from 'react-native-splash-screen';

const rootStore = createStores();

export default class App extends React.Component<any, any>{

  componentDidMount() {
    SplashScreen.hide();
  }
  public render() {
    return (
      <Provider {...rootStore}>
        <View style={styles.container}>
          <SwitchNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});
