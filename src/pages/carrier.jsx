import { Helmet } from 'react-helmet-async';
// import { useLoaderData } from 'react-router-dom';

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
