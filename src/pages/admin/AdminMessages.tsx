import { useEffect, useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  deleteMessage,
  setMessageRead,
  watchContactMessages,
} from "@/services/firebaseCms";
import { timestampToIsoString } from "@/lib/firestoreDates";
import type { ContactMessage } from "@/types/cms";

export default function AdminMessages() {
  const [rows, setRows] = useState<{ id: string; data: ContactMessage }[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsub = watchContactMessages(
      (list) => {
        setRows(list as { id: string; data: ContactMessage }[]);
        setLoading(false);
      },
      (e) => {
        console.error(e);
        setLoading(false);
        toast({ title: "Yuklashda xatolik", variant: "destructive" });
      },
    );
    return unsub;
  }, [toast]);

  if (loading) {
    return (
      <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
        <LiaSpinnerSolid className="size-5 animate-spin" />
        Yuklanmoqda...
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#33445F] dark:text-white">Murojaat xabarlari</h1>
      <div className="mt-6 space-y-4">
        {rows.length === 0 ? (
          <p className="text-slate-600 dark:text-slate-400">Hozircha xabar yo‘q.</p>
        ) : (
          rows.map(({ id, data: msg }) => {
            const iso = timestampToIsoString(msg.createdAt);
            return (
              <Card
                key={id}
                className={
                  msg.read
                    ? "border-slate-200 dark:border-[#172333]"
                    : "border-sky-300 bg-sky-50/80 dark:border-sky-900 dark:bg-sky-950/40"
                }
              >
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        {msg.firstName} {msg.lastName}
                      </CardTitle>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{msg.phone}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Kompaniya: {msg.company || "—"}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {iso ? new Date(iso).toLocaleString("uz-UZ") : "—"}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant={msg.read ? "outline" : "secondary"}
                        onClick={() =>
                          void (async () => {
                            await setMessageRead(id, !msg.read);
                            toast({ title: msg.read ? "O‘qilmagan deb belgilandi" : "O‘qildi deb belgilandi" });
                          })()
                        }
                      >
                        {msg.read ? "O‘qilgan" : "O‘qildi deb belgilash"}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() =>
                          void (async () => {
                            await deleteMessage(id);
                            toast({ title: "O‘chirildi" });
                          })()
                        }
                      >
                        O‘chirish
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-300">{msg.message}</p>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}
