import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const { user, firebaseReady, signIn, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  const from = (location.state as { from?: string } | undefined)?.from;

  if (loading) return null;
  if (user) {
    return <Navigate to={from && from !== "/admin/login" ? from : "/admin/dashboard"} replace />;
  }

  if (!firebaseReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#081426] px-4">
        <Card className="w-full max-w-md border-[#172333] bg-[#0d1829] text-white shadow-xl">
          <CardHeader>
            <CardTitle>Firebase kerak</CardTitle>
            <CardDescription className="text-white/65">
              `.env` faylida VITE_FIREBASE_* o‘zgaruvchilarini sozlang va loyihani qayta ishga tushiring.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      await signIn(email, password);
      toast({ title: "Kirish muvaffaqiyatli" });
    } catch (err) {
      toast({
        title: "Xatolik",
        description: "Email yoki parol noto‘g‘ri.",
        variant: "destructive",
      });
      console.error(err);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#081426] via-[#0a1628] to-[#060b14] px-4">
      <Card className="w-full max-w-md border-[#172333] bg-white/98 shadow-2xl dark:bg-[#0d1829] dark:text-white">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-[#0B4397] dark:text-white">Admin kirish</CardTitle>
          <CardDescription className="dark:text-white/70">
            Firebase Auth email va parolingiz bilan kiring.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={busy}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Parol</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={busy}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#0B4397] hover:bg-[#093680]"
              disabled={busy}
            >
              {busy ? "Kutilmoqda..." : "Kirish"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
