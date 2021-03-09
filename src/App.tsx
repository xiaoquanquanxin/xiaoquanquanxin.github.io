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
import {Slider} from "@components/global/slider/slider";
import {ES6} from "@pages/ES6";
import {inject} from "mobx-react";

@inject('store')
export class App extends React.Component<any> {
    render() {
        const {store} = this.props;
        return (
            <HashRouter>
                <div className="App">
                    <GithubFork/>
                    <Slider store={store}/>
                    <Route path="/about">about</Route>
                    <Route path="/index">index</Route>
                    <ES6/>
                </div>
            </HashRouter>
        )
    }
}

export default App;
