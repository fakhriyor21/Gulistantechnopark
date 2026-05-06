# API hujjatlari

| Fayl | Tavsif |
|------|--------|
| [**CONTRACT.md**](CONTRACT.md) | Backend uchun rasmiy REST kontrakt (versiya, sxemalar, xavfsizlik, QA) |
| [**openapi.yaml**](openapi.yaml) | OpenAPI 3.0 — Postman import, Swagger UI, codegen |
| [**../HANDOFF_CHECKLIST.md**](../HANDOFF_CHECKLIST.md) | Buyurtmachi va backendchi checklist |

## OpenAPI dan foydalanish

- **Swagger Editor:** https://editor.swagger.io — `openapi.yaml` ni import qiling.
- **Postman:** Import → OpenAPI 3.0 fayl.
- **Python:** `openapi-generator-cli` yoki `fastapi` da sxema referensi sifatida.

## Versiyalash

Kontrakt o‘zgarishi bilan `CONTRACT.md` sarlavhasidagi jadval va `openapi.yaml` dagi `info.version` yangilanishi kerak.
