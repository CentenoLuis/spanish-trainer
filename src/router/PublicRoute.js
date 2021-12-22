import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

function PublicRoute({ children }) {
  const auth = useAuth();
  return !auth.user ? children : <Navigate to="/quizzes/1" />;
}

export default PublicRoute;
