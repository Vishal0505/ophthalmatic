
import Layout from './components/layout';
import AboutUs from './pages/about-us/page';
import ContactPage from './pages/contact-us/page';
import CsrActivity from './pages/csr-activity/page';
import ErrorPage from './pages/error';
import ExportActivity from './pages/export-activity/page';
import CompanyOverview from './pages/home/companyoverview';
import Founders from './pages/home/founders';
import Certificates from './pages/home/certificates';
import HomePage from './pages/home/page';
import InternationalConference from './pages/international-conference/page';
import OurCorporateHouse from './pages/our-corporate-house/page';
import OurWareHouse from './pages/our-warehouse/page';
import ProductPage from './pages/products/page';

export const routeConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product',
        element: <ProductPage />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'our-team',
        element: <Founders />,
      },
      {
        path: 'company-overview',
        element: <CompanyOverview />,
      },
      {
        path: 'corporate-house',
        element: <OurCorporateHouse />,
      },
      {
        path: 'ware-house',
        element: <OurWareHouse />,
      },
      {
        path: 'csr-activity',
        element: <CsrActivity />,
      },
      {
        path: 'export-activity',
        element: <ExportActivity />,
      },
      {
        path: 'international-conference',
        element: <InternationalConference />,
      },
      {
        path: 'certificates',
        element: <Certificates />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];
