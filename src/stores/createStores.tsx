import { TestStore } from './test.store';

export function createStores() {
  const testStore = new TestStore();
  return {
    testStore,
  };
}