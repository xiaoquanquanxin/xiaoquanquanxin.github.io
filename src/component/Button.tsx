import React, {Component} from 'react';

function Button({color}: { color: string }) {
	console.log(color);
	return (
		<div>我是按钮 {color}</div>
	);
}

export default Button;