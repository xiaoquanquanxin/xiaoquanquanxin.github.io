import React, {useEffect, useState} from "react";
import {request} from "@api/request";
import {Link, NavLink} from "react-router-dom";
import style from "./slider.module.less";
import {observer} from "mobx-react";
import {computedItemIndexes, computedRouteItem} from "@utils/slider";
import {SliderDataModel, SliderListDataModel} from "@models/slider";

const url = '/api/data/category.json';

//  菜单组件
export const Slider = observer(({store}) => {
	useEffect(() => {
		const res = request({url});
		res.then(v => {
			//	关闭Loading
			store.setLoading(false);
			const {children} = v;
			//  计算成菜单数据
			const sliderListData = computedItemIndexes(children);
			//  计算成路由数据
			const routerListData = computedRouteItem(children);
			//  赋值
			store.setSliderListData(sliderListData);
			store.setRouterListData(routerListData);
		});
	}, []);
	return (
		<nav className={style.slider}>
			<SliderUl sliderListData={store.sliderListData}/>
		</nav>
	)
});

// 菜单列表
function SliderUl({sliderListData}: { sliderListData: SliderListDataModel }) {
	if (!sliderListData || !sliderListData.length) {
		return null;
	}
	return (
		<ul>
			{sliderListData.map(({link, name, primary, indexes, children}: SliderDataModel, index: number) => {
				return (
					<li key={index}>
						{link && <NavLink to={link} activeClassName={style.active}>
                            <span className={style.link}>
                                {indexes && <b>{indexes}</b>}&nbsp;
								{name}
                            </span>
                        </NavLink>}
						{primary && <div className={style.primary}>
							{indexes && <b>{indexes}</b>}&nbsp;
							{name}
                        </div>}
						<SliderUl sliderListData={children}/>
					</li>
				)
			})}
		</ul>
	)
}
