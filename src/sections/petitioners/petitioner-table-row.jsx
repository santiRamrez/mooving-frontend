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

export default function PetitionerTableRow({
  selected,
  name,
  avatarUrl,
  lastname,
  email,
  local_id,
  phone,
  scope,
  status,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const colorLabel = (str) => {
    if (str === 'Pendiente') return 'warning';
    if (str === 'Verificado') return 'success';
    return 'error';
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />
            <Typography variant="subtitle3" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{lastname}</TableCell>

        <TableCell>{email}</TableCell>

        <TableCell>{local_id}</TableCell>

        <TableCell>{phone}</TableCell>

        <TableCell>{scope}</TableCell>

        <TableCell>
          <Label color={colorLabel(status)}>{status}</Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
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
        <MenuItem onClick={handleCloseMenu}>
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

PetitionerTableRow.propTypes = {
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
};
