Данный [Next.js](https://nextjs.org) проект создан с помощью [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Запуск проекта в режиме разработки

Выполняем команду:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Переходим в браузере по адресу [http://localhost:3000](http://localhost:3000).

## Дополнительная информация

- [Next.js Documentation](https://nextjs.org/docs) - документация по Next.js.
- [Learn Next.js](https://nextjs.org/learn) - интерактивный туториал по Next.js.

## Развертывание на Vercel

Самый простой способ развернуть приложение Next.js — использовать [платформу Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) от создателей Next.js.

Подробная информация в [документации по развертыванию Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

## Frontend

Использованные библиотеки и технологии:

- **shadcn-ui** - готовые ui компоненты;
- **tailwind** - библиотека для стилизация компонентов;
- **zustand** - стейт менеджер;
- **react-hook-form** - управление состоянием формы и валидация;
- **zod** - валидация и парсинг данных.

## Backend

Использованные библиотеки и технологии:

- **prisma** - ORM для работы с БД;
- **next auth** - библиотека для авторизации пользователей.

БД разворачивается на платформе Vercel.

## Памятка

### Получение параметров URL в Next.js

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
