import { Helmet } from 'react-helmet-async';

import { PetitionerTableView } from 'src/sections/petitioner/table-view';

// ----------------------------------------------------------------------

export default function PetitionersPage() {
  return (
    <>
      <Helmet>
        <title> Solicitantes de Flete | Mooving App </title>
      </Helmet>

      <PetitionerTableView />
    </>
  );
}
