// import { useState } from 'react';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

export default function PetitionerTableView({ data = [], toEdit = (f) => f }) {}

PetitionerTableView.propTypes = {
  data: PropTypes.array,
  toEdit: PropTypes.func,
};
