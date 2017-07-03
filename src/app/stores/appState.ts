import { observable } from 'mobx';

class AppSate {
  @observable private applicationState: string;
  constructor() {
    this.applicationState = "department-infomation";
  }
  setApplication(applicationState){
    this.applicationState = applicationState;
  }
};

const appState = new AppSate();
export default appState;
