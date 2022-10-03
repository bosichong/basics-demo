import React from 'react';
import Button from '@material-ui/core/Button';

class Demo01 extends React.Component {
    // es6组件
    render() {
        return <p>{this.props.name}</p>;
    }
}

function Fundemo(props) {
    // 函数组件
    return <div>{props.name}</div>
}

class Demo02 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: new Date(),data_a : new Date(),};
    }

    componentWillMount() {
        // 组件挂载
        this.timerID = setInterval(() => this.tick(),1000)
    }

    componentWillUnmount() {
        // 组件卸载
        clearInterval(this.timerID)
    }

    tick(){
        this.setState(
            {data_a: new Date()}
        )
    }
    render() {
        return (
            <div>
                <p>在构建函数constructor()中初始化this.state</p>
                <p>现在的时间是:{this.state.data.toLocaleString()}</p>
                <p>组件的生命周期有三个状态:</p>
                <p> Mounting(挂载)：
                    已插入真实 DOM
                    Updating(更新)：正在被重新渲染
                    Unmounting(卸载)：已移出真实 DOM</p>
                <Button variant="contained" color="primary">现在的时间是:{this.state.data_a.toLocaleString()}</Button>

            </div>

        );
    }
}

class Demo03 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isTogglenOn:true
        }
        // 绑定this
        this.handleClick = this.handleClick.bind(this);
    }
    // 回调函数
    handleClick(){
        this.setState(state =>({
            isTogglenOn:!state.isTogglenOn
        }));
    }

    render() {
        return(
            <Button variant="contained" color="primary" onClick={this.handleClick}>
                {this.state.isTogglenOn ? "on" : "off"}
            </Button>
        )
    }
}

export { Demo01, Demo02,Demo03, Fundemo }