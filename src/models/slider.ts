export interface sliderDataModel {
    children: Array<sliderDataModel>;
    link: string;
    name: string;
    primary: boolean;
    itemIndexes: boolean;
    indexes: string;
}

export interface sliderListDataModel extends Array<sliderDataModel> {
    [key: number]: sliderDataModel;
}
