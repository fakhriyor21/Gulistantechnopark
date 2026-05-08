import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AdminRequireAuth from "./AdminRequireAuth";
import AdminLayout from "./AdminLayout";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AdminMessages from "./AdminMessages";
import AdminNews from "./AdminNews";
import AdminAbout from "./AdminAbout";

export default function AppAdmin() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route index element={<Navigate to={user ? "dashboard" : "login"} replace />} />
      <Route path="login" element={<AdminLogin />} />

      <Route element={<AdminRequireAuth />}>
        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="news" element={<AdminNews />} />
          <Route path="about" element={<AdminAbout />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
