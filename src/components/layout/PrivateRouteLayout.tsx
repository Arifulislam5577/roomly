import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user, token } = useAppSelector((state) => state.auth);

  if (!user && !token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
