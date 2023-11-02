import { Helmet } from 'react-helmet-async';

import { ShipmentsView } from 'src/sections/shipments/view';

// ----------------------------------------------------------------------

export default function ShipmentsPage() {
  return (
    <>
      <Helmet>
        <title> Envíos | Mooving App </title>
      </Helmet>

      <ShipmentsView />
    </>
  );
}
