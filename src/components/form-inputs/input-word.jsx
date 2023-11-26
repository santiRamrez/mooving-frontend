import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import TextField from '@mui/material/TextField';

const InputWord = ({
  size = '',
  type = 'text',
  name = '',
  label = '',
  helpText = '',
  regex,
  value = (f) => f,
  text = '',
}) => {
  const ref = useRef(null);
  const [updated, setUpdated] = useState(false);
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
    setUpdated(true);
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
      type={type}
      ref={ref}
      size={size}
      name={name}
      label={label}
      onChange={handleChange}
      error={data.error}
      value={updated ? data.value : text}
      helperText={data.error ? data.msg : ''}
    />
  );
};

InputWord.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.string,
  regex: PropTypes.instanceOf(RegExp),
  value: PropTypes.func,
  text: PropTypes.string,
};

export default InputWord;
