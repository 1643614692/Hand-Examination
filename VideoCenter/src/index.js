/*
 * @Author: guanhaobin 1643614692@qq.com
 * @Date: 2022-07-30 02:32:36
 * @LastEditors: guanhaobin 1643614692@qq.com
 * @LastEditTime: 2022-07-30 23:27:12
 * @FilePath: \汉得前端培训\app(1)\app\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

