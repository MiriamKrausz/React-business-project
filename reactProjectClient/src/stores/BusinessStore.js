
import { observable, action,makeObservable } from 'mobx';
class BusinessStore {

data = {};
  constructor() {
    makeObservable(this, {
      data: observable,
      setData: action,
      initData: action,
      initialData: action

    });
  }
  setData = async (details) => {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText);
    if (response.status === 200) {
      this.data = details;
    }
  };

  initData = async (details) => {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText);
    if (response.status === 200) {
      this.data = details;
    }
  };
  initialData = async () => {
    const response = await fetch("http://localhost:8787/businessData");
    const data = await response.json();
    console.log(data);
    this.data = data;
    console.log("data", this.data);
  };
}
export default new BusinessStore();









