import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Jack',
            password: '12345678',
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePassWordChange = this.handlePassWordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUserNameChange(e) {
        this.setState({username: e.target.value});
    }
    handlePassWordChange(e){
        this.setState({password: e.target.value});
    }

    handleSubmit(event) {
        alert('提交的名字: ' + this.state.username+'\r\n'+this.state.password);
        event.preventDefault();
    }
    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <div><input type="text" value={this.state.username} onChange={this.handleChange} /></div> */}
                <div><TextField type="text" defaultValue={this.state.username} onChange={this.handleUserNameChange} id="outlined-basic" label="username" variant="outlined"/></div>
                <div><TextField type="password" defaultValue={this.state.password} onChange={this.handlePassWordChange} id="outlined-basic" label="password" variant="outlined"/></div>
                <div><Button type="submit" value="提交" variant="contained" color="primary">提交</Button></div>
            </form>
        )
    }
}

export default FormDemo