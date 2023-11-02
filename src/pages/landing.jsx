import { Helmet } from 'react-helmet-async';

import LandingLayout from 'src/layouts/landing';

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title> Mooving | Logística de Fletes </title>
      </Helmet>
      <LandingLayout />
    </>
  );
}
