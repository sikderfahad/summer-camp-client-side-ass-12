import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <Spinner hFull={true} wFull={true}></Spinner>;
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to={"/login"} state={{ from: location.pathname }}></Navigate>
  );
};

export default PrivateRoute;
