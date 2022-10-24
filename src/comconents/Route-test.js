import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// 引入css
import './Route-test.css'

function ContainedButtons() {
    return (
        <div className="container">
            <Stack direction="row" spacing={2}>
                <NavLink className="nl" to="/route/homepage"><Button variant="contained" >HomePage</Button></NavLink>
                <NavLink className="nl" to="/route/newspage"><Button variant="contained">NewPage</Button></NavLink>
                <NavLink className="nl" to="/route/aboutpage"><Button variant="contained">AboutPage</Button></NavLink>
            </Stack>
            {/* 指定路由组件的展示位置 */}
            <Outlet />
        </div>
    );
}


function HomePage() {
    return (
        <h1>Welcome to Home</h1>
    )
}

function AboutPage() {
    return (
        <h1>Welcome to About</h1>
    )
}



const style = {
    width: '100%',
    bgcolor: 'background.paper',
};


function NewsPage() {
    // 模拟数据
    const [messages, setMessages] = useState([
        { id: '001', title: '消息1', content: '锄禾日当午' },
        { id: '002', title: '消息2', content: '锄禾日当2' },
        { id: '003', title: '消息3', content: '锄禾日当3' },
        { id: '004', title: '消息4', content: '锄禾日当4' }
    ])

    const navigate = useNavigate()
    function showDetail(item) {
        navigate('detail', {
            replace: false,
            state: {
                id: item.id,
                title: item.title,
                content: item.content
            }
        })
    }
    return (
        <div>
            <h1>Welcome to news</h1>
            <List sx={style} component="nav" aria-label="mailbox folders">
                {
                    messages.map((item) => {
                        return (
                            <div>
                                <ListItem key={item.id} onClick={() => showDetail(item)} button>
                                    <NavLink to="detail"
                                        state={{
                                            id: item.id,
                                            title: item.title,
                                            content: item.content
                                        }} />
                                    {item.title}查看详情
                                </ListItem>
                                <Divider />
                            </div>

                        )
                    })
                }
            </List>
            {/* 指定路由组件的展示位置 */}
            <Outlet />
        </div>
    )
}


function DetailPage() {
    const { state } = useLocation()
    const id = state.id;
    const title = state.title;
    const content = state.content;
    return (
        <ul>
            <li>id:{id}</li>
            <li>title:{title}</li>
            <li>content:{content}</li>
        </ul>
    )
}


export default function RouteHome() {
    return (
        <div>
            <h1>Welcome to App</h1>

            <ContainedButtons />

        </div>
    );
}


export { HomePage, AboutPage, NewsPage, DetailPage } 