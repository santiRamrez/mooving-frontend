import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CarrierTableRow({
  selected,
  name,
  avatarUrl,
  lastname,
  email,
  local_id,
  phone,
  scope,
  status,
  id_car,
  createdAt,
  updatedAt,
  handleClick,
  sendId = (f) => f,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = (e) => {
    setOpen(null);
  };

  const handleEdit = (e) => {
    handleCloseMenu();
    sendId(local_id);
  };

  const colorLabel = (str) => {
    if (str === 'Pendiente') return 'warning';
    if (str === 'Verificado') return 'success';
    return 'error';
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="none" size="small" sx={{ display: 'flex' }}>
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
          <IconButton onClick={handleOpenMenu} sx={{ mx: '0px' }}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>

        <TableCell scope="row" size="small" sx={{ maxWidth: 200, overflow: 'hidden' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />
            <Typography variant="subtitle3" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell size="small" sx={{ width: 50, maxWidth: 100, overflow: 'hidden', px: '2px' }}>
          <Typography variant="subtitle3" noWrap>
            {lastname}
          </Typography>
        </TableCell>

        <TableCell size="small" align="center" sx={{ maxWidth: 100, overflow: 'hidden' }}>
          {local_id}
        </TableCell>

        <TableCell size="small" sx={{ maxWidth: 120, overflow: 'hidden' }}>
          <Typography variant="subtitle3">{email}</Typography>
        </TableCell>

        <TableCell size="small" align="center" sx={{ maxWidth: 100, overflow: 'hidden' }}>
          {id_car}
        </TableCell>

        <TableCell
          size="small"
          align="center"
          sx={{ maxWidth: 130, overflow: 'hidden', px: '5px', minWidth: 120 }}
        >
          {phone}
        </TableCell>

        <TableCell padding="none" align="center">
          {scope}
        </TableCell>

        <TableCell padding="none" align="center">
          {createdAt}
        </TableCell>

        <TableCell padding="none" align="center">
          {updatedAt}
        </TableCell>

        <TableCell size="small" padding="none" align="center">
          <Label color={colorLabel(status)}>{status}</Label>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleEdit}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

CarrierTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  name: PropTypes.any,
  lastname: PropTypes.any,
  handleClick: PropTypes.func,
  email: PropTypes.any,
  scope: PropTypes.any,
  local_id: PropTypes.any,
  phone: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
  id_car: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  sendId: PropTypes.func,
};
