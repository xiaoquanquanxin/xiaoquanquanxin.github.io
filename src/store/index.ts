import {computed, action, makeAutoObservable} from "mobx";
import {sliderData} from "@components/global/slider/slider";

export class Store {
    constructor() {
        makeAutoObservable(this)
    }

    //  菜单数据
    private sliderData: Array<sliderData> = [];

    @computed get getSliderData() {
        console.log('读取');
        return this.sliderData;
    }

    @action
    setSliderData = (sliderData: Array<sliderData>) => {
        this.sliderData = sliderData;
    };
}


const store = new Store();
export {
    store,
}
