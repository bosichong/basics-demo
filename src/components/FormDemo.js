import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';





class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Jack',
            password: '12345678',
        };
        // 绑定输入框字符变化事件,绑定按钮点击事件
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // 当需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，
    // 并让处理函数根据 event.target.name 的值选择要执行的操作。
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('提交的名字: ' + this.state.username + '\r\n' + this.state.password);

    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <Box
                    
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                {/* <div><input type="text" value={this.state.username} onChange={this.handleChange} /></div> */}
                <div><TextField name="username" type="text" defaultValue={this.state.username} onChange={this.handleInputChange} id="outlined-basic" label="username" variant="outlined" /></div>
                <div><TextField name="password" type="password" defaultValue={this.state.password} onChange={this.handleInputChange} id="outlined-basic" label="password" variant="outlined" /></div>
                <div><Button type="submit" value="提交" variant="contained" color="primary">提交</Button></div>
                </Box>
            </form >
        )
    }
}

export default FormDemo