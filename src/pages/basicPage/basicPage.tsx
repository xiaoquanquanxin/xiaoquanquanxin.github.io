import React from "react"
import style from "@css/content.module.less"
import {ArticleContentDataModule, ArticleDataModule} from "@models/article";
import Highlight from 'react-highlight'

//	页面数据
export function BasicPage({articleData}: { articleData: ArticleDataModule }) {
	// console.log(JSON.parse(JSON.stringify(articleData)));
	const {title, description, sectionList} = articleData;
	return (
		<div className={style.content}>
			<h1>{title}</h1>
			<p>{description}</p>
			{
				sectionList && sectionList.length && sectionList.map((articleContentData: ArticleContentDataModule, index: number) => {
					return (
						<SectionData articleContentData={articleContentData} key={index}/>
					)
				})
			}
		</div>
	);
}

//	文章数据
function SectionData({articleContentData}: { articleContentData: ArticleContentDataModule }) {
	const {content, title, code} = articleContentData;
	console.log(title);
	return (
		<div>
			<h2>{title}</h2>
			<div>{content}</div>
			{
				code && (<Highlight language="javascript">{code}</Highlight>)
			}
		</div>
	)
}

