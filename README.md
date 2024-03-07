Для того чтобы запустить проект нужно сделать 3 шага:
1. устанавливаем зависимости npm i
2. создаем файл в корне проекта .env.local и вставляем туда строки
`
    API_HOST = 'http://localhost:3000/api'

    GOOGLE_CLIENT_ID = '225382001967-7mkrg3um6mu25tjnvv87929fktkqpqu1.apps.googleusercontent.com'
    GOOGLE_SECRET = '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'

    NEXTAUTH_SECRET = 'supersecret'
    NEXTAUTH_URL = 'http://localhost:3000'
`
3. запускаем командой npm run dev и переходим по адресу http://localhost:3000


отчет по заданиям:
п. 1-10 сделал
по 11 есть нюансы, не нашел информации как работать с файлами на локальном api next js, поэтому картинка даже если вы ее загрузите не придет, после добавления обновите главную станицу где отображаются айтемы
12. сделал
13. не делал

Формы не валидировал так как это не входило в рамки задач)
Данные для входа можно использовать эти "somegmail@gmail.com" "123456"
или войти через гугл аккаунт

На все потратил около 16 часов

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.