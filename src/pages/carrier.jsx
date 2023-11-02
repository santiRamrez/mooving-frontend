import { Helmet } from 'react-helmet-async';

import { CarrierView } from 'src/sections/carrier/view';

// ----------------------------------------------------------------------

export default function CarrierPage() {
  return (
    <>
      <Helmet>
        <title> Transportistas | Mooving </title>
      </Helmet>

      <CarrierView />
    </>
  );
}
