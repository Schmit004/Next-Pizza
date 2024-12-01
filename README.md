Данный [Next.js](https://nextjs.org) проект создан с помощью [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Запуск проекта в режиме разработки

Выполняем команду:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Переходим в браузере по адресу [http://localhost:3000](http://localhost:3000).

# Дополнительная информация

- [Next.js Documentation](https://nextjs.org/docs) - документация по Next.js.
- [Learn Next.js](https://nextjs.org/learn) - интерактивный туториал по Next.js.

# Развертывание на Vercel

Самый простой способ развернуть приложение Next.js — использовать [платформу Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) от создателей Next.js.

Подробная информация в [документации по развертыванию Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

# Frontend

Использованные библиотеки и технологии:

- **shadcn-ui** - готовые ui компоненты;
- **tailwind** - библиотека для стилизация компонентов;
- **zustand** - стейт менеджер;
- **react-hook-form** - управление состоянием формы и валидация;
- **zod** - валидация и парсинг данных.

# Backend

Использованные библиотеки и технологии:

- **prisma** - ORM для работы с БД;
- **next auth** - библиотека для авторизации пользователей.

БД разворачивается на платформе Vercel.

# Памятка

## Получение параметров URL в Next.js

**Серверные компоненты - через props:**

```tsx
export default function Page(props: {
  params: { [key: string]: string },
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // ID из динамического маршрута
  const id = props.params.id

  // Query параметры
  const query = props.searchParams.search
}
```
- *Работает только для Page компонентов (файлы page.tsx/page.jsx)*
- *Props предоставляется фреймворком автоматически*

**Клиентские компоненты - через хуки `useParams()` и `useSearchParams()`:**

```tsx
'use client'
import { useParams, useSearchParams } from 'next/navigation'

export default function ClientPage() {
  // ID из динамического маршрута
  const params = useParams()
  const id = params.id

  // Query параметры
  const searchParams = useSearchParams()
  const query = searchParams.get('search')
}
```
---

## Получение данных из cookie

### 1. В API роутах - из объекта `req`
В API роуте Next.js можно получить куки из объекта `req` следующим образом:

```javascript
export default function handler(req, res) {
  const cartToken = req.cookies.cartToken;
  // или
  const cartToken = req.cookies['cartToken'];
  // Обработка запроса
}
```

### 2. В серверном компоненте - используя метод `cookies()`
В серверных компонентах Next.js можно использовать метод `cookies()`:

```javascript
import { cookies } from 'next/headers';

export async function getServerSideProps(context) {
  const cookieStore = cookies();
  const cartToken = cookieStore.get('cartToken')?.value;
  // Обработка данных
}
```
**Уточнение**: Метод `cookies()` является частью `next/headers` и используется для получения куки в серверных компонентах или в функциях `getServerSideProps`.

### 3. В клиентском компоненте - через `document.cookie`
В клиентских компонентах или обычном клиентском JavaScript можно получить куки через `document.cookie`:
```javascript
const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
  const [name, value] = cookie.split('=');
  acc[name] = value;
  return acc;
}, {});
const cartToken = cookies.cartToken;
```
**Уточнение**: `document.cookie` возвращает строку всех куки, и их нужно парсить, чтобы получить значение конкретного куки.

### Дополнительная информация:
- **Установка куки**: В API роуте или серверном компоненте можно установить куки, используя метод `res.setHeader('Set-Cookie', ...)` или библиотеки, такие как `cookie` или `cookies`.

- **Безопасность куки**: При работе с куки важно учитывать безопасность, например, устанавливать флаги `HttpOnly`, `Secure`, и `SameSite`.

### Пример установки куки в API роуте:
```javascript
import cookie from 'cookie';

export default function handler(req, res) {
  res.setHeader('Set-Cookie', cookie.serialize('cartToken', 'your-token-here', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    sameSite: 'strict',
    path: '/'
  }));
  res.status(200).json({ message: 'Cookie set' });
}
```

### Пример установки куки в клиентском компоненте:
```javascript
document.cookie = "cartToken=your-token-here; path=/; max-age=604800; secure; samesite=strict";
```

---

## Server Actions
**Server Actions** - это функции, которые выполняются на сервере и могут быть вызваны непосредственно из клиентского кода. Они являются частью React и интегрированы в Next.js. Ниже перечислены особенности и преимущества которые дают сервеные экшены.

### Упрощение разработки:
- Не нужно создавать отдельные API-эндпоинты
- Код обработки данных находится рядом с компонентами
- Меньше бойлерплейта

### 1. Прогрессивное улучшение:
- Работают даже без JavaScript на клиенте
- Формы остаются функциональными при отключенном JS

### 2.Безопасность:
- Автоматическая защита от CSRF
- Валидация на уровне сервера
- Защита от внедрения вредоносного кода

### 3.Производительность:
- Оптимизированная перевалидация кэша
- Автоматическое обновление UI
- Встроенная обработка ошибок

### 4.Разработка:
- Типобезопасность между клиентом и сервером
- Меньше кода для управления состоянием
- Прямой доступ к серверным ресурсам

### 5.Объявление:
```javascript
'use server' // Должно быть в начале файла или функции

async function myAction() {
  'use server' // Должно быть в начале файла или функции
  // код
}

```

### 6. Область применения:
- Обработка форм
- Мутации данных
- Аутентификация
- Файловые операции
- Сложные вычисления
- Взаимодействие с базами данных

### Технические ограничения:
- Нельзя напрямую возвращать DOM элементы
- Ограничения на передаваемые типы данных
- Нет доступа к браузерному API

### Архитектурные ограничения:
- Может усложнить тестирование
- Сложнее отлаживать
- Потенциальная нагрузка на сервер

### Рекомендации по использованию:
- Использовать для операций, требующих серверной логики
- Комбинировать с оптимистическими обновлениями UI
- Применять валидацию данных
- Учитывать возможность отключенного JavaScript
- Группировать связанные actions в отдельные файлы
- Использовать типизацию для безопасности
- Комбинировать с React Cache для оптимизации
- Применять error boundary для обработки ошибок
