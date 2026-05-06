# Backend integratsiyasi — kirish

**Guliston Yoshlar Texnoparki** frontend (React / Vite) uchun backend alohida ishlab chiqiladi.  
Rasmiy texnik spetsifikatsiya va topshirish checklist **quyidagi hujjatlar**da jamlangan.

---

## Asosiy hujjatlar (professional paket)

| Prioritet | Fayl | Vazifa |
|-----------|------|--------|
| **1** | [**docs/api/CONTRACT.md**](docs/api/CONTRACT.md) | To‘liq API kontrakt: endpointlar, JSON misollar, CORS, xavfsizlik, QA mezonlari, mermaid sxemalar |
| **2** | [**docs/api/openapi.yaml**](docs/api/openapi.yaml) | OpenAPI 3.0 — Postman, Swagger, kod generatsiyasi |
| **3** | [**docs/HANDOFF_CHECKLIST.md**](docs/HANDOFF_CHECKLIST.md) | Buyurtmachi va backendchi vazifalari (checkbox) |
| **4** | [**docs/api/README.md**](docs/api/README.md) | API papkasiga qisqa yo‘riqnoma |

---

## Tezkor ma’lumot

- **API prefiks:** `/api`
- **Frontend kod:** `src/server/Admin/Server.ts`, `src/lib/apiOrigin.ts`
- **Dev:** backend `localhost:3000`; Vite `5173` dan `/api` **proksi** (`vite.config.ts`)
- **Prod:** frontend build da `VITE_API_ORIGIN` (oxirida `/` yo‘q)

---

## Kontakt va versiya

Kontrakt versiyasi va sanasi: **`docs/api/CONTRACT.md`** boshidagi jadval.

O‘zgarishlar faqat **frontend va backend kelishuvi** bilan `CONTRACT.md` va `openapi.yaml` ga kiritiladi.
