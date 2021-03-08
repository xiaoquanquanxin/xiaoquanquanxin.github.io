import React, {useEffect, useRef} from "react";
import style from "./gitubFork.module.less";
import forkme from '@img/global/forkme.png'

const href = 'https://github.com/xiaoquanquanxin';
export const GithubFork = () => {
    return (
        <a className={style.githubFork} href={href} target="_blank" rel='noreferrer'>
            <img src={forkme} alt={href}/>
        </a>
    )
};





