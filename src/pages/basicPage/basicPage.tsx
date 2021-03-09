import React from "react"
import {SliderDataModel} from "@models/slider"
import style from "@css/content.module.less"

export function BasicPage({routerItem}: { routerItem: SliderDataModel }) {
	return (
		<div className={style.content}>
			{routerItem.name}
		</div>
	);
}