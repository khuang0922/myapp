import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Kent from './test';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Kent name1="Kent Huang" name2="Sophy Wang"/>, document.getElementById('kent'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
