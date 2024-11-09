import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import './styles/App.css';
import { AuthProvider } from './context/AuthProvider.jsx';



createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>

  

)
