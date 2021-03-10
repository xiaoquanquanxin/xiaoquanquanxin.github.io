import React from "react"
import style from "./loading.module.less";
import {observer} from "mobx-react"

export const Loading = observer(({store}) => {
	console.log(store.loading);
	return (
		<div className={style.loadingContent} style={{display: store.loading ? 'block' : 'none'}}>
			<div className={style.loadingText}>
				<div className={style.spin}></div>
				<br/>
				<span>Loading...</span>
			</div>
		</div>
	)
});
