import {sliderListData, sliderData} from "@models/slider";

//  计算索引
export function computedItemIndexes(sliderListData: sliderListData, level: number = 0, currentIndex: number = 0) {
    if (!sliderListData || !sliderListData.length) {
        return;
    }
    sliderListData.forEach((sliderData: sliderData,) => {
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
}
