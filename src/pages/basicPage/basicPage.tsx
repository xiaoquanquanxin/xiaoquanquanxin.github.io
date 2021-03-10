import React, {useEffect, useState} from "react"
import {ArticleContentDataModule, ArticleDataModule} from "@models/article";
import {highLightPlaceholder} from "@components/highLightPlaceholder/highLightPlaceholder";
import Highlight from 'react-highlight';
import style from "@css/content.module.less";

//	页面数据
export function BasicPage({articleData}: { articleData: ArticleDataModule }) {
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
	const {content, title, code, language, __html} = articleContentData;
	const [CodeComponent, setCodeComponent] = useState(code ? highLightPlaceholder : <></>);
	code && console.log('文章数据');
	useEffect(() => {
		if (code) {
			setTimeout(() => {
				setCodeComponent(<Highlight language={language || "javascript"}>{code}</Highlight>);
			}, 0);
		}
	}, []);
	return (
		<div>
			<h2>{title}</h2>
			<div>{content}</div>
			<div dangerouslySetInnerHTML={{__html}}/>
			{CodeComponent}
		</div>
	)
}

