import React, {useEffect} from "react";
import {SliderDataModel} from "@models/slider";
import {request} from "@api/request";

//	路由守卫组件
export function RoutingGuard({BasicPage, routerItem}: { BasicPage: Function, routerItem: SliderDataModel, }) {
	useEffect(() => {
		const {json: url} = routerItem;
		if (!url) {
			return;
		}
		const res = request({url});
		res.then(v => {
			console.log(v);
		});
	}, []);
	return (
		<BasicPage routerItem={routerItem}/>
	)
}
