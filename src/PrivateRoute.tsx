import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "./lib/adminStorage";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
