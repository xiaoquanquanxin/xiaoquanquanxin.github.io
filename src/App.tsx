import React, {useEffect, useRef} from "react";
import './App.css';
import {GithubFork} from "@components/global/gitubFork/gitubFork";
import {ES6} from "@pages/ES6";


function App() {
    const button = useRef(null);
    useEffect(() => {
        const {current} = button;
        console.log(current);
    }, []);
    return (
        <div className="App" ref={button}>
            <h2>我的个人博客</h2>
            <GithubFork/>
            <ES6/>
        </div>
    );
}

function clickHandler1() {
    console.log('clickHandler1');
}

function clickHandler2() {
    console.log('clickHandler2');
}

export default App;
