import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NewsManagement from "./NewsManagement";
import Messages from "./Messages";
import PrivateRoute from "../../PrivateRoute";
import { isAdminAuthenticated } from "@/lib/adminStorage";

export default function AppAdmin() {
  return (
    <Routes>
      <Route
        index
        element={
          isAdminAuthenticated() ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Navigate to="/admin/login" replace />
          )
        }
      />
      <Route path="login" element={<Login />} />
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="news"
        element={
          <PrivateRoute>
            <NewsManagement />
          </PrivateRoute>
        }
      />
      <Route
        path="add-news"
        element={
          <PrivateRoute>
            <Navigate to="/admin/news" replace />
          </PrivateRoute>
        }
      />
      <Route
        path="messages"
        element={
          <PrivateRoute>
            <Messages />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
}
