import { action, observable } from 'mobx';

export default class HomeStore {
    @observable numbers = 0;
    @observable numbers2 = 0;
    @observable numbers3 = 0;

    @action reset = () => {
        this.numbers = 0;
    }

    @action increment = () => {
        this.numbers += 1;
    }

    @action decrement = () => {
        this.numbers -= 1;
    }

    @action reset2 = () => {
        this.numbers2 = 0;
    }

    @action increment2 = () => {
        this.numbers2 += 1;
    }

    @action decrement2 = () => {
        this.numbers2 -= 1;
    }

    @action somar = () => {
        this.numbers3 = this.numbers + this.numbers2;
    }

    @action multiplicar = () => {
        this.numbers3 = this.numbers * this.numbers2;
    }

}
const homeStore = new HomeStore();
export { homeStore };