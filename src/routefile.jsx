
import Layout from './components/layout';
import ContactPage from './pages/contact-us/page';
import ErrorPage from './pages/error';
import Certificates from './pages/home/certificates';
import HomePage from './pages/home/page';
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
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'certificates',
        element: <Certificates />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];
