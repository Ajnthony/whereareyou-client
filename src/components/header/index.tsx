import React from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Header = () => {
  const navigate = useNavigate();
  const menus = [
    {label: 'Animals', slug: '/animals'},
    {label: 'Forum', slug: '/community'},
    {label: 'About', slug: '/about'}
  ];

  const authMenus = [
    {label: 'Sign in', slug: '/login'},
    {label: 'Register', slug: '/register'}
  ];

  const menuMap = (menu: {label: string; slug: string}) => (
    <div key={menu.label} onClick={() => navigate(menu.slug)} style={{cursor: 'pointer'}}>
      <p>{menu.label}</p>
    </div>
  );

  return (
    <Box
      sx={{
        height: '10vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff'
      }}
    >
      <Stack direction="row" spacing={4}>
        {menus.map((menu) => menuMap(menu))}
      </Stack>

      <Stack direction="row" spacing={2}>
        {authMenus.map((menu) => menuMap(menu))}
      </Stack>
    </Box>
  );
};

export default Header;
