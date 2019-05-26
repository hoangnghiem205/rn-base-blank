import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { inject, observer } from 'mobx-react';
import { TestStore } from '../../stores';
import I18n from '../../language';

export interface IHomeProps {
  navigation: any;
  testStore: TestStore
}

export interface IHomeState {
}

@inject('testStore')
@observer
export default class HomeScreen extends React.Component<IHomeProps, IHomeState> {

  counterIncreaseInterval;

  constructor(props: IHomeProps) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.counterIncreaseInterval = setInterval(() => {
      this.props.testStore.increase()
    }, 1000);
  }

  componentWillUnmount() {
    this.props.testStore.reset();
    if (this.counterIncreaseInterval) {
      clearInterval(this.counterIncreaseInterval);
      this.counterIncreaseInterval = null;
    }
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{I18n.t('welcome')}</Text>
      </View>
    );
  }
}
