import React from 'react';
import Button from '@mui/material/Button';



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
        this.state = { data: new Date(), data_a: new Date(), };
    }

    componentWillMount() {
        // 组件挂载
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        // 组件卸载
        clearInterval(this.timerID)
    }

    tick() {
        this.setState(
            { data_a: new Date() }
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
    constructor(props) {
        super(props);
        this.state = {
            isTogglenOn: true
        }
        // 绑定this
        this.handleClick = this.handleClick.bind(this);
    }
    // 回调函数
    handleClick() {
        this.setState(state => ({
            isTogglenOn: !state.isTogglenOn
        }));
    }

    render() {
        return (
            <Button variant="contained" color="primary" onClick={this.handleClick}>
                {this.state.isTogglenOn ? "on" : "off"}
            </Button>
        )
    }
}


// ————————————————————————————————————————————————


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return (
        isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    )
}

function LoginBtn(props) {
    return (
        <Button variant="outlined" color="secondary" onClick={props.onClick}>Login............</Button>
    );
}

function LogoutBtn(props) {
    return (
        <Button variant="outlined" onClick={props.onClick}>Logout............</Button>
    );
}
class Demo04 extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let btn;
        if (isLoggedIn) {
            btn = <LogoutBtn onClick={this.handleLogoutClick} />;
        } else {
            btn = <LoginBtn onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {btn}
            </div>
        )
    }
}


// ——————————————————————————————————————————


class Demo05 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : [
                {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
                {id: 2, title: 'Installation', content: 'You can install React from npm.'}
              ]
        }
        
    }
    render(){
        const content = this.state.posts.map((post) => 
        <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
        )
        return(
            <div>{content}</div>
        ) }

}


export { Demo01, Demo02, Demo03, Demo04,Demo05, Fundemo }