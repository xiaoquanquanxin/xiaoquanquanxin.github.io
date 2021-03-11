import React, {useEffect, useRef, useState} from "react"
import {ArticleContentDataModule, ArticleDataModule, IndexItemModule} from "@models/article";
import {highLightPlaceholder} from "@components/highLightPlaceholder/highLightPlaceholder";
import Highlight from 'react-highlight';
import style from "@css/content.module.less";

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

//	页面数据
export function BasicPage({articleData}: { articleData: ArticleDataModule }) {
	const {title, description, sectionList, indexList} = articleData;
	const $content = window.document.getElementById('content');
	const _list: Array<HTMLElement> = [];
	const [listRef, setlistRef] = useState(_list);
	//	定时器
	const [timer, setTimer] = useState();
	useEffect(() => {

	}, [listRef]);
	useEffect(() => {
		if (!$content) {
			return;
		}
		let timer: any = null;

		function fn(e) {
			if (timer) {
				return;
			}
			timer = setTimeout(() => {
				const {scrollTop} = e.target;
				// console.log(scrollTop);
				// console.log(listRef);
				// listRef.reduce((prev: HTMLElement, current: HTMLElement): HTMLElement => {
					// console.log(prev.offsetTop);
					// return current;
				// });
				timer = null;
			}, 200);
		}

		$content.addEventListener('scroll', fn, false);
		return (() => {
			console.log('注销');
			clearTimeout(timer);
			$content.removeEventListener('scroll', fn, false);
		})
	}, []);
	return (
		<div className={style.content}>
			<h1>{title}</h1>
			<p>{description}</p>
			<IndexList sectionList={sectionList}/>
			<ArticleList sectionList={sectionList}/>
		</div>
	);
}

//	索引列表
function IndexList({sectionList}: { sectionList: ArticleDataModule['sectionList'] }) {
	if (!sectionList || !sectionList.length) {
		return null;
	}
	return (
		<ol className={style.indexList} data-msg='索引'>
			{
				sectionList.map(((indexItemModule: IndexItemModule) => {
					const {title} = indexItemModule;
					return (
						<li className={style.anchorBar} key={title}>
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
function ArticleList({sectionList}: { sectionList: ArticleDataModule['sectionList'] }) {
	if (!sectionList || !sectionList.length) {
		return null;
	}
	return (
		<ol className={style.articleList} data-msg='正文'>
			{
				sectionList.map((articleContentData: ArticleContentDataModule, index: number) => {
					return (
						<SectionData articleContentData={articleContentData}
									 key={articleContentData.title}/>
					)
				})
			}
		</ol>
	)
}

//	文章数据
function SectionData({articleContentData, itemRef}: { articleContentData: ArticleContentDataModule, itemRef?: any }) {
	const {content, title, code, language, __html} = articleContentData;
	const [CodeComponent, setCodeComponent] = useState(code ? highLightPlaceholder : <></>);
	useEffect(() => {
		setTimeout(() => {
			// setCodeComponent(<Highlight language={language || "javascript"}>{code}</Highlight>);
		}, 0);
	}, [code]);
	return (
		<li>
			<h2>
				<div id={title} className={style.anchorTitle}/>
				<span>{title}</span>
			</h2>
			<div>{content}</div>
			<div dangerouslySetInnerHTML={{__html}}/>
			<div ref={itemRef} className='sectionItem'>{CodeComponent}</div>
		</li>
	)
}

