import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const useAuth = () => {
  let loggedIn=false;
  const {  user } = useSelector(state => state.auth)
  // const user = { loggedIn: false };
  if(user!==null){
    loggedIn=true
  }
  else{
    loggedIn=false

  }
  return loggedIn;
};

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? < Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
