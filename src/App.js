const css = require('./scss/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import MyClass from './components/MyClass';


/*
* TODO: add redux and connect
* TODO: add redux thunk middleware
* TODO: add redux promise middleware
* TODO: add redux tool kit and hot reloader
* TODO: aciton and reducer folders
* TODO: and bootsrap render
* TODO: update react version
*
* */
ReactDOM.render(
  <div>
  	<h1>Hello, world!</h1>
  	<p>Some Copy</p>
  	<MyClass/>
  </div>,
  document.getElementById('root')
)

