/**
 * 入口js  渲染app标签
 */

import React from 'react'
import ReactDom from 'react-dom'
// 引入自定义js
import App from './App'
import 'antd/dist/antd.min.css'
//将app组件标签渲染到index页面的div上
ReactDom.render(<App/>, document.getElementById('root'));
