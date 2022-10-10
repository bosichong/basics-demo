import React, { useState,useEffect } from 'react';


import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// 什么是HOOK?
class BtnTestCls extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title : "class组件通过this.state来传递数据"
        }
    }
    render(){
        return (
            <Button variant="contained">{this.state.title}</Button>
        )}
}

function BtnTestFun(){
    const [title,setTitle] = useState("这是一个函数组件通过useState()设置的默认值")
    return(
        <Button variant="outlined">{title}</Button>
    )
}


// 使用 Effect Hook

function BtnTestEffcet(){
    const[count,setCount] = useState(0)
    useEffect(() => {
        console.log("Effect Hook 就是指useEffect()这个特殊函数，它让函数组件能在渲染完成后执行自定义操作")
    } ,[])
    return(
        <div>
            <p>当前点击了{count}次</p>
            <Button onClick={() => setCount(count+100)} variant="outlined">请点击!</Button>
        </div>
        
    )
}




function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
            什么是HOOK?
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>重点ta要做的和state一样</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <p>Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性</p>
            <BtnTestCls />
        <p>通过setState()在函数组件中定义组件的状态和修改状态的方法.</p>
            <BtnTestFun />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography sx={{ width: '20%', flexShrink: 0 }}>使用 Effect Hook</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Effect Hook 可以让你在函数组件中执行副作用操作
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <BtnTestEffcet />
        </AccordionDetails>
      </Accordion>

    </div>
  );
}


export default function HookHome() {
  return (
    <>
      <ControlledAccordions />
    </>
  );
}