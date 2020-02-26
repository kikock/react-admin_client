/**
 * 应用根组件(简单的组件用函数定义,复杂的用类定义)
 */

import React, {Component} from 'react';

import {Button, message} from 'antd'

export default class App extends Component {

    handleClick = () => {
        message.success("点击按钮成功")
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>按钮001</Button>
                <Button>按钮002</Button>
                <Button type="dashed">按钮003</Button>
                <Button type="danger">按钮004</Button>
                <Button type="link">按钮005</Button>
            </div>
        )
    };
};

//
// function App () {
//   return (
//     <div>这是一个app开始 </div>
//   );
// }
//
// export default App ;
