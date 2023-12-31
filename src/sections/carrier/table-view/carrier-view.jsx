import { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { formatDateOfTables } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';
import TableNoData from 'src/components/table/table-no-data';
import TableEmptyRows from 'src/components/table/table-empty-rows';

import CarrierTableRow from './carrier-table-row';
import CarrierTableHead from './carrier-table-head';
import CarrierTableToolbar from './carrier-table-toolbar';
import { emptyRows, applyFilter, getComparator } from './utils';

// ----------------------------------------------------------------------

export default function CarrierTableView({ data = [], toEdit = (f) => f }) {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  // ---------------- Table Methods ----------

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: data,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Listado de Transportistas</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Agregar transportista
        </Button>
      </Stack>
      <Card>
        <CarrierTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <TableContainer sx={{ overflow: 'auto' }}>
          <Table sx={{ minWidth: 800 }}>
            <CarrierTableHead
              order={order}
              orderBy={orderBy}
              rowCount={data.length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={[
                { id: 'name', label: 'Nombre', align: 'center' },
                { id: 'lastname', label: 'Apellido' },
                { id: 'local_id', label: 'Rut', align: 'center' },
                { id: 'email', label: 'Email', align: 'center' },
                { id: 'id_car', label: 'Patente', align: 'center' },
                { id: 'phone', label: 'Teléfono', align: 'center' },
                { id: 'scope', label: 'Región', align: 'center' },
                { id: 'createdAt', label: 'Creación', align: 'center' },
                { id: 'updatedAt', label: 'Modificación', align: 'center' },
                { id: 'status', label: 'Status', align: 'center' },
                { id: 'options', label: '', align: 'left' },
              ]}
            />
            <TableBody>
              {dataFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <CarrierTableRow
                    handleClick={() => handleClick(row.name)}
                    key={row._id}
                    name={row.name}
                    lastname={row.lastname}
                    email={row.email}
                    local_id={row._id}
                    avatarUrl={row.image}
                    phone={row.phone}
                    scope="RM"
                    status={row.status}
                    id_car={row.car}
                    createdAt={formatDateOfTables(row.created_at)}
                    updatedAt={formatDateOfTables(row.updated_at)}
                    selected={selected.indexOf(row.name) !== -1}
                    sendId={(id) => toEdit(id)}
                  />
                ))}

              <TableEmptyRows height={77} emptyRows={emptyRows(page, rowsPerPage, data.length)} />

              {notFound && <TableNoData query={filterName} />}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          page={page}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}

CarrierTableView.propTypes = {
  data: PropTypes.array,
  toEdit: PropTypes.func,
};
