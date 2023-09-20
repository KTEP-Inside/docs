## Содержание

1. [Описание](#Описание)
2. [Оформление](#Оформление)
3. [Как оно сейчас работает](#Как_оно_сейчас_работает)
4. [Планы](#Планы)
5. [Проблемы](#Проблемы)

## Описание

Про то, что такое Moodle можно почитать [здесь](https://ru.wikipedia.org/wiki/Moodle), но в нескольких словах - система управления образовательным контентом или LMS. Moodle распространяется бесплатно и по этому было выдвинуто предложение запустить собственную версию в стенах техникума.

> Работает по адресу `https://{{ meta.domains.moodle }}`

## Оформление

Пока что сайт оформлен в фирменном стиле платформы moodle, но в планах есть внести небольшие изменения, чтобы привести его в соответствие с [гайдлайном]({{ meta.external_refs.design }}).

## Как оно сейчас работает

На данный момент сайт запущен на порту 8081 и 8443 и работает под доменным именем `{{ meta.domains.moodle }}`. Для работы используется не оригинальный [докер-образ moodle](https://hub.docker.com/r/bitnami/moodle), что дает его грамотно кастомизировать и управлять. В качестве базы данных используется образ mariadb.

## Планы

Планируется создать собственный докер-образ, в котором будет кастомизированная версия moodle и использоваться СУБД PostgresQL.

## Проблемы

Используется не официальная версия для докера, что накладывает некоторые ограничения на взаимодействие и работу. Так же нет людей, которые могли бы сесть и внести данные и пользователей в систему.