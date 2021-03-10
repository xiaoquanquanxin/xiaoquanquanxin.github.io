import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import style from "./content.module.less";
import {SliderDataModel} from "@models/slider"
import {Route, Switch, Redirect} from 'react-router';
// import {HomePage} from "@pages/homePage/homePage"
import {BasicPage} from "@pages/basicPage/basicPage"
import {RoutingGuard} from "@components/routingGuard/routingGuard";

//  菜单组件
export const Content = observer(({store}) => {
	const routerListData = store.getRouterListData;
	//	console.log(routerListData.length);
	return (
		<main className={style.content}>
			<Switch>
				{
					routerListData.map((routerItem: SliderDataModel) => {
						return (
							<Route key={routerItem.link}
								   path={routerItem.link}
							>
								<RoutingGuard BasicPage={BasicPage} routerItem={routerItem}/>
							</Route>
						)
					})
				}
				{/*<Route path='/index' exact={true} component={HomePage}/>*/}
				{!!routerListData.length && <Redirect from='*' to={routerListData[0].link} exact={true}/>}
			</Switch>
		</main>
	)
});

