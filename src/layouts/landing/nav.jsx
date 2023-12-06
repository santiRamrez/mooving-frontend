import { useState } from 'react';

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';

// -----------------------------------------------------

export default function Nav() {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toRegister = () => {
    handleClose();
    alert('Opcion deshabilitada');
  };

  const toLogin = () => {
    router.push('/login');
    handleClose();
  };

  const toDashboard = () => {
    router.push('/dashboard');
    handleClose();
  };

  return (
    <div style={{ position: 'absolute', top: 15, right: 15, zindex: 99 }}>
      <Button
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined"
        sx={{
          fontFamily: theme.typography.fontFamily,
          bgcolor: theme.palette.common.white,
          '&:hover': { bgcolor: theme.palette.common.black, color: theme.palette.common.white },
        }}
      >
        Menú
      </Button>
      <Menu
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={toLogin}>Login</MenuItem>
        <MenuItem onClick={toRegister}>Registrarse</MenuItem>
        <MenuItem onClick={toDashboard}>Dashboard</MenuItem>
      </Menu>
    </div>
  );
}
