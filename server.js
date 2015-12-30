// server.js

// Example of React.js + Express.js Server-side rendering ( Isomorphic JS Example )

// SERVER
//==================================================
import express from 'express';
const app = express();

// SETUP REACT
//==================================================
import React from 'react';
import {
    renderToString
}
from 'react-dom/server';
import HelloWorld from './lib/src/test.jsx'
var ReactComponent = React.createFactory(HelloWorld);

// WEBPACK MIDDLEWARE ( Just to compile "lib/src/client-render.js" To "bundle.js" in to browser understandable JS using babel, 
// because browser can not understand ES6 and JSX syntex)
//==================================================
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import config from './webpack.config.js';
const compiler = webpack(config);

//app.use(express.static(__dirname + 'build/public'));  
app.use(webpackMiddleware(compiler));

// ROUTE
//==================================================
app.get('/', function response(req, res) {
    var staticMarkup = renderToString(ReactComponent({ count: 7, phrase :"News Archive" })); // renderToString will render React code from test.jsx file to browser
    
    res.send(staticMarkup);
    //res.sendFile('index.html');
});

app.listen(3000);