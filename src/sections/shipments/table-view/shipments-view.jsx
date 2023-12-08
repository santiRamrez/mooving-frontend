// import { useState } from 'react';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

export default function ShipmentsTableView({ data = [], toEdit = (f) => f }) {}

ShipmentsTableView.propTypes = {
  data: PropTypes.array,
  toEdit: PropTypes.func,
};
