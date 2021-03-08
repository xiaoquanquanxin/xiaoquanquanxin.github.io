import React, {useEffect, useRef} from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    BrowserRouter as Router,
    HashRouter,
} from 'react-router-dom';
import './App.css';
import {GithubFork} from "@components/global/gitubFork/gitubFork";
import {ES6} from "@pages/ES6";
import {Slider} from "@components/global/slider/slider";


function App() {
    const button = useRef(null);
    useEffect(() => {
        const {current} = button;
        console.log(current);
    }, []);
    return (
        <HashRouter>
            <div className="App" ref={button}>
                <GithubFork/>
                <Slider/>

                <Route path="/about">about</Route>
                <Route path="/index">index</Route>
                <ES6/>
            </div>
        </HashRouter>
    );
}

function clickHandler1() {
    console.log('clickHandler1');
}

function clickHandler2() {
    console.log('clickHandler2');
}

export default App;
