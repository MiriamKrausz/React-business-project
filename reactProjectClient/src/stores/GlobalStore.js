import { observable, makeObservable, action, computed } from 'mobx';

class GlobalStore {
    isLogin = false;
    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
        })
    }
    setIsLogin = (x) => {
        this.isLogin = x;
    }
}

export default new GlobalStore();