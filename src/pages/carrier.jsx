import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// import { useLoaderData } from 'react-router-dom';

import { CarrierView } from 'src/sections/carrier/view';

// ----------------------------------------------------------------------

// Loaders
import { getCarriers } from '../http/carriers';

async function carrierData() {
  const carriers = await getCarriers();
  return { carriers };
}

export default function CarrierPage() {
  const [data, setData] = useState([{ hola: 'bebe' }]);

  useEffect(() => {
    carrierData().then((d) => setData(d.carriers));
  }, []);

  return (
    <>
      <Helmet>
        <title> Transportistas | Mooving </title>
      </Helmet>

      <CarrierView carriersData={data} />
    </>
  );
}
