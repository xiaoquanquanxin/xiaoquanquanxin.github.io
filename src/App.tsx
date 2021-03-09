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
import {inject, observer} from "mobx-react";
import {store} from "@store/index";

@inject('store', 'actions')
@observer
export class App extends React.Component {
    render() {
        // @ts-ignore
        const {actions} = this.props;
        console.log(actions);
        return (
            <HashRouter>
                <div className="App">
                    <GithubFork/>
                    <Slider actions={actions} store={store}/>
                    <Route path="/about">about</Route>
                    <Route path="/index">index</Route>
                    <ES6/>
                </div>
            </HashRouter>
        )
    }
}

export default App;
