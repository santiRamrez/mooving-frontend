import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import TextField from '@mui/material/TextField';

const InputWord = ({ size = '', name = '', label = '', error = false, helpText = '', regex }) => {
  const ref = useRef(null);
  const [data, setData] = useState({
    value: '',
    status: error,
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

    checkError();
  };

  const checkError = () => {
    if (data.rgx.test(data.value) === false) {
      setData((prev) => {
        const obj = {
          ...prev,
          status: true,
        };
        return obj;
      });
    } else {
      setData((prev) => {
        const obj = {
          ...prev,
          status: false,
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
      error={data.status}
      helperText={data.status ? data.msg : ''}
    />
  );
};

InputWord.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  helpText: PropTypes.string,
  regex: PropTypes.instanceOf(RegExp),
};

export default InputWord;
