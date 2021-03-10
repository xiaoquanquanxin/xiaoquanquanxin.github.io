export interface SliderDataModel {
	children: Array<SliderDataModel>;
	link: string;
	name: string;
	primary: boolean;
	itemIndexes: boolean;
	indexes: string;
	json: string;
}

export interface SliderListDataModel extends Array<SliderDataModel> {
	[key: number]: SliderDataModel;
}
