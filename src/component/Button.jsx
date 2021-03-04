import React, { Component } from 'react';

function Button(props){
    console.log(props);
    return (
        <div>我是按钮 {props}</div>
    );
}

export default Button;