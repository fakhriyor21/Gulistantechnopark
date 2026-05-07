import { useEffect, useState } from "react";
import NavbarAdmin from "../../components/Admin/Partials/Nabar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { LiaSpinnerSolid } from "react-icons/lia";
import { useToast } from "../../hooks/use-toast";
import { getContactMessages, saveContactMessages } from "@/lib/adminStorage";
import type { ContactMessageItem } from "@/types/admin";

export default function Messages() {
  const [messages, setMessages] = useState<ContactMessageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const items = getContactMessages();
      setMessages(items.sort((a, b) => b.id - a.id));
    } catch (error) {
      console.error(error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleToggleRead = (id: number) => {
    setMessages((prevMessages) => {
      const updated = prevMessages.map((msg) =>
        msg.id === id ? { ...msg, read: !msg.read } : msg,
      );
      saveContactMessages(updated);
      return updated;
    });
  };

  const handleDelete = (id: number) => {
    setMessages((prevMessages) => {
      const updated = prevMessages.filter((msg) => msg.id !== id);
      saveContactMessages(updated);
      toast({
        title: "Xabar o'chirildi",
        description: "Xabar muvaffaqiyatli o'chirildi.",
      });
      return updated;
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-[#08101B]">
        <LiaSpinnerSolid className="animate-spin text-blue-500 dark:text-white text-4xl" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08101B] pb-16">
      <NavbarAdmin />
      <div className="mx-auto w-full max-w-screen-2xl px-4 pb-10 pt-24 sm:px-6 lg:px-10">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Murojaat xabarlari
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Jami: {messages.length} xabar ({messages.filter((m) => !m.read).length} o'qilmagan)
          </p>
        </div>

        {messages.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            Hozircha hech qanday xabar yo'q.
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <Card
                key={msg.id}
                className={`overflow-hidden transition ${
                  msg.read
                    ? "bg-white dark:bg-slate-900"
                    : "border-blue-300 bg-blue-50 dark:border-blue-900 dark:bg-blue-950"
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <span>
                          {msg.firstName} {msg.lastName}
                        </span>
                        {!msg.read && (
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                        )}
                      </CardTitle>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        Kompaniya: {msg.company || "Belgilanmagan"}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Telefon: {msg.phone}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                        {new Date(msg.createdAt).toLocaleString("uz-UZ")}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={msg.read ? "outline" : "secondary"}
                        size="sm"
                        onClick={() => handleToggleRead(msg.id)}
                      >
                        {msg.read ? "O'qilgan" : "O'qilmagan"}
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(msg.id)}
                      >
                        O'chir
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                    {msg.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
