import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import TextField from '@mui/material/TextField';

const InputWord = ({
  size = '',
  name = '',
  label = '',
  helpText = '',
  regex,
  value = (f) => f,
}) => {
  const ref = useRef(null);
  const [data, setData] = useState({
    value: '',
    error: false,
    msg: helpText,
    rgx: regex,
  });

  const handleChange = (e) => {
    setData((prev) => {
      const output = {
        ...prev,
        value: e.target.value,
      };
      return output;
    });

    checkError(e.target.value);
    value({ name, value: e.target.value });
  };

  const checkError = (val) => {
    if (data.rgx.test(val) === false) {
      setData((prev) => {
        const obj = {
          ...prev,
          error: true,
        };
        return obj;
      });
    } else {
      setData((prev) => {
        const obj = {
          ...prev,
          error: false,
        };
        return obj;
      });
    }
  };

  return (
    <TextField
      ref={ref}
      size={size}
      name={name}
      label={label}
      onChange={handleChange}
      error={data.error}
      helperText={data.error ? data.msg : ''}
    />
  );
};

InputWord.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.string,
  regex: PropTypes.instanceOf(RegExp),
  value: PropTypes.func,
};

export default InputWord;
