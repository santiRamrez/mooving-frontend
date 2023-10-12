import { Helmet } from 'react-helmet-async';

import { RegisterUserView } from 'src/sections/register-user';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Registro Nuevo Usuario | Mooving </title>
      </Helmet>

      <RegisterUserView />
    </>
  );
}
