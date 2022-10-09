import React from 'react'
import { useRoutes } from "react-router-dom";
import './App.css';

import routes from './routes'




import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const element = useRoutes(routes)
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key="Home" disablePadding>
          <ListItemButton to="/home">
            {/* <NavLink className="list-group-item" to="/home"></NavLink> */}
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="基础实例" />
          </ListItemButton>
        </ListItem>
      </List>
      <ListItem key="Hook" disablePadding>
        <ListItemButton to="/hook">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="HOOK" />
        </ListItemButton>
      </ListItem>
      <ListItem key="Route" disablePadding>
        <ListItemButton to="/route">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Route" />
        </ListItemButton>
      </ListItem>
      <ListItem key="More" disablePadding>
        <ListItemButton to="/about">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="待定" />
        </ListItemButton>
      </ListItem>
      <Divider />

    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            一些有关于react学习的小例子与笔记
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* 这里是隐藏后弹出的抽屉 */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {element}
      </Box>
    </Box>
  );
}





function App() {
  return (
    
      <div className="App">
        <ResponsiveDrawer />
      </div>
  )
}

export default App;