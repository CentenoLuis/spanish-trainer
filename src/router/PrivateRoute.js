import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

function PrivateRoute({ hasRole: role, children }) {
  const auth = useAuth();
  if (role && auth.user?.role !== role) return <Navigate to="/" />;
  return auth.user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
