import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';

const routeConfig = {
  Home: {
    screen: HomeScreen,
    path: 'home',
    navigationOptions: {
      title: 'Home',
    },
  },
};

const navigatorConfig = {
  initialRouteName: 'Home',
  gesturesEnabled: true,
  statusBarStyle: 'light-content',
  navigationOptions: {
    headerStyle: {
      headerBackTitle: null,
      backgroundColor: 'rgb(0,0,0)',
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
  },
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

class RootNavigator extends React.Component<IProps> {
  private static router = RootStackNavigator.router;

  public render() {
    return <RootStackNavigator navigation={this.props.navigation} />;
  }
}

export default RootNavigator;
