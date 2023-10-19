import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import { alpha, useTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

// import { useRouter } from 'src/routes/hooks';
import HttpsReq from 'src/utils/httpsReq';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import InputWord from 'src/components/form-inputs';

export default function RegisterUserView() {
  const HTTP = new HttpsReq();
  const theme = useTheme();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    lastname: '',
    rut: '',
    phone: '',
    email: '',
    password: '',
    rol: '',
  });

  const handleChange = (obj) => {
    setData((prev) => {
      const output = {
        ...prev,
        [obj.name]: obj.value,
      };
      return output;
    });
  };

  const handleRadioBtns = (e) => {
    setData((prev) => {
      const output = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return output;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      HTTP.postRecord(JSON.stringify(data), 'users').then((response) => console.log(response));
    } catch (err) {
      console.log(err);
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
              <InputWord
                size="small"
                name="name"
                label="Nombre"
                helpText="Ej: Daniel"
                regex={/^[a-z]{2,}$/i}
                value={(obj) => handleChange(obj)}
              />
              <InputWord
                size="small"
                name="lastname"
                label="Apellido"
                helpText="Ej: Rodriguez"
                regex={/^[a-z]{2,}$/i}
                value={(obj) => handleChange(obj)}
              />
            </Stack>
            <InputWord
              size="small"
              name="rut"
              label="RUT"
              helpText="Ej: 9.345.678-9"
              regex={/^\d{1,2}\.\d\d\d\.\d\d\d-(\d|k)$/i}
              value={(obj) => handleChange(obj)}
            />
            <InputWord
              size="small"
              name="phone"
              label="Teléfono"
              helpText="Ej: +56 9 8465 5623"
              regex={/^\d{1,2}\s\d\d\d\d\s\d\d\d\d$/}
              value={(obj) => handleChange(obj)}
            />
            <InputWord
              size="small"
              name="email"
              label="Correo Electrónico"
              helpText="Ej: tucorreo@tudominio.com"
              regex={/^[a-z]+\.?_?\w+@[a-z]\w+\.([a-z][a-z]|[a-z][a-z][a-z])$/}
              value={(obj) => handleChange(obj)}
            />
            <InputWord
              size="small"
              name="password"
              label="Contraseña"
              helpText="Al menos 5 caracteres "
              regex={/.{5,}/}
              value={(obj) => handleChange(obj)}
            />
            <FormControl>
              <FormLabel id="btn-radio-label">Rol</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="rol"
                onChange={handleRadioBtns}
              >
                <FormControlLabel value="cargo" control={<Radio />} label="Transportista" />
                <FormControlLabel
                  value="customer"
                  control={<Radio />}
                  label="Solicitante de Flete"
                />
              </RadioGroup>
            </FormControl>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="inherit"
              onClick={handleSubmit}
              loading={isLoading}
            >
              Registrar Usuario
            </LoadingButton>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
