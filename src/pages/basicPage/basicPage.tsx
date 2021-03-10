import React, {useEffect, useRef, useState} from "react"
import {ArticleContentDataModule, ArticleDataModule, IndexItemModule} from "@models/article";
import {highLightPlaceholder} from "@components/highLightPlaceholder/highLightPlaceholder";
import Highlight from 'react-highlight';
import style from "@css/content.module.less";

//	页面数据
export function BasicPage({articleData}: { articleData: ArticleDataModule }) {
	const {title, description, sectionList, indexList} = articleData;
	return (
		<div className={style.content}>
			<h1>{title}</h1>
			<p>{description}</p>
			<ol className={style.indexList} data-msg='索引'>
				{
					indexList && indexList.length && indexList.map(((indexItemModule: IndexItemModule) => {
						const {title} = indexItemModule;
						return (
							<li className={style.anchorBar} key={title} onClick={() => {
								const $title = document.getElementById(title);
								$title && $title.scrollIntoView();
							}}>{title}</li>
						)
					}))
				}
			</ol>
			<ol className={style.articleList} data-msg='正文'>
				{
					sectionList && sectionList.length && sectionList.map((articleContentData: ArticleContentDataModule, index: number) => {
						return (
							<SectionData articleContentData={articleContentData} key={articleContentData.title}/>
						)
					})
				}
			</ol>
		</div>
	);
}

//	文章数据
function SectionData({articleContentData}: { articleContentData: ArticleContentDataModule }) {
	const {content, title, code, language, __html} = articleContentData;
	const [CodeComponent, setCodeComponent] = useState(code ? highLightPlaceholder : <></>);
	useEffect(() => {
		if (code) {
			setTimeout(() => {
				setCodeComponent(<Highlight language={language || "javascript"}>{code}</Highlight>);
			}, 0);
		}
	}, []);
	return (
		<li>
			<h2>
				<div id={title} className={style.anchorTitle}/>
				<span>{title}</span>
			</h2>
			<div>{content}</div>
			<div dangerouslySetInnerHTML={{__html}}/>
			{CodeComponent}
		</li>
	)
}

