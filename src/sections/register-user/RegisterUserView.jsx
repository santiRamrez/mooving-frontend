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
import InputWord from 'src/components/form-inputs';

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
  const [error, setError] = useState({
    name: {
      status: false,
      msg: 'Ej: Ricardo',
    },
    lastname: {
      status: false,
      msg: 'Ej: Rodriguez',
    },
    rut: {
      status: false,
      msg: '12.345.678-9',
    },
    phone: {
      status: false,
      msg: '9 8765 4321',
    },
    email: {
      status: false,
      msg: 'tucorreo@tudominio.cl',
    },
    psword: {
      status: false,
      msg: 'Ej: tuclave',
    },
  });

  const handleChange = (e) => {
    setData((prev) => {
      const output = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return output;
    });
    checkError(e);
  };

  const checkError = (e) => {
    if (e.target.name === 'name') {
      const regex = /^[a-z]+/gi;
      const val = data.name;
      if (regex.test(val) === false) {
        setError((prev) => {
          const obj = {
            ...prev,
            name: { status: true, msg: 'Ej: Ricardo' },
          };
          return obj;
        });
      } else {
        setError((prev) => {
          const obj = {
            ...prev,
            name: { status: false, msg: '' },
          };
          return obj;
        });
      }
    }
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
                size="small"
                name="name"
                label="Nombre"
                onChange={handleChange}
                value={data.name}
                error={error.name.status}
                helperText={error.name.status ? error.name.msg : ''}
              />
              <InputWord
                size="small"
                name="lastname"
                label="Apellido"
                error={false}
                helpText="Ej: Rodriguez"
                regex={/^[a-z]+/gi}
              />
            </Stack>
            <TextField
              size="small"
              name="rut"
              label="RUT"
              onChange={handleChange}
              value={data.rut}
              error={error.rut.status}
              helperText={error.rut.status ? error.rut.msg : ''}
            />
            <TextField
              size="small"
              name="phone"
              label="Teléfono"
              onChange={handleChange}
              value={data.phone}
              error={error.phone.status}
              helperText={error.phone.status ? error.phone.msg : ''}
            />
            <TextField
              size="small"
              name="email"
              label="Correo Electrónico"
              onChange={handleChange}
              value={data.email}
              error={error.email.status}
              helperText={error.email.status ? error.email.msg : ''}
            />
            <TextField
              size="small"
              name="password"
              label="Contraseña"
              onChange={handleChange}
              value={data.password}
              error={error.psword.status}
              helperText={error.psword.status ? error.psword.msg : ''}
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
