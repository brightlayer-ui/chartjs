import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import * as BrightlayerUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';

ReactDOM.render(
  <MuiThemeProvider theme={createMuiTheme(BrightlayerUIThemes.blue)}>
     <App/>
  </MuiThemeProvider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
