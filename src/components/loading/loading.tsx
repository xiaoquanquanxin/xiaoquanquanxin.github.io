import React from "react"
import style from "./loading.module.less";
import {observer} from "mobx-react"
import {Store} from "@store/index";

export const Loading = observer(({store}: { store: Store }) => {
	// console.log(store.getLoading);
	return (
		<div className={style.loadingContent} style={{display: store.getLoading ? 'block' : 'none'}}>
			<div className={style.loadingText}>
				<div className={style.spin}/>
				<br/>
				<span>Loading...</span>
			</div>
		</div>
	)
});
