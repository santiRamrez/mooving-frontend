import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';

// import { useRouter } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

// import HttpsReq from 'src/utils/httpsReq';

import { NAV, HEADER } from './config-layout';

// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, ...other }) {
  // const [data, setData] = useState({});
  // const HTTP = new HttpsReq();
  // const router = useRouter();
  const lgUp = useResponsive('up', 'lg');

  // useEffect(() => {
  //   const token = localStorage.getItem('moov') || false;
  //   if (token) {
  //     //  get data
  //     if (!data) {
  //       HTTP.getAll('users').then((resp) => {
  //         if (resp) {
  //           const user = resp.filter((obj) => obj.session_token === token)[0];
  //           setData(user);
  //         }
  //       });
  //     }
  //   } else {
  //     router.push('/');
  //   }
  // });

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          px: 2,
          py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
