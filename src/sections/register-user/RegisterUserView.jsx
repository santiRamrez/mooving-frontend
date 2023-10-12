import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import { alpha, useTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

// import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';

export default function RegisterUserView() {
  const theme = useTheme();
  // const handleSubmit = '';
  const [data, setData] = useState({
    name: '',
    lastname: '',
    rut: '',
    phone: '',
    email: '',
    password: '',
    rol: '',
  });

  const handleChange = (e) => {
    setData((prev) => {
      const output = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return output;
    });
  };

  const checkError = (e) => {
    const output = {
      error: false,
      msg: '',
    };
    if (e.target.name === 'name') {
      const regex = /^[a-z]+$/;
      const val = data.name;
      if (regex.test(val) === false) {
        //
      }
    }
    return output;
  };

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 4,
            width: 1,
            maxWidth: 420,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'spaceAround',
            justifyContent: 'spaceAround',
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h4">Crea una cuenta</Typography>
            <Stack direction="row" alignItems="flex-start" justifyContent="flex-end" spacing={1}>
              <TextField
                error
                size="small"
                name="name"
                label="Nombre"
                onChange={handleChange}
                value={data.name}
                helperText="Ej: Ricardo"
                onBlur={checkError}
              />
              <TextField
                size="small"
                name="lastname"
                label="Apellido"
                onChange={handleChange}
                value={data.lastname}
              />
            </Stack>
            <TextField
              size="small"
              name="rut"
              label="RUT"
              onChange={handleChange}
              value={data.rut}
            />
            <TextField
              size="small"
              name="phone"
              label="Teléfono"
              onChange={handleChange}
              value={data.phone}
            />
            <TextField
              size="small"
              name="email"
              label="Correo Electrónico"
              onChange={handleChange}
              value={data.email}
            />
            <TextField
              size="small"
              name="password"
              label="Contraseña"
              onChange={handleChange}
              value={data.password}
            />
            <FormControl>
              <FormLabel id="btn-radio-label">Rol</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="rol"
                onChange={handleChange}
              >
                <FormControlLabel value="cargo" control={<Radio />} label="Transportista" />
                <FormControlLabel
                  value="customer"
                  control={<Radio />}
                  label="Solicitante de Flete"
                />
              </RadioGroup>
            </FormControl>
            <LoadingButton fullWidth size="large" type="submit" variant="contained" color="inherit">
              Registrar Usuario
            </LoadingButton>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
