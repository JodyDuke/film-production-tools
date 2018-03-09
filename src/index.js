import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import 'font-awesome/css/font-awesome.min.css';

WebFont.load({
    google: {
        families: ['Amaranth:400,400i,700,700i', 'Cantarell:400,400i,700', 'Raleway:400,700', 'sans-serif']
    }
});

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
