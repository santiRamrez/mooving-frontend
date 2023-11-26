import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelectChip({ arr, label, name, output = (obj) => obj }) {
  const theme = useTheme();
  const [descrip, setDescrip] = useState([]);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    output({ name, value: typeof value === 'string' ? value.split(',') : value });
    setDescrip(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 1 }} size="small">
        <InputLabel sx={{ bgcolor: 'white', px: 1 / 2 }} id="multiple-chip-label">
          {label}
        </InputLabel>
        <Select
          labelId="multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          name={name}
          value={descrip}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {arr.map((val) => (
            <MenuItem key={val} value={val} style={getStyles(val, descrip, theme)}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

MultipleSelectChip.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  name: PropTypes.string,
  output: PropTypes.func,
};

export default MultipleSelectChip;
