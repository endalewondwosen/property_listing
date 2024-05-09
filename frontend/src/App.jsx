import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { ToastContainer } from 'react-toastify';
import { AddCategory } from './pages/AddCategory';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ClientMaster } from './pages/ClientMaster';
import { AllCategory } from './pages/AllCategory';
import { AddProperty } from './pages/AddProperty';
import { PropertyDetails } from './pages/PropertyDetails';
import { Properties } from './pages/Properties';
import ProtectedRoute from './pages/ProtectedRoute';
import { logedInUser } from './features/auth/authSlice';
import { store } from './store/store';
import { MyProperties } from './pages/MyProperties';
import { Myprofile } from './pages/Myprofile';
// admin
import { AdminMaster } from './pages/admin/AdminMaster';
import { Dashboard } from './pages/admin/Dashboard';
import { AllProperties } from './pages/admin/property/AllProperties';
axios.defaults.withCredentials = true
const App = () => {
  useEffect(() => {
    store.dispatch(logedInUser)

    setTimeout(() => {

      // setIsLoading(false);
    }, 1000);

 
    
  }, []);
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/admin' element={<AdminMaster />}>
          <Route index element={<Dashboard />} />
          <Route path='all-properties' element={<AllProperties />} />
        </Route>
        <Route path='/' element={<ClientMaster />}>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='propertyDetail/:id' element={<PropertyDetails />} />
          {/* <Route path="filter-result" element={<FilterResult />} /> */}
          <Route path="properties" element={<Properties />} />

          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
          <Route path="myproperties" element={<MyProperties />} />
          <Route path="myProfile" element={<Myprofile />} />
          <Route path='allCategory' element={<AllCategory />} />
          <Route path='addCategory' element={<AddCategory />} />
          <Route path='add-property' element={<AddProperty />} />
          </Route>

        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}
export default App;