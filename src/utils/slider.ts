import {SliderDataModel, SliderListDataModel} from "@models/slider";

//  计算成菜单数据-计算索引
export function computedItemIndexes(sliderListData: SliderListDataModel, level: number = 0, currentIndex: number = 0): SliderListDataModel {
    if (!sliderListData || !sliderListData.length) {
        return sliderListData;
    }
    sliderListData.forEach((sliderData: SliderDataModel) => {
        if (sliderData.itemIndexes) {
            //  如果是主标题
            if (sliderData.primary) {
                sliderData.indexes = `${++level}.`;
            } else {
                //  如果是内容
                sliderData.indexes = `${level}.${++currentIndex}.`;
            }
        }
        computedItemIndexes(sliderData.children, level, currentIndex);
    });
    return sliderListData;
}

//  计算成路由数据
export function computedRouteItem(sliderListData: SliderListDataModel): SliderListDataModel {
    const list: SliderListDataModel = [];
    if (!sliderListData || !sliderListData.length) {
        return list;
    }
    sliderListData.forEach((sliderData: SliderDataModel) => {
        if (sliderData.link) {
            list.push(sliderData);
        }
        computedRouteItem(sliderData.children);
    });
    return list;
}
