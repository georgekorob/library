# Django REST framework

Репозиторий для сдачи домашнего задания.

Коробанов Георгий.

## Урок 5. Routing. SPA 
* 0:00 start
* 0:02 hw -1
* 0:12 webinar
* 0:22 npm i react-router-dom@5.2.0
* 0:35 HashRouter
* 0:41 BrowserRouter
* 0:44 nav | Link
* 0:50 notfound404
* 0:53 Switch
* 0:55 Redirect
* 1:08 after relax
* 1:11 link author name
* 1:13 useparams | Router с параметрами
* 1:24 hw
* 1:29 authorID
* 1:34 correct
* 1:37 load part of component

## Задания 5
* Исправить ДЗ 4 в соответствии с исправлениями Пухова и Николая
1. Сделать переходы между тремя страницами: список пользователей, список проектов, список ToDo. 
2. Добавить компоненты для новых страниц (список проектов и список ToDo) и загрузку данных с back-end. 
3. При необходимости перенастроить сериализацию на стороне back-end. 
4. По желанию можно добавить любые другие страницы.
5. (Задание со *) Реализовать страницу с информацией для одного проекта. Переход на неё осуществляется по нажатию на проект из списка.

[comment]: <> (## Урок 4. Views. Filtering. Pagination)
[comment]: <> (* 0:01 start hw)
[comment]: <> (* 0:06 mixer)
[comment]: <> (* 0:09 camelCase)
[comment]: <> (* 0:10 views)
[comment]: <> (* 0:14 APIView -> Generic -> ModelViewSet)
[comment]: <> (* 0:22 func get APIView)
[comment]: <> (* 0:25 CreateAPIView mixins)
[comment]: <> (* 0:34 ViewSet)
[comment]: <> (* 0:40 only)
[comment]: <> (* 0:43 ModelViewSet)
[comment]: <> (* 0:47 relax 1:13)
[comment]: <> (* 0:57 Custom ViewSet)
[comment]: <> (* 1:02 filters)
[comment]: <> (* 1:06 kwargs filter)
[comment]: <> (* 1:09 query_params)
[comment]: <> (* 1:13 django_filters)
[comment]: <> (* 1:15 filterset_class)
[comment]: <> (* 1:17 paginations)
[comment]: <> (* 1:21 hw mixer)
[comment]: <> (* 1:23 hw +1)
[comment]: <> (## Задания 4)
[comment]: <> (1. Установить размер страницы для всех api 100 записей. )
[comment]: <> (2. Выбрать подходящий класс для постраничного вывода.)
[comment]: <> (3. В проекте доработать API следующим образом:)
[comment]: <> (   * модель User: есть возможность просмотра списка и каждого пользователя в отдельности, можно вносить изменения, нельзя удалять и создавать;)
[comment]: <> (   * модель Project: доступны все варианты запросов; для постраничного вывода установить размер страницы 10 записей; добавить фильтрацию по совпадению части названия проекта;)
[comment]: <> (   * модель ToDo: доступны все варианты запросов; при удалении не удалять ToDo, а выставлять признак, что оно закрыто; добавить фильтрацию по проекту; для постраничного вывода установить размер страницы 20.)
[comment]: <> (4. &#40;Задание со *&#41; В модели ToDo добавить фильтрацию по дате создания. Передадим 2 даты, дату начала и окончания &#40;https://django-filter.readthedocs.io/en/latest/index.html&#41;.)
[comment]: <> (## Урок 3. Serializers. Renderers. Routers)
[comment]: <> (* 0:01 start webinar)
[comment]: <> (* 0:02 hw -1)
[comment]: <> (* 0:08 presume)
[comment]: <> (* 0:11 test_models)
[comment]: <> (* 0:12 test_serializers | configurations)
[comment]: <> (* 0:30 test_serializers1)
[comment]: <> (* 0:50 relax)
[comment]: <> (* 1:01 test_serializers2)
[comment]: <> (* 1:05 many=True)
[comment]: <> (* 1:07 Author __str__ | models | migrations | manytomany in db)
[comment]: <> (* 1:11 serializers)
[comment]: <> (* 1:15 views)
[comment]: <> (* 1:17 urls)
[comment]: <> (* 1:19 serializers to view many authors)
[comment]: <> (* 1:22 HyperlinkedModelSerializer)
[comment]: <> (* 1:27 settings renderer classes)
[comment]: <> (* 1:32 simple router)
[comment]: <> (* 1:34 hw)
[comment]: <> (## Задания 3)
[comment]: <> (1. В проекте создать новое приложение для работы с TODO.)
[comment]: <> (2. Добавить модель Project. Это проект, для которого записаны TODO. У него есть название, может быть ссылка на репозиторий и набор пользователей, которые работают с этим проектом. Создать модель, выбрать подходящие типы полей и связей с другими моделями.)
[comment]: <> (3. Добавить модель TODO. Это заметка. У ToDo есть проект, в котором сделана заметка, текст заметки, дата создания и обновления, пользователь, создавший заметку. Содержится и признак — активно TODO или закрыто. Выбрать подходящие типы полей и связей с другими моделями.)
[comment]: <> (4. Создать API для моделей Projects и ToDo. Пока можно использовать ViewSets по аналогии с моделью User.)
[comment]: <> (5. При сериализации моделей выбрать нужный вид для связанных моделей.)
[comment]: <> (6. &#40;Задание со *&#41; На стороне клиента используется camelCase в отличие от snake_case, который мы используем в python. Реализовать представление данных в виде camelCase &#40;https://www.django-rest-framework.org/api-guide/parsers/#camelcase-json&#41;.)
[comment]: <> (7. &npm install react-bootstrap)
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
