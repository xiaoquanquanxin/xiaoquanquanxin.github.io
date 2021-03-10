import React from "react"
import style from "@css/content.module.less"
import {ArticleDataModule} from "@models/article";

export function BasicPage({articleData}: { articleData: ArticleDataModule }) {
	// console.log(JSON.parse(JSON.stringify(articleData)));
	return (
		<div className={style.content}>
			{/*{props}*/}
			<h1>{articleData.title}</h1>
			<p>{articleData.description}</p>
		</div>
	);
}
