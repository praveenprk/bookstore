import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../styles/HomeScreen/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Drafts} from '@mui/icons-material/';


const LoggedInHeader = () => {

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const [menuState, setMenuState] = useState(false)
  
  const showProfile = (event)  => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showMenu = () => {
    setMenuState(true)
}

  const logout = () => {
      toast.success('Logged Out...', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        })
        setTimeout(() => {
          localStorage.removeItem("userInfo")
          window.location.href = '/'
        }, 2000)
        
  }

  //get state from store
  const userData = useSelector((state) => state.auth.userDetails)
  const leftLi = window.location.pathname === '/' ? true : false


  return (
    <>
    <ul className='home-header d-flex'>
        <li>
      {
        leftLi ?
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => showMenu()}
          >
        <MenuIcon/>
        </IconButton>  :
          <i className="bi bi-chevron-double-left"
          onClick={() => navigate(-1)}></i>
      }
        </li>
        <li>
            <Link to='/'>
            <HomeIcon/>
            </Link>
        </li>
        <li>
        <Tooltip title="Account settings">
          <IconButton
            onClick={showProfile}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 25, height: 25 }}>M</Avatar>
          </IconButton>
        </Tooltip>
          {/* <ul>
          <li 
          
          >
            <Link to={`/profile/${userData._id}`}>
                <i className="bi bi-person-circle"></i></Link>
              </li>
              <span className='dropdown'
              style={{
              // display: dispHover,
             }}>
            </span>
          
          </ul> */}
        </li>
    </ul>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to={`/profile/${userData._id}`}>
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        </Link>
        <Divider />
        <Link to={`/profile-settings/${userData._id}`}>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        </Link>
        <MenuItem onClick={()=>logout()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <Drawer
      anchor='left'
      open={menuState}
      onClose={() => {setMenuState(false)} }
    >
      <Box sx={{ width: 200, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="My Orders" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    </Drawer>
      </>
  )
}

export default LoggedInHeader