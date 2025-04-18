# Menager Faktur

Aplikacja do zarządzania dokumentami i fakturami dla jednoosobowych działalności gospodarczych i firm.

## Funkcje

- Rejestracja i logowanie użytkowników
- Zarządzanie klientami
- Tworzenie i edycja faktur
- Generowanie dokumentów
- Przechowywanie danych online
- Intuicyjny interfejs użytkownika

## Wymagania

- Node.js (wersja 18 lub nowsza)
- PostgreSQL
- npm lub yarn

## Instalacja

1. Sklonuj repozytorium:
```bash
git clone https://github.com/your-username/menager-faktur.git
cd menager-faktur
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Skonfiguruj bazę danych:
- Utwórz bazę danych PostgreSQL
- Zaktualizuj plik `.env` z odpowiednimi danymi do połączenia z bazą danych

4. Uruchom migracje bazy danych:
```bash
npm run prisma:migrate
```

5. Wygeneruj klienta Prisma:
```bash
npm run prisma:generate
```

## Uruchomienie

1. Uruchom serwer deweloperski:
```bash
npm run dev
```

2. Otwórz przeglądarkę i przejdź do:
```
http://localhost:3000
```

## Struktura projektu

```
menager-faktur/
├── src/
│   ├── components/
│   │   └── auth/
│   │       ├── LoginForm.tsx
│   │       └── RegisterForm.tsx
│   │   ├── pages/
│   │   │   ├── api/
│   │   │   │   └── auth/
│   │   │   │       ├── login.ts
│   │   │   │       ├── register.ts
│   │   │   │       └── logout.ts
│   │   │   │   ├── login.tsx
│   │   │   │   ├── register.tsx
│   │   │   │   └── dashboard.tsx
│   │   │   └── ...
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   ├── .env
│   │   └── package.json
│   └── README.md
```

## Licencja

MIT
