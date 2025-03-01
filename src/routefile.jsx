
import Layout from './components/layout';
import AboutUs from './pages/about-us/page';
import ContactPage from './pages/contact-us/page';
import CsrActivity from './pages/csr-activity/page';
import ErrorPage from './pages/error';
import ExportActivity from './pages/export-activity/page';
import Whyus from './pages/home/why-us';
import Founders from './pages/home/founders';
import Certificates from './pages/certificates/page';
import HomePage from './pages/home/page';
import InternationalConference from './pages/international-conference/page';
import OurCorporateHouse from './pages/our-corporate-house/page';
import OurWareHouse from './pages/our-warehouse/page';
import ProductPage from './pages/products/page';
import SpecificProductPage from './pages/products/product-detail';
import DealerShip from './pages/dealership/dealer-ship';
import Blogs from './pages/blogs/page';
import BlogDetailsCard from './pages/blogs/blog-details-card';

export const routeConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '',
        element: <HomePage />,
      },
      {
        path: 'product',
        element: <ProductPage />,
      },
      {
        path: 'product-detail',
        element: <SpecificProductPage />,
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
        path: 'why-us',
        element: <Whyus />,
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
        path: 'certificate',
        element: <Certificates />,
      },
      {
        path: 'dealership',
        element: <DealerShip />,
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
      {
        path: 'blogs/:id',
        element: <BlogDetailsCard />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];
