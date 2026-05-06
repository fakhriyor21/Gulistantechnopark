# Guliston Yoshlar Texnoparki

Guliston Yoshlar Texnoparki veb-ilovasi — **React**, **TypeScript**, **Vite**.

**Ishlab chiquvchi:** Sadullayev Faxriyor  

**GitHub:** [github.com/fakhriyor21/Gulistantechnopark](https://github.com/fakhriyor21/Gulistantechnopark)

---

## O‘rnatish

```bash
npm install
```

## Ishlab chiqish serveri

```bash
npm run dev
```

Brauzer: `http://localhost:5173`

## Production build

```bash
npm run build
```

---

## Muhit o‘zgaruvchilari

Loyiha ildizida `.env` yarating (`/.env.example` namunasiga qarang):

| O‘zgaruvchi | Tavsif |
|-------------|--------|
| `VITE_API_ORIGIN` | Backend baz URL (oxirida **`/` bo‘lmasin**). **Development:** bo‘sh qoldirish mumkin — so‘rovlar Vite **proksi** orqali `localhost:3000` ga ketadi. **Production:** masalan `https://api.domen.uz`. |

---

## Backend integratsiyasi (backendchi uchun)

Rasmiy paket:

| Manba | Tavsif |
|-------|--------|
| [**BACKEND_HANDOFF.md**](BACKEND_HANDOFF.md) | Qisqa kirish va hujjatlar ro‘yxati |
| [**docs/api/CONTRACT.md**](docs/api/CONTRACT.md) | To‘liq REST kontrakt |
| [**docs/api/openapi.yaml**](docs/api/openapi.yaml) | OpenAPI 3.0 spetsifikatsiyasi |
| [**docs/HANDOFF_CHECKLIST.md**](docs/HANDOFF_CHECKLIST.md) | Topshirish checklist |

Backend **aynan shu kontrakt** bo‘yicha ishlaydi; o‘zgarishlar ikkala tom bilan kelishiladi.

---

## Loyiha tuzilishi (qisqa)

| Yo‘l | Mazmun |
|------|--------|
| `src/pages/` | Sahifalar |
| `src/components/` | Komponentlar |
| `src/server/Admin/Server.ts` | API chaqiriqlari |
| `src/lib/apiOrigin.ts` | Backend baz URL |
| `vite.config.ts` | Dev server va `/api` proksi |

---

## Skriptlar

| Buyruq | Vazifa |
|--------|--------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run preview` | Build ni mahalliy tekshirish |
| `npm run lint` | ESLint |
