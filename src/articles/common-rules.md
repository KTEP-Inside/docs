## Содержание

1. [Описание](#Описание)
2. [Куда размещать исходные файлы проектов](#Исходные_файлы)
3. [Управление сетью(порты, доменные имена, взаимодействие контейнеров)](#Сеть)
4. [Настройки фаервола для входящего трафика](#Настройка_файервола)

## Описание

В этом файле описаны правила и договоренности по работе с проектами на сервере, как их запускать и налаживать взаимодействие.

## Исходные файлы

Некоторые проекты, например главная всего сайта, не требуют запуска в отдельном докер контейнере, и от таких файлов требуется только собранная версия. В то время, когда для других требуется собрать и запустить контейнер(ы), для которых нужно выделить порт(ы) на сервере, номер которого зависит от состояния сервера.

**Предлагаю хранить исходники всех проектов на сервере, чтобы избежать путаницы в том, что откуда и как приходит**, а управление раздачей портов, доменных имен и прочих параметров проекта осуществлять с помощью [kinsidectl](/articles/kinsidectl/project).

**Исходники проектов находятся внутри директории Documents и имеют названия, как в git-репозитории.**
Так же исходники проектов хранятся в отбельных репозиториях в организации [KInside]({{ meta.external_refs.github }}). Ко всем репозиториям должна иметь команда Admins на правах администратора. Остальные добавляются с правами мейнтейнеров используя соответствующие команды. Одиночные разработчики добавляются в исключительных ситуациях.
**Все репозитории должным быть открытыми**.

## Сеть

Так как большинство проектов будет запускаться в отдельных докер контеинерах или в их наборе, то требуется организовать систему выделения портов для веб-серверов, серверов, баз данных и прочего.
Предлагаю такое распределение портов:

1. 1-500 - системные порты, не занимать проектами. Служат для внешнего подключения, раздачи файлов и тд.
2. 501-1500 - порты для контейнеров с веб-серверами или другими программами, раздающими клиентскую часть.
3. 1501-3000 - порты для контейнеров с REST и GraphQL серверами.
4. 3001-5000 - порты для контейнеров баз данных.
5. 5001-8000 - порты для прочих сервисов.
6. 8001-50000 - резервные порты.

> Выделение портов с помощью [kinsidectl](/articles/kinsidectl/ports)

Так же нужно обеспечить создание конфигурации на каждый домен и поддомен для главного веб-сервера. Связывание проектов с их доменами. Создание SSL сертификатов, проброс их внутрь контейнера с (веб-)сервером и своевременное обновление.

> Работа с доменными именами с помощью [kinsidectl](/articles/kinsidectl/domain)

## Настройка фаервола

Для безопасности входящего трафика следует установить и настроить фаервол, чтобы обрабатывать входящий трафик только на некоторые порты: 80, 443, 22.
