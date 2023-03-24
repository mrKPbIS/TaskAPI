Репозиторий содержит тестовое задание, которое я выполнял в 2019 году. Ниже описание представлено задания

# Задача
Сделать сервис, который возвращает заголовок случайной новости из Top 500 с ресурса https://news.ycombinator.com. Заголовки не должны повторяться.


api ресурса:
- Эндпоинт https://hacker-news.firebaseio.com/v0/topstories.json используется для получения id топ500 историй. Возвращает ответ списком id
- Эндпоинт https://hacker-news.firebaseio.com/v0/item/{$id}.json используется для получения данных истории с идентификатором id

обработка ошибок: 
- получение ответов от ресурса должно быть корректны