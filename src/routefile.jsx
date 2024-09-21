import App from './App'
import ContactPage from './pages/contact-us/page'
import ErrorPage from './pages/error'
import HomePage from './pages/home/page'
import ProductPage from './pages/products/page'


export const routeConfig = [
  {
    path:'/home',
    element: <HomePage/> 
  },
  {
    path:'/product',
    element: <ProductPage/> 
  },
  {
    path:'/contact',
    element: <ContactPage/> 
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
   
  },

]