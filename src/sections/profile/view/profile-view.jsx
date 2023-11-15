import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

/*
Profile page should have:
- Datos Personales
- Foto
- Historial de Viajes
- Rating [0 - 5]
*/

export default function ProfileView() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Peril de Usuario</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Editar Perfil
        </Button>
      </Stack>

      <Card />
    </Container>
  );
}
