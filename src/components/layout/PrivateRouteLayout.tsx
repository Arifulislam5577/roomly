import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const PrivateUserRoute = ({ children }: { children: ReactNode }) => {
  const { user, token } = useAppSelector((state) => state.auth);

  if (!user && !token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

const PrivateAdminRoute = ({ children }: { children: ReactNode }) => {
  const { user, token } = useAppSelector((state) => state.auth);

  if (!user && !token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (user && user.role !== "admin") {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export { PrivateAdminRoute, PrivateUserRoute };
