export interface sliderData {
    children: Array<sliderData>;
    link: string;
    name: string;
    primary: boolean;
    itemIndexes: boolean;
    indexes: string;
}

export interface sliderListData extends Array<sliderData> {
    [key: number]: sliderData;
}
