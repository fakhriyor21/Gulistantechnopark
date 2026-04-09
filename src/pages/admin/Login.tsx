import React, { useState } from "react";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useMask } from "@react-input/mask";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { PiSpinnerGapLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../components/ui/input-otp";
import { loginAdmin, otpCheck } from "../../server/Admin/Server";
import { useToast } from "../../hooks/use-toast";

const loginSchema = z.object({
  phone: z
    .string()
    .min(19, "Telefon raqam to'liq kiritilmagan")
    .regex(
      /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
      "Telefon raqam noto'g'ri formatda"
    ),
  password: z
    .string()
    .min(6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak"),
});

const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "Tasdiqlash kodi 6 ta belgidan iborat bo'lishi kerak")
    .regex(
      /^\d{6}$/,
      "Tasdiqlash kodi faqat raqamlardan iborat bo'lishi kerak"
    ),
});

export default function Login() {
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [formErrors, setFormErrors] = useState({ phone: "", password: "" });
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const inputRef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });
  const navigate = useNavigate();
  const [verification, setVerification] = useState(true);
  const { toast } = useToast();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (verification) {
      const result = loginSchema.safeParse(formData);
      if (!result.success) {
        const errors = result.error.format();
        setFormErrors({
          phone: errors.phone?._errors[0] || "",
          password: errors.password?._errors[0] || "",
        });
        setLoading(false);
      } else {
        setFormErrors({ phone: "", password: "" });

        const loginServer = async () => {
          const response = await loginAdmin({
            phone: result.data.phone,
            password: result.data.password,
          });
          setLoading(false);

          if (!response.status === false) {
            setVerification(false);
            toast({
              title: `SMS kod yuborildi`,
              description: `${result.data.phone} raqamiga telegram bot orqali SMS kod yuborildi!`,
            });
          } else {
            toast({
              title: "Login yoki parol xato",
              variant: "destructive",
              description: "Kechirasiz ma'lumotlarni tekshirib qayta kiriting!",
            });
          }
        };
        loginServer();
      }
    } else {
      const otpResult = otpSchema.safeParse({ otp: otpCode });
      if (!otpResult.success) {
        setOtpError(otpResult.error.format().otp?._errors[0] || "");
      } else {
        setOtpError("");

        const otpCheckFunc = async () => {
          const response = await otpCheck({
            phone: formData.phone,
            code: otpResult.data.otp,
          });

          if (!response.status === false) {
            setLoading(false);
            const currentTime = new Date().getTime();

            const dataWithExpiry = {
              data: response.data,
              expiry: currentTime + 60 * 60 * 1000,
            };

            sessionStorage.setItem("userData", JSON.stringify(dataWithExpiry));
            toast({
              title: "Ma'lumotlaringiz tekshirildi",
              description: `Admin paneliga kirishingiz mumkin xurmatli ${response.message.fullname}!`,
            });
            navigate("/admin/dashboard");
          } else {
            setLoading(false);
            toast({
              title: "Tasdiqlash kodi xato",
              description: "Tasdiqlash kodi xato, tekshirib qayta kiriting!",
              variant: "destructive",
            });
          }
        };

        otpCheckFunc();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleOtpChange = (value: string) => {
    setOtpCode(value);
  };

  return (
    <div className="flex justify-center items-center pt-40">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin paneliga kirish</CardTitle>
          <CardDescription>
            {verification
              ? "Adminga berilgan login va parolni kiriting"
              : "Telegramga yuborilgan tasdiqlash kodini kiriting"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {verification ? (
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone">Telefon raqam</Label>
                  <Input
                    id="phone"
                    placeholder="+998 (__) ___-__-__"
                    ref={inputRef}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {formErrors.phone && (
                    <span className="text-red-500">{formErrors.phone}</span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Parol</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Parolingizni kiriting"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {formErrors.password && (
                    <span className="text-red-500">{formErrors.password}</span>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-1.5">
                <Label>Tasdiqlash kodini kiriting</Label>
                <div className="flex flex-col space-y-1.5 justify-center items-center">
                  <InputOTP
                    maxLength={6}
                    value={otpCode}
                    onChange={handleOtpChange}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  {otpError && <span className="text-red-500">{otpError}</span>}
                </div>
              </div>
            )}
            <CardFooter className="flex justify-between mt-4">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <PiSpinnerGapLight className="text-2xl animate-spin" />
                ) : verification ? (
                  "Kirish"
                ) : (
                  "Tasdiqlash"
                )}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
