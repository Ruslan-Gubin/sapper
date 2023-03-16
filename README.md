Стек - Next.js, TypeScript,

State - Redux toolkit

Работа с localeStorage - redux-persist


Ссылка на vercel: https://sapper-nine-mocha.vercel.app



Структура:

app: Layout приложения, store/storeReducer, styles-глобальные стили

pages: index игра, options/index: настройка игры, records/index: список рекордов

widgets: компонент списока рекордов, и верхней части навигации сайта

shared: хук для получения размера экрана пользователя 

features: { 

GameSapper - все логика игры .components- компонент доски,поля, и информации игры, libs: data, assets, Slice, types, utils, context


SapperOptions: работа с store (выбор сложности)

}



