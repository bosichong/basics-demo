import * as React from 'react';
import { Demo01, Demo02, Demo03, Demo04, Demo05, Fundemo, Separate } from './Demo'
import FormDemo from './FormDemo';


import Button from '@material-ui/core/Button'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            渲染组件
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>渲染一个mui Button</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button variant="contained" color="secondary">
              添加一个粉红色的按钮好看吗?
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '20%', flexShrink: 0 }}>引入自定义的组件</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            /Demo.js中创建class和function组件引入
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Demo01 name="class组件属性的赋值"></Demo01>
            <Fundemo name="Fundemo组件接收的父组件的传值"></Fundemo>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
          生命周期及状态
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          componentWillMount()组件挂载,componentWillUnmount() 组件卸载
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Demo02 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
          事件处理
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          点击按钮文字会来回切换
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Demo03 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
          条件渲染
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          点击按钮切换登陆状态
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Demo04 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
          列表渲染
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          使用JavaScript中的map()方法遍历数组循环渲染.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Demo05 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
          简单表单
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          一个简单的表单例子
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormDemo />
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}


export default function Home() {
  return (
    <>
      <ControlledAccordions />

    </>
  );
}