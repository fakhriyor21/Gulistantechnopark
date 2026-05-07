import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { useToast } from "../../hooks/use-toast";
import { loginAdmin } from "@/lib/adminStorage";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (loginAdmin(username, password)) {
      toast({
        title: "Kirish muvaffaqiyatli",
        description: "Admin panelga muvaffaqiyatli kirdingiz.",
      });
      navigate("/admin/dashboard", { replace: true });
    } else {
      toast({
        title: "Kirishda xatolik",
        description: "Login yoki parol noto'g'ri. Login: admin, Parol: admin123",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 px-4 dark:from-slate-900 dark:to-slate-800">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Admin Panel</CardTitle>
          <CardDescription>Admin akkauntga kirish</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Login</Label>
              <Input
                id="username"
                type="text"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
              />
              <p className="text-xs text-slate-500 dark:text-slate-400">Demo: admin</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Parol</Label>
              <Input
                id="password"
                type="password"
                placeholder="admin123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <p className="text-xs text-slate-500 dark:text-slate-400">Demo: admin123</p>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Yuklanmoqda..." : "Kirish"}
            </Button>
          </form>

          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">Frontend-only Demo</p>
            <p className="mt-1 text-xs text-blue-800 dark:text-blue-200">
              Bu demo admin paneli. Ma'lumotlar localStorage'da saqlanadi.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
