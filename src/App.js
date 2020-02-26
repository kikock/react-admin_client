import React, {Component} from 'react'
import {message, Button} from 'antd'
/*
应用根组件
**/
export default class App extends Component {
    handleClick = () => {
        message.success('点击成功')
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>测试button</Button></div>
        )
    }
}
