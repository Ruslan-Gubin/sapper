Стек - Next.js, TypeScript,
State - Redux toolkit
Работа с localeStorage - redux-persist

ссылка на vercel: https://sapper-nine-mocha.vercel.app
https://res.cloudinary.com/ds289tkqj/image/upload/v1678960779/Hits/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-03-16_125835_mwljwm.jpg

Структура:
app: Layout приложения, store/storeReducer, styles-глобальные стили
pages: index игра, options/index: настройка игры, records/index: список рекордов
widgets: компонент списока рекордов, и верхней части навигации сайта
shared: хук для получения размера экрана пользователя 
features: { GameSapper - все логика игры .components- компонент доски, поля, и информации игры, libs: data, assets, Slice, types, utils, context}
SapperOptions: работа с store(выбор сложности)
