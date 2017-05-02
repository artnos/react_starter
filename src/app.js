const css = require('./scss/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import MyClass from './components/MyClass';


ReactDOM.render(
  <div>
  	<h1>Hello, world!</h1>
  	<p>Some Copy</p>
  	<MyClass/>
  </div>,
  document.getElementById('root')
)

