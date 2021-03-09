import {computed, action, makeAutoObservable} from "mobx";
import {SliderDataModel, SliderListDataModel} from "@models/slider";

export class Store {
	constructor() {
		makeAutoObservable(this)
	}

	//  菜单数据
	private sliderListData: Array<SliderDataModel> = [];

	@computed
	get getSliderListData() {
		return this.sliderListData;
	}

	@action
	setSliderListData = (sliderListData: SliderListDataModel) => {
		this.sliderListData = sliderListData;
	};

	//  路由数据
	private routerListData: Array<SliderDataModel> = [];

	@computed
	get getRouterListData() {
		return this.routerListData;
	}

	@action
	setRouterListData = (routerListData: SliderListDataModel) => {
		this.routerListData = routerListData;
	};

	//  路由数据
	private loading: boolean = true;
	@action
	setLoading = (loading: boolean) => {
		this.loading = loading;
	};

}


const store = new Store();
export {
	store,
}
