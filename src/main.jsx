import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeConfig } from './routefile'
import WhatsappSticky from './components/whatsapp-sticky';


const router = createBrowserRouter(routeConfig);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <WhatsappSticky />
  </StrictMode>,
)
