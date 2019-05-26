import { action, observable } from 'mobx';
export class TestStore {
  @observable counter: number = 0;

  @action
  increase() {
    this.counter += 1;
  }

  @action
  reset() {
    this.counter = 0;
  }
}