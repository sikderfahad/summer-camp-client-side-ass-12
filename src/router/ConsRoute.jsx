import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";

const ConsRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner hFull={true} wFull={true}></Spinner>;
  }

  if (!user) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default ConsRoute;
