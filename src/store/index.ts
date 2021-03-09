import {computed, action, makeAutoObservable} from "mobx";
import {SliderDataModel, SliderListDataModel} from "@models/slider";

export class Store {
    constructor() {
        makeAutoObservable(this)
    }

    //  菜单数据
    private sliderData: Array<SliderDataModel> = [];

    @computed get getSliderData() {
        console.log('读取');
        return this.sliderData;
    }

    @action
    setSliderListData = (sliderData: SliderListDataModel) => {
        this.sliderData = sliderData;
    };
}


const store = new Store();
export {
    store,
}
