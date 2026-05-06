# Backend integratsiyasi — checklist

Ushbu ro‘yxat **buyurtmachi** va **backend dasturchi** o‘rtasidagi topshiriqlarni aniqlash uchun.

---

## A. Buyurtmachi (siz) tomonda

| # | Vazifa | Holat |
|---|--------|--------|
| 1 | GitHub repoga backendchi uchun **Contributor** yoki repo **access** berish | ☐ |
| 2 | Production **frontend domeni**ni yozib berish (CORS uchun), masalan `https://texnopark.uz` | ☐ |
| 3 | Kelajakdagi **API domeni**ni kelishish (masalan `https://api.texnopark.uz`) | ☐ |
| 4 | SSL sertifikatlar — odatda hosting yoki Cloudflare bilan | ☐ |
| 5 | `docs/api/CONTRACT.md` va `openapi.yaml` ni backendchi bilan **tanishganlik**ni tasdiqlash | ☐ |
| 6 | Production build uchun `.env` da `VITE_API_ORIGIN` ni **backend tayyor bo‘lgach** qo‘yish | ☐ |
| 7 | Staging muhiti kerak bo‘lsa — alohida domen yoki subdomen | ☐ |

---

## B. Backend dasturchi tomonda

| # | Vazifa | Holat |
|---|--------|--------|
| 1 | `CONTRACT.md` va `openapi.yaml` bo‘yicha API ni implementatsiya qilish | ☐ |
| 2 | CORS — development va production frontend origin lar | ☐ |
| 3 | HTTPS (production) | ☐ |
| 4 | Ma’lumotlar bazasi + migratsiyalar + backup rejasi | ☐ |
| 5 | Fayl yuklash (`add-news`) va `/api/media` — xavfsizlik (path traversal, tip tekshiruvi) | ☐ |
| 6 | Admin operatsiyalar uchun server tomonda **autentifikatsiya** (kamida JWT/sessiya — tavsiya) | ☐ |
| 7 | `.env.example` (backend uchun) — **sirlar commitsiz** | ☐ |
| 8 | API ishlayotgan URL ni buyurtmachiga yozma berish | ☐ |

---

## C. Qabul qilish (QA)

| # | Sinov | Kutilyotgan natija |
|---|-------|---------------------|
| 1 | `GET /api/all-news` | `200`, `message` massivi |
| 2 | `POST /api/add-news` (rasm + matn) | `200/201`, keyin ro‘yxatda ko‘rinadi |
| 3 | Sayt `/news` | Yangilik kartalari |
| 4 | `GET /api/media/...` | Rasm ochiladi |
| 5 | Admin login → OTP | `sessionStorage`, dashboard ochiladi |
| 6 | `DELETE /api/delete-news/:id` | Yangilik yo‘qoladi |

---

## D. Hujjatlar joylashuvi

| Fayl | Maqsad |
|------|--------|
| `docs/api/CONTRACT.md` | To‘liq kontrakt |
| `docs/api/openapi.yaml` | Swagger / codegen uchun |
| `BACKEND_HANDOFF.md` | Qisqa kirish nuqtasi |

---

*Versiya 1.0 — loyiha bilan birga yangilanadi.*
