import React, {useEffect} from "react";
import {SliderDataModel} from "@models/slider";
import {request} from "@api/request";
import {Store} from "@store/index";
import {observer} from "mobx-react";

//	路由守卫组件
export const RoutingGuard = observer((
	{BasicPage, routerItem, store}: { BasicPage: Function, routerItem: SliderDataModel, store: Store }) => {
	const {json: url} = routerItem;
	const articleData = store.getArticleData[url];
	useEffect(() => {
		if (articleData) {
			store.setLoading(false);
			return;
		}
		if (!url) {
			store.setLoading(false);
			return;
		}
		store.setLoading(true);
		const res = request({url, data: {isLoading: true, store,}});
		res.then(v => {
			store.setLoading(false);
			store.setArticleData(url, v);
		});
	}, [url]);
	//	如果有数据了
	if (articleData) {
		return (
			<BasicPage articleData={articleData}/>
		);
	}
	return (
		<BasicPage articleData={{description: '暂无数据'}}/>
	)
});
