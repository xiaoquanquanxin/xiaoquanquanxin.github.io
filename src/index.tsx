import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import {store} from "@store/index";
import reportWebVitals from './reportWebVitals';
import '@css/index.less';
import '@css/color.less';
import '@css/basic.less';
import '@css/androidstudio.css';
import '@css/androidstudio.font.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
