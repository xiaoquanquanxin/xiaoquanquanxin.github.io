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
import {Content} from "@components/global/content/content";

@inject('store')
export class App extends React.Component<any> {
    render() {
        const {store} = this.props;
        return (
            <div className="App">
                <GithubFork/>
                <HashRouter>
                    <Slider store={store}/>
                    <Content store={store}/>
                </HashRouter>
                <ES6/>
            </div>
        )
    }
}

export default App;
