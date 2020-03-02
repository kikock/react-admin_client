//基础模块
import React, {Component} from 'react';
// 路由模块
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/login/login';
import Admin from './pages/admin/admin';

/**
 * 引用根组件
 */
export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <switch> {/*只匹配其中一个*/}
                    <Route path='/' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                </switch>
            </BrowserRouter>
        )
    };
};
