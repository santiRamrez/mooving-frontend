import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Resumen',
    path: '/dashboard',
    icon: <BarChartOutlinedIcon />,
  },
  {
    title: 'Transportistas',
    path: '/carrier',
    icon: <LocalShippingOutlinedIcon />,
  },
  {
    title: 'Solicitantes de Fletes',
    path: '/petitioner',
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    title: 'Fletes Realizados',
    path: '/shipments',
    icon: <ReceiptOutlinedIcon />,
  },
];

export default navConfig;
