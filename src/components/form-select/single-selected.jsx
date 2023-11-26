import { useState } from 'react';
import PropTypes from 'prop-types';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

// --------------- Styles --------------

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

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

// ------------- Main Component ----------

export default function SingleSelect({ options = [], label = 'Label', value = '' }) {
  const theme = useTheme();
  const [selected, setSelected] = useState(value);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const renderOptions = () =>
    options.map((val, i) => (
      <MenuItem key={i} value={val} style={getStyles(val, val, theme)}>
        {val}
      </MenuItem>
    ));

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        label={label}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        {renderOptions()}
      </Select>
    </FormControl>
  );
}

SingleSelect.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  value: PropTypes.string,
};
