# Przyjęcie z okazji obrony rozprawy doktorskiej

Strona informacyjna i zaproszenie na przyjęcie z okazji obrony rozprawy doktorskiej. Aplikacja jest zbudowana w React Router 7 i przygotowana do wdrożenia na Cloudflare Workers.

## Zawartość

- strona główna z informacjami o wydarzeniu, miejscem, dojazdem i harmonogramem;
- formularz potwierdzenia przybycia (RSVP);
- FAQ i dane kontaktowe;
- menu przyjęcia;
- galeria zdjęć z folderu Google Drive.

## Wymagania

- Node.js 20 lub nowszy;
- npm.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Domyślnie aplikacja będzie dostępna pod adresem `http://localhost:5173`.

## Dostępne skrypty

| Polecenie | Zastosowanie |
| --- | --- |
| `npm run dev` | Uruchamia serwer developerski React Router. |
| `npm run typecheck` | Generuje typy tras i uruchamia sprawdzanie TypeScript. |
| `npm run build` | Buduje wersję produkcyjną w katalogu `build`. |
| `npm run start` | Uruchamia zbudowany serwer produkcyjny. |
| `npm run deploy` | Buduje aplikację i wdraża ją przez Wrangler na Cloudflare Workers. |

## Edycja treści

Teksty wydarzenia, etykiety nawigacji, harmonogram, menu, FAQ i dane kontaktowe znajdują się w [app/lib/site-content.ts](app/lib/site-content.ts). Zdjęcia używane przez stronę należy umieścić w katalogu [public](public).

Adresy stron:

- `/` - strona główna;
- `/faq` - najczęściej zadawane pytania;
- `/rsvp` - potwierdzenie przybycia;
- `/contact` - kontakt;
- `/menu` - menu;
- `/galeria` - galeria zdjęć.

## Wdrożenie

Konfiguracja Cloudflare znajduje się w [wrangler.jsonc](wrangler.jsonc). Po skonfigurowaniu dostępu do Cloudflare uruchom:

```bash
npm run deploy
```

Skrypt buduje klienta i serwer, a następnie przekazuje wynik do Wrangler. Katalog statycznych plików produkcyjnych to `build/client`.
