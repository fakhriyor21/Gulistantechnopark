import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const userData = sessionStorage.getItem("userData");

  if (!userData) {
    return <Navigate to="/admin" replace />;
  }

  try {
    const parsed = JSON.parse(userData) as { expiry?: number };
    if (!parsed?.expiry || Date.now() > parsed.expiry) {
      sessionStorage.removeItem("userData");
      return <Navigate to="/admin" replace />;
    }
  } catch {
    sessionStorage.removeItem("userData");
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
