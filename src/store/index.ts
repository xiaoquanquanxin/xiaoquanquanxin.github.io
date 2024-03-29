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

	//  loading...
	private loading: boolean = true;

	@computed
	get getLoading() {
		return this.loading;
	}

	//	Loading...的定时器
	private loadingTimeout: number = 0;

	@action
	setLoadingTimeout(loadingTimeout) {
		this.loadingTimeout = loadingTimeout;
	}

	@action
	setLoading = (loading: boolean) => {
		//	如果不在延迟中，或者打开loading，那么无脑设置loading
		if (loading) {
			this.loading = loading;
			clearTimeout(this.loadingTimeout);
			return;
		}
		this.setLoadingTimeout(window.setTimeout(() => {
			if (!loading) {
				this.loading = loading;
				return;
			}
		}, 200));
	};

	//	文章数据
	private articleData: Object = {};

	@computed
	get getArticleData() {
		return this.articleData;
	}

	@action
	setArticleData = (key: string, value: Object) => {
		this.articleData = {
			...this.articleData,
			[key]: value,
		};
	};

	//	定时器
	private timer: number = 0;

	//	滚动的位置
	private scrollTop: number = 0;

	@computed
	get getScrollTop() {
		return this.scrollTop;
	}

	@computed
	get getScrollBottom() {
		return this.scrollTop + window.innerHeight;
	}

	@action
	setScrollTop = (scrollTop) => this.scrollTop = scrollTop;
}

const store = new Store();
export {
	store,
}
