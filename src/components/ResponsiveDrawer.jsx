import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './logo007.webp'
import Logo2 from './logo2.png'
import BusinessIcon from '@mui/icons-material/Business';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  // const handleDrawerToggle = () => {
  //   if (!isClosing) {
  //     setMobileOpen(!mobileOpen);
  //   }
  // };

  const drawer = (
    <div className='px-3'>
      <Toolbar />
      <div className='flex justify-center'>
        <img className='w-44' src={Logo} alt="Logo" />
      </div>

      <Divider />
      <div className='uppercase text-gray-400 py-2 pl-5 hover:text-black'>Main menu</div>
      <div className='list-none cursor-pointer flex flex-col gap-3'>
        <li className='text-gray-400 text-base hover:font-bold hover:text-base hover:text-black flex items-center gap-3 hover:bg-blue-500 px-3 py-1 rounded-sm duration-200'><BusinessIcon />News Quant</li>
        <li className='text-gray-400 text-base hover:font-bold hover:text-base hover:text-black flex items-center gap-3 hover:bg-blue-500 px-3 py-1 rounded-sm duration-200'><BusinessIcon />Real Economic Indicators</li>
        <li className='text-gray-400 text-base hover:font-bold hover:text-base hover:text-black flex items-center gap-3 hover:bg-blue-500 px-3 py-1 rounded-sm duration-200'><BusinessIcon />One Score</li>
        <li className='text-gray-400 text-base hover:font-bold hover:text-base hover:text-black flex items-center gap-3 hover:bg-blue-500 px-3 py-1 rounded-sm duration-200'><BusinessIcon />Costumer Support</li>
      </div>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
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
        <div className='flex overflow-y-hidden'>
          <div className=' border-slate-500 w-3/4 rounded-sm m-2'>
            <input className='w-full px-3 py-1 border border-black rounded-sm' type="text" placeholder='Search your Question here....  ' />
            <div className='flex gap-4  mt-2'>
              <span className='font-bold text-blue-500'>Current Licence :</span>
              <span>USD/CAD</span>
              <span>AUD/USD</span>
            </div>
          </div>
          <div className=' w-1/4 px-4 flex gap-2 justify-end cursor-pointer m-2'>
            <div><NotificationAddIcon /></div>
            <div><img className='w-8' src={Logo2} alt="" /></div>
            <div className='font-bold'>UserName</div>
          </div>
        </div>

        {/* <Toolbar /> */}
        <div className='flex '>
          <div className=' w-3/4 h-fit m-2'>
            <LeftSection/>
          </div>
          <div className=' w-1/4 m-2'>
            <RightSection/>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;