# 🎭 E2E Playwright + TypeScript

Projekt zawiera automatyczne testy end-to-end (E2E) napisane z wykorzystaniem **Playwright** oraz **TypeScript**. Został zorganizowany zgodnie ze wzorcem **Page Object Model (POM)**, co ułatwia utrzymanie kodu, jego rozwój oraz ponowne wykorzystanie komponentów.

---

# 🚀 Wymagania wstępne

Przed rozpoczęciem pracy upewnij się, że masz zainstalowane:

- **Node.js** (zalecana wersja LTS)
- **Git**

Jeżeli nie masz zainstalowanego Node.js, pobierz go ze strony:

https://nodejs.org/

Sprawdzenie poprawnej instalacji:

```bash
node -v
npm -v
git --version
```

---

# 📥 Instalacja projektu

## 1. Sklonuj repozytorium

```bash
git clone https://github.com/dariuszdx/e2e-Playwright-TS.git
```

## 2. Przejdź do katalogu projektu

```bash
cd e2e-Playwright-TS
```

## 3. Zainstaluj wszystkie zależności

```bash
npm install
```

## 4. Zainstaluj przeglądarki Playwright

Playwright korzysta z własnych wersji przeglądarek (Chromium, Firefox oraz WebKit).

```bash
npx playwright install
```

Po wykonaniu powyższych kroków projekt jest gotowy do uruchamiania testów.

---

# ▶️ Uruchamianie testów

## Uruchomienie wszystkich testów

```bash
npx playwright test
```

Uruchamia testy w trybie **Headless**, który jest domyślnym trybem działania Playwright i najczęściej wykorzystywany jest w środowiskach CI/CD.

---

## Uruchomienie testów z widoczną przeglądarką

```bash
npx playwright test --headed
```

Tryb **Headed** pozwala obserwować wykonywanie testów w czasie rzeczywistym.

---

## Uruchomienie Playwright UI Mode

```bash
npx playwright test --ui
```

UI Mode umożliwia:

- uruchamianie pojedynczych testów,
- debugowanie krok po kroku,
- przeglądanie logów,
- analizę screenshotów i trace.

Jest to najlepszy tryb do tworzenia i debugowania testów.

---

# 📊 Raport z testów

Po zakończeniu wykonywania testów Playwright automatycznie generuje raport HTML.

Aby go otworzyć:

```bash
npx playwright show-report
```

Raport zawiera:

- status wykonanych testów,
- czas wykonania,
- screenshoty błędów,
- trace,
- logi,
- informacje diagnostyczne.

---

# 📂 Struktura projektu

Projekt wykorzystuje wzorzec **Page Object Model (POM)**.

```
e2e-Playwright-TS
│
├── pages/
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   └── ...
│
├── tests/
│   ├── login.spec.ts
│   ├── register.spec.ts
│   └── ...
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Opis katalogów

### 📁 pages/

Zawiera klasy reprezentujące poszczególne strony aplikacji.

Każda klasa odpowiada za:

- selektory,
- metody wykonujące akcje,
- logikę interakcji z daną stroną.

Dzięki temu kod testów pozostaje przejrzysty i łatwy do utrzymania.

---

### 📁 tests/

Zawiera właściwe scenariusze testowe (`*.spec.ts`), opisujące rzeczywiste przypadki biznesowe, np.:

- logowanie użytkownika,
- rejestracja,
- walidacja formularzy,
- inne procesy aplikacji.

---

# ⚙️ Technologie

Projekt wykorzystuje:

- Playwright
- TypeScript
- Node.js
- npm
- Page Object Model (POM)

---

# 💡 Przydatne komendy

### Instalacja zależności

```bash
npm install
```

### Instalacja przeglądarek

```bash
npx playwright install
```

### Uruchomienie wszystkich testów

```bash
npx playwright test
```

### Uruchomienie z widoczną przeglądarką

```bash
npx playwright test --headed
```

### Uruchomienie UI Mode

```bash
npx playwright test --ui
```

### Wyświetlenie raportu HTML

```bash
npx playwright show-report
```

---

# ✅ Dobre praktyki

Projekt został przygotowany zgodnie z dobrymi praktykami automatyzacji testów:

- wykorzystanie wzorca **Page Object Model (POM)**,
- oddzielenie logiki stron od scenariuszy testowych,
- łatwa rozbudowa projektu,
- czytelna struktura katalogów,
- możliwość uruchamiania testów lokalnie oraz w środowisku CI/CD.

---

# 📄 Licencja

Projekt udostępniony wyłącznie w celach edukacyjnych i demonstracyjnych.
