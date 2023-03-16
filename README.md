This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Next.js, TypeScript,

State - Redux toolkit

Работа с localeStorage - redux-persist

## Deploy on Vercel
https://sapper-nine-mocha.vercel.app



## Структура:

app: Layout приложения, store/storeReducer, styles-глобальные стили

pages: index игра, options/index: настройка игры, records/index: список рекордов

widgets: компонент списока рекордов, и верхней части навигации сайта

shared: хук для получения размера экрана пользователя 

features: { 

GameSapper - все логика игры .components- компонент доски,поля, и информации игры, libs: data, assets, Slice, types, utils, context


SapperOptions: работа с store (выбор сложности)

}



