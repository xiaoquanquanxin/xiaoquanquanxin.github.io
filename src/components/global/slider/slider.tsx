import React, {useEffect, useState} from "react";
import {request} from "@api/request";
import {Link} from "react-router-dom";
import style from "./slider.module.less";
import {observer} from "mobx-react";
import {computedItemIndexes} from "@utils/slider";
import {sliderData, sliderListData} from "@models/slider";

const url = '/api/category.json';


//  菜单组件
export const Slider = observer(({store}) => {
    useEffect(() => {
        const res = request({url});
        res.then(v => {
            const {children} = v;
            computedItemIndexes(children);
            store.setSliderData(children);
        });
    }, []);
    return (
        <nav className={style.slider}>
            <SliderUl data={store.sliderData}/>
        </nav>
    )
});

// 菜单列表
function SliderUl({data}: { data: sliderListData }) {
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
