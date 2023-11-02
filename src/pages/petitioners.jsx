import { Helmet } from 'react-helmet-async';

import { PetitionersView } from 'src/sections/petitioners/view';

// ----------------------------------------------------------------------

export default function PetitionersPage() {
  return (
    <>
      <Helmet>
        <title> Solicitantes de Flete | Mooving App </title>
      </Helmet>

      <PetitionersView />
    </>
  );
}
