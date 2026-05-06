import { useState } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useToast } from "../../hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { PiSpinnerGapLight } from "react-icons/pi";

const loginSchema = z.object({
  email: z.string().email("Iltimos, to‘g‘ri elektron pochta kiriting"),
  password: z
    .string()
    .min(6, "Parol kamida 6 ta belgidan iborat bo‘lishi kerak"),
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const formatted = result.error.format();
      setErrors({
        email: formatted.email?._errors[0] || "",
        password: formatted.password?._errors[0] || "",
      });
      setLoading(false);
      return;
    }

    setErrors({ email: "", password: "" });

    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      const user = credential.user;

      const dataWithExpiry = {
        email: user.email,
        uid: user.uid,
        expiry: Date.now() + 60 * 60 * 1000,
      };

      sessionStorage.setItem("userData", JSON.stringify(dataWithExpiry));

      toast({
        title: "Kirish muvaffaqiyatli",
        description: "Admin panelga muvaffaqiyatli kirdingiz.",
      });
      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
      toast({
        title: "Kirishda xatolik",
        description: "Email yoki parol noto‘g‘ri. Iltimos qaytadan urinib ko‘ring.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 dark:bg-[#050812]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin paneliga kirish</CardTitle>
          <CardDescription>Faqat email va parol orqali tizimga kiring.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@gmail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Parol</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Parolingizni kiriting"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">{errors.password}</span>
                )}
              </div>
            </div>
            <CardFooter className="pt-2">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <PiSpinnerGapLight className="text-2xl animate-spin" />
                ) : (
                  "Kirish"
                )}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
