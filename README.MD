# Django REST framework

Репозиторий для сдачи домашнего задания.

Коробанов Георгий.


## Урок 3. Serializers. Renderers. Routers
* 0:01 start webinar
* 0:02 hw -1
* 0:08 presume
* 0:11 test_models
* 0:12 test_serializers | configurations
* 0:30 test_serializers1
* 0:50 relax
* 1:01 test_serializers2
* 1:05 many=True
* 1:07 Author __str__ | models | migrations | manytomany in db
* 1:11 serializers
* 1:15 views
* 1:17 urls
* 1:19 serializers to view many authors

## Задания 3
1. В проекте создать новое приложение для работы с TODO.
2. Добавить модель Project. Это проект, для которого записаны TODO. У него есть название, может быть ссылка на репозиторий и набор пользователей, которые работают с этим проектом. Создать модель, выбрать подходящие типы полей и связей с другими моделями.
3. Добавить модель TODO. Это заметка. У ToDo есть проект, в котором сделана заметка, текст заметки, дата создания и обновления, пользователь, создавший заметку. Содержится и признак — активно TODO или закрыто. Выбрать подходящие типы полей и связей с другими моделями.
4. Создать API для моделей Projects и ToDo. Пока можно использовать ViewSets по аналогии с моделью User.
5. При сериализации моделей выбрать нужный вид для связанных моделей.
6. (Задание со *) На стороне клиента используется camelCase в отличие от snake_case, который мы используем в python. Реализовать представление данных в виде camelCase (https://www.django-rest-framework.org/api-guide/parsers/#camelcase-json).
7. &npm install react-bootstrap

[comment]: <> (## Урок 2. Введение в React. Компонентный подход)
[comment]: <> (* 0:00 start webinar)
[comment]: <> (* 0:11 install)
[comment]: <> (* 0:13 npx create-react-app frontend)
[comment]: <> (* 0:17 npm start)
[comment]: <> (* 0:27 app component props)
[comment]: <> (* 0:30 states auth?)
[comment]: <> (* 0:35 components)
[comment]: <> (* 0:36 author item)
[comment]: <> (* 0:40 author list)
[comment]: <> (* 0:48 componentDidMount)
[comment]: <> (* 1:06 after relax)
[comment]: <> (* 1:12 npm install axios | import in App)
[comment]: <> (* 1:16 axios get)
[comment]: <> (* 1:18 pip install django-cors-headers)
[comment]: <> (* 1:19 settings cors)
[comment]: <> (* 1:27 hw)
[comment]: <> (## Задания 2)
[comment]: <> (1. С помощью create-react-app создать приложение для front-end-части проекта.)
[comment]: <> (2. На React создать страницу для отображения списка пользователей из нескольких компонентов. Пока эта страница будет доступна всем, после разграничения прав и только для администратора. )
[comment]: <> (3. Добавить на страницу компоненты Menu и Footer.)
[comment]: <> (4. В главном приложении получить данные обо всех пользователях и вывести их на странице.)
[comment]: <> (## Урок 1. Введение в REST и Django REST Framework)
[comment]: <> (* 1:24 install libs)
[comment]: <> (* 1:28 add app rest_framework | startapp authors)
[comment]: <> (* 1:29 model author)
[comment]: <> (* 1:31 urls rest)
[comment]: <> (* 1:33 serializers)
[comment]: <> (* 1:37 views)
[comment]: <> (* 1:41 router)
[comment]: <> (* 1:58 resume)
[comment]: <> (* 2:08 hw)
[comment]: <> (## Задания 1)
[comment]: <> (1. Создать новый проект на github или gitlab.)
[comment]: <> (2. Создать django-проект.)
[comment]: <> (3. Установить DRF и подключить его к django-проекту.)
[comment]: <> (4. Создать приложение для работы с пользователем.)
[comment]: <> (5. Создать свою модель пользователя.)
[comment]: <> (6. В ней поле email сделать уникальным.)
[comment]: <> (7. Сделать для неё базовое API — по аналогии модели Author. В качестве полей выбрать username, firstname, lastname, email. Если выбрать все поля, при попытке сериализации может возникнуть ошибка сериализации связанного поля. Эту тему мы рассмотрим далее.)
[comment]: <> (8. Подключить стандартную админку.)
[comment]: <> (10. &#40;Задание со *&#41; Создать management command — скрипт для запуска через manage.py для автоматического создания суперпользователя и нескольких тестовых пользователей &#40;Management commands&#41;.)
[comment]: <> (11. Сдать работу в виде ссылки на репозиторий с кодом.)
