import PropTypes from 'prop-types';
import { useState, useEffect, forwardRef } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

// ------------ Dialog Components -------------

import Slide from '@mui/material/Slide';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';

// ------------ Customized Imputs -----------
import InputWord from 'src/components/form-inputs';
import SingleSelect from 'src/components/form-select/single-selected';
import MultipleSelectChip from 'src/components/form-select/multiple-select-chip';

// ----------------- Transitions ----------------
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function ModalCarrier({ showUp = false, values = {}, close = (f) => f }) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  /* eslint-disable */
  useEffect(() => {
    if (showUp) {
      setData({
        name: values.name,
        lastname: values.lastname,
        local_id: values.local_id,
        phone: values.phone,
        status: values.status,
        regions: values.scope,
      });
    }
  }, [showUp]);
  /* eslint-enable */

  const handleClose = () => {
    setData({});
    close(false);
    setLoading(false);
  };

  const handleChange = (obj) => {
    setData((prev) => {
      const output = {
        ...prev,
        [obj.name]: obj.value,
      };
      return output;
    });
  };

  const handleMultipleSelector = (obj) => {
    setData((prev) => {
      const output = {
        ...prev,
        [obj.name]: obj.value,
      };
      return output;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const keys = Object.keys(data);
    const emptyValues = keys.filter((key) => !data[key]);

    if (emptyValues.length > 0) {
      alert('Complete todos los campos');
      return;
    }

    try {
      setLoading(true);
      // HTTP.postRecord(JSON.stringify(data), 'users').then((response) => console.log(response));
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={showUp} onClose={handleClose} TransitionComponent={Transition}>
      <DialogContent>
        <Card
          sx={{
            p: 2,
            width: 1,
            maxWidth: 500,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'spaceAround',
            justifyContent: 'spaceAround',
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h4">Editar datos transportista</Typography>
            <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={1}>
              <InputWord
                size="small"
                name="name"
                label="Nombre"
                helpText="Ej: Daniel"
                regex={/^[a-z]{2,}$/i}
                value={(obj) => handleChange(obj)}
                text={values.name}
              />
              <InputWord
                size="small"
                name="lastname"
                label="Apellido"
                helpText="Ej: Rodriguez"
                regex={/^[a-z]{2,}$/i}
                value={(obj) => handleChange(obj)}
                text={values.lastname}
              />
            </Stack>
            <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={1}>
              <InputWord
                size="small"
                name="rut"
                label="RUT"
                helpText="Ej: 9.345.678-9"
                regex={/^\d{1,2}\.\d\d\d\.\d\d\d-(\d|k)$/i}
                value={(obj) => handleChange(obj)}
                text={values.local_id}
              />
              <InputWord
                size="small"
                name="phone"
                label="Teléfono"
                helpText="Ej: +56 9 8465 5623"
                regex={/^\d{1,2}\s\d\d\d\d\s\d\d\d\d$/}
                value={(obj) => handleChange(obj)}
                text={values.phone}
              />
            </Stack>
            <InputWord
              size="small"
              name="email"
              label="Correo Electrónico"
              helpText="Ej: tucorreo@tudominio.com"
              regex={/^[a-z]+\.?_?\w+@[a-z]\w+\.([a-z][a-z]|[a-z][a-z][a-z])$/}
              value={(obj) => handleChange(obj)}
              text={values.email}
            />
            <InputWord
              size="small"
              name="id_car"
              label="Patente"
              helpText="Ej: 123PATE"
              regex={/^\w$/}
              value={(obj) => handleChange(obj)}
              text={values.id_car}
            />

            <SingleSelect
              options={['Verificado', 'Banned', 'Pendiente']}
              label="Status"
              value={values.status}
            />

            <MultipleSelectChip
              label="Regiones"
              name="regions"
              arr={['Region Metropolitana', 'Region de Valparaiso']}
              output={(obj) => handleMultipleSelector(obj)}
            />
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
      </DialogContent>
    </Dialog>
  );
}

ModalCarrier.propTypes = {
  showUp: PropTypes.bool,
  values: PropTypes.object,
  close: PropTypes.func,
};
