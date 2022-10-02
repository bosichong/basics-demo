
import './App.css';
import { Demo01, Demo02, Fundemo, } from './Demo'


import Button from '@material-ui/core/Button'


function Separate(props) {
  return <p>_____________{props.name}____________</p>
}

function App() {
  return (
    <div className="App">
        <Separate name="demo00"></Separate>
        <Button variant="contained" color="secondary">
          demo 00 添加一个按钮 粉红色的按钮好看吗?
        </Button>
        <Separate name="demo01"></Separate>
        <Demo01 name="class组件属性的赋值"></Demo01>
        <Fundemo name="Fundemo组件接收的父组件的传值"></Fundemo>
        <Separate name="demo02"></Separate>
        <Demo02></Demo02>
    </div>
  );
}

export default App;