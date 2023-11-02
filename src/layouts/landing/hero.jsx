import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Nav from './nav';

// ----------------------------------------------------------------------

export default function Hero() {
  const theme = useTheme();

  return (
    <Box component="section" display="flex" sx={{ width: 1, height: '100vh' }}>
      <Box
        sx={{
          width: 1 / 2,
          py: 5,
          px: 5,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography align="left" variant="h1">
          Mooving
        </Typography>
        <Typography align="left" variant="subtitle1">
          una app para coordinar envíos de muebles y electrodomésticos
        </Typography>
      </Box>
      <Box
        sx={{
          width: 1 / 2,
          py: 5,
          px: 5,
          bgcolor: theme.palette.primary.main,
        }}
      />
      <Nav />
    </Box>
  );
}
