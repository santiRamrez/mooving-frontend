import { RouterProvider } from 'react-router-dom';
/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
// import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import routes from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
  // useScrollToTop();
  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
