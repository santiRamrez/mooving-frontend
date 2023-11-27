import { Helmet } from 'react-helmet-async';

import { ShipmentsTableView } from 'src/sections/shipments/table-view';

// ----------------------------------------------------------------------

export default function ShipmentsPage() {
  return (
    <>
      <Helmet>
        <title> Envíos | Mooving App </title>
      </Helmet>

      <ShipmentsTableView />
    </>
  );
}
