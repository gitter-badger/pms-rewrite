import { observable } from 'mobx';

class Store {
  @observable title: string;
  constructor() {
    this.title =  "The title";
  }
};

const store = new Store();
export default store;
