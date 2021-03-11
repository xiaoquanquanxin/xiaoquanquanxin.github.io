import React, {useEffect} from "react";
import {
	HashRouter,
} from 'react-router-dom';
import {GithubFork} from "@components/global/gitubFork/gitubFork";
import {Slider} from "@components/global/slider/slider";
import {inject} from "mobx-react";
import {Content} from "@components/global/content/content";
import {Loading} from "@components/loading/loading"

@inject('store')
export class App extends React.Component<any> {
	render() {
		const {store} = this.props;
		return (
			<div className="App">
				<GithubFork/>
				<Loading store={store}/>
				<HashRouter>
					<Slider store={store}/>
					<Content store={store}/>
				</HashRouter>
			</div>
		)
	}
}

export default App;
