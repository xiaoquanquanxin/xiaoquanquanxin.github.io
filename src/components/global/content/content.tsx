import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import style from "./content.module.less";


//  菜单组件
export const Content = observer(({store}) => {
    console.log(JSON.parse(JSON.stringify(store.getSliderData)));
    return (
        <main className={style.content}>
            1221
            {/*{*/}
            {/*    routeList.map((item) => {*/}
            {/*            return <Route*/}
            {/*                {...item}*/}
            {/*            />*/}
            {/*        }*/}
            {/*    )}*/}

        </main>
    )
});

