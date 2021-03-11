import React, {useEffect, useRef, useState} from "react"
import {ArticleContentDataModule, ArticleDataModule, IndexItemModule} from "@models/article";
import {highLightPlaceholder} from "@components/highLightPlaceholder/highLightPlaceholder";
import Highlight from 'react-highlight';
import style from "@css/content.module.less";
import {Store} from "@store/index";
import {observer} from "mobx-react";

export function BasicPage1({articleData}: { articleData: ArticleDataModule }) {
	const list: Array<number> = [];
	const [aaa, setAaa] = useState(list);
	useEffect(() => {
		function fn() {
			setAaa([Math.random()]);
		}

		setTimeout(() => {
			console.log(aaa);
			fn();
		}, 333);
	}, [aaa]);

	return (
		<div>
			{aaa[0]}
		</div>
	)
}

//	没有数据的页面
export function BasicNoDataPage({articleData}: { articleData: { description: string } }) {
	const {description} = articleData;
	return (
		<div className={style.content}>
			<p>{description}</p>
		</div>
	)
}

//	页面数据
export const BasicPage = (({articleData, store}: { articleData: ArticleDataModule, store: Store }) => {
	const {title, description, sectionList, indexList} = articleData;
	return (
		<div className={style.content}>
			<h1>{title}</h1>
			<p>{description}</p>
			<IndexList sectionList={sectionList}/>
			<ArticleList sectionList={sectionList} store={store}/>
		</div>
	);
});

//	索引列表
const IndexList = ({sectionList}: { sectionList: ArticleDataModule['sectionList'] }) => {
	if (!sectionList || !sectionList.length) {
		return null;
	}
	return (
		<ol className={style.indexList} data-msg='索引'>
			{
				sectionList.map(((indexItemModule: IndexItemModule) => {
					const {title} = indexItemModule;
					return (
						<li className={`${style.anchorBar} cursor`} key={title}>
								<span onClick={() => {
									const $title = document.getElementById(title);
									$title && $title.scrollIntoView();
								}}>{title}</span></li>
					)
				}))
			}
		</ol>
	)
}

//	章节列表
const ArticleList = (({sectionList, store}: { sectionList: ArticleDataModule['sectionList'], store: Store }) => {
	if (!sectionList || !sectionList.length) {
		return null;
	}
	return (
		<ol className={style.articleList} data-msg='正文'>
			{
				sectionList.map((articleContentData: ArticleContentDataModule, index: number) => {
					return (
						<SectionData articleContentData={articleContentData}
									 store={store}
									 key={articleContentData.title}/>
					)
				})
			}
		</ol>
	)
})

//	文章数据
const SectionData = observer(({articleContentData, store}: { articleContentData: ArticleContentDataModule, store: Store }) => {
	const {content, title, code, language, __html} = articleContentData;
	const [CodeComponent, setCodeComponent] = useState(code ? highLightPlaceholder : <></>);
	const item: any = useRef(null);
	useEffect(() => {
		const {offsetTop} = item.current;
		const {getScrollBottom: scrollBottom} = store;
		if (scrollBottom > offsetTop) {
			console.log(scrollBottom, offsetTop);
			setCodeComponent(<Highlight language={language || "javascript"}>{code}</Highlight>);
		}
	}, [store.getScrollTop]);
	return (
		<li>
			<h2>
				<div id={title} className={style.anchorTitle}/>
				<span>{title}</span>
			</h2>
			<div>{content}</div>
			<div dangerouslySetInnerHTML={{__html}}/>
			<div ref={item} className='sectionItem'>{CodeComponent}</div>
		</li>
	)
});
