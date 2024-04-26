import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ children }) => {

  const location = useLocation();

  if (localStorage.getItem("token"))
    return children;

  return <Navigate to="/login" replace={true} state={{ from: location }} />
}

export default CheckAuth