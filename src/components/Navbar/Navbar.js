import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { cyan } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

import { mainNavBar, subNavbar } from './constants/navbarItems';

const drawerWidth = 240;

const Navbar = () => {
    const navigate = useNavigate();

    return (
      <>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: cyan[900],
              color: '#e8eded'
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {mainNavBar.map((navItem, index) => (
              <ListItem key={`${navItem.index}${navItem.label}`} disablePadding>
                <ListItemButton
                  onClick={() => navigate(navItem.route)}
                >
                  <ListItemIcon>
                    {navItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={navItem.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {subNavbar.map((navItem, index) => (
              <ListItem key={`${navItem.index}${navItem.label}`} disablePadding>
                <ListItemButton
                  onClick={() => navigate(navItem.route)}
                >
                  <ListItemIcon>
                    {navItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={navItem.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    );
}

export default Navbar;