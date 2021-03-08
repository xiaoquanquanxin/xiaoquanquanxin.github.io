import React, {useEffect, useState} from "react";
import {request} from "@api/request";
import {Link} from "react-router-dom";
import style from "./slider.module.less";

const url = '/api/category.json';

interface sliderData {
    children: Array<sliderData>;
    link: string;
    name: string;
    primary: boolean;
    itemIndexes: boolean;
    indexes: string;
}


//  计算索引
function computedItemIndexes(sliderListData: Array<sliderData>, level: number = 0, currentIndex: number = 0) {
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

export function Slider() {
    const [sliderData, setSliderData] = useState([]);
    useEffect(() => {
        const res = request({url});
        res.then(v => {
            const {children} = v;
            computedItemIndexes(children);
            // console.log(children);
            setSliderData(children);
        });
    }, []);
    return (
        <nav className={style.slider}>
            <SliderUl data={sliderData}/>
        </nav>
    )
}


// 菜单列表
function SliderUl({data}: { data: Array<sliderData> }) {
    if (!data || !data.length) {
        return null;
    }
    return (
        <ul className={style.SliderUl}>
            {data.map(({link, name, primary, indexes, children}: sliderData, index: number) => {
                return (
                    <li key={index}>
                        {link && <Link to={link}>
                            <span className={style.link}>
                                {indexes && <b>{indexes}</b>}&nbsp;
                                {name}
                            </span>
                        </Link>}
                        {primary && <div className={style.primary}>
                            {indexes && <b>{indexes}</b>}&nbsp;
                            {name}
                        </div>}
                        <SliderUl data={children}/>
                    </li>
                )
            })}
        </ul>
    )
}

