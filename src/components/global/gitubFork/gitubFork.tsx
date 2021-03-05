import React, {useEffect, useRef} from "react";
import style from "./gitubFork.module.less";
import forkme from '@img/global/forkme.png'

export const GithubFork = () => {
    return (
        <a className={style.githubFork} href="https://github.com/xiaoquanquanxin" target="_blank" rel='noreferrer'>
            <img src={forkme} alt={'https://github.com/xiaoquanquanxin'}/>
        </a>
    )
};





