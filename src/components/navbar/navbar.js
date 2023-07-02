import  { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { navItems } from "@/src/assets/data/menu";
import logo from '../../assets/data/logo'
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import { NavbarButton } from '../../components';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';



const drawerWidth = '100%';

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter()
  const [navbar, setNavbar] = useState(true);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };



  const drawer = (
      <Box width={'100%'} height={'100%'} bgcolor={'#000'} color={'#fff'} paddingY={'10px'}>
        <Box paddingX={'10px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Image src={logo} alt="Logo" />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <CloseIcon />
        </IconButton>
        </Box>
        <Divider />
        <List >
          {navItems.map((item) => (
            <ListItem key={item.route} disablePadding>
              <ListItemButton onClick={() => router.push(`${item.route}`)} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label}  />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
 


  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar className={`${navbar ? 'navbarActiveBackground' : ' '}`} component="nav"  sx={{ boxShadow: 'none', border: '1px solid green' }}>
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Image src={logo} alt="Logo" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button onClick={() => {
                handleDrawerToggle
                router.push(`${item.route}`)}
              }
              key={item.route} sx={{ color: '#fff' }}>
                {item.label}
              </Button>              
            ))}
              <button className={styles.btnAction} 
                onClick={() => router.push('/')} >
                Join Now
              </button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, textAlign: 'center' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        
      </Box>
    </Box>
  );
}


export default DrawerAppBar;
