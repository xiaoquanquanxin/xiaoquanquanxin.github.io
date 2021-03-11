import React, {useEffect, useRef, useState} from "react";
import {observer} from "mobx-react";
import style from "./content.module.less";
import {SliderDataModel} from "@models/slider"
import {Route, Switch, Redirect} from 'react-router';
// import {HomePage} from "@pages/homePage/homePage"
import {BasicPage} from "@pages/basicPage/basicPage"
import {RoutingGuard} from "@components/routingGuard/routingGuard";
import {Store} from "@store/index";

//  菜单组件
export const Content = observer(({store}: { store: Store }) => {
	const routerListData = store.getRouterListData;
	// const [timer, setTimer] = useState(null);
	const contentRef = useRef(null);
	useEffect(() => {
		const {current} = contentRef;
		let timer: any = null;
		const fn = (e) => {
			if (timer) {
				return;
			}
			timer = setTimeout(() => {
				const {scrollTop} = e.target;
				store.setScrollTop(scrollTop);
				timer = null;
			}, 500);
		};
		(current as any).addEventListener('scroll', fn, false);
		return (() => {
			(current as any).removeEventListener('scroll', fn, false);
		});
	}, []);
	return (
		<main className={style.content} ref={contentRef}>
			<Switch>
				{
					routerListData.map((routerItem: SliderDataModel) => {
						return (
							<Route key={routerItem.link}
								   path={routerItem.link}
							>
								<RoutingGuard BasicPage={BasicPage} routerItem={routerItem} store={store}/>
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

