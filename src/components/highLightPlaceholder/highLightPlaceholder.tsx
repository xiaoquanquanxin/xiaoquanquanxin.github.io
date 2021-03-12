import React from "react";
import style from './highLightPlaceholder.module.less';

//	高亮的占位符
export const highLightPlaceholder = () => <pre className={style.highLightPlaceholder}
											   style={{color: "white", textIndent: '2em'}}>点击加载代码</pre>;



