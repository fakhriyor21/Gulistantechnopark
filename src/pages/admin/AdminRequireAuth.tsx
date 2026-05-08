import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LiaSpinnerSolid } from "react-icons/lia";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminRequireAuth() {
  const { user, loading, firebaseReady } = useAuth();
  const location = useLocation();

  if (!firebaseReady) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-[#081426] px-4 text-center text-white">
        <p className="max-w-md text-sm text-white/80">
          Firebase sozlanmagan. Loyiha ildizida `.env` fayl yarating va VITE_FIREBASE_* qiymatlarini kiriting.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#081426]">
        <LiaSpinnerSolid className="size-10 animate-spin text-sky-400" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
