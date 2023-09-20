## Содержание

1. [Основная информация](#Основная_информация)
2. [Глобальные флаги](#Глобальные_флаги)
3. [Список команд](#Список_команд)
   1. [create](#create)
   2. [remove](#remove)
   3. [ls](#ls)
   4. [activate](#activate)
   5. [deactivate](#deactivate)
   6. [generate-cert](#generate-cert)
   7. [regenerate](#regenerate)

## Основная информация

Модуль отвечающий за работу с доменами и поддоменами, SSL сертификатами и глобальными конфигурациям nginx.

```bash
kinsidectl domain subcommand [..args] [...flags]
```

## Глобальные флаги

1. `-h/--help` - выводит подсказку со списком команд и объяснениями их работы.

## Список команд

1. [create](#create)
2. [remove](#remove)
3. [ls](#ls)
4. [activate](#activate)
5. [deactivate](#deactivate)
6. [generate-cert](#generate-cert)
7. [regenerate](#regenerate)

### Create

Создает конфигурации для глобального nginx'а, генерирует SSL сертификаты, которые подключаются в конфигурацию nginx'а и создает директорию для логов.

По удачному завершению выводит полный адрес домена, пути до файлов/директорий и текущее состояние(активный или нет).

По умолчанию берет родительский домен из [базовой конфигурации](/articles/kinsidectl/global-state-and-configs#базовая-конфигурация) и создает на ее основе домен.

#### Обязательные флаги

1. `--project` - название проекта, к которому будет привязан домен

Пример использования:

```bash
kinsidectl domain create --project project-name
```

Будет созданы файлы и тд для домена {{ meta.domains.root }} или другого, который указан в базовой конфигурации.

> **Внимание!!! Создавать доменное имя нужно после того, как под проект были [выделены порты](/articles/kinsidectl/ports#create). В ином случае будет выдаваться ошибка.**

#### Флаги:

1. `--subdomain` - указывает поддомен главного домена. Поддерживает только поддомены первого уровня
   Пример использования:

```bash
kinsidectl domain create --subdomain main --project project-name
```

Будет созданы файлы и тд для домена {{ meta.domains.main }} или другого, который указан в базовой конфигурации.

2. `--domain` - указывает родительский домен

Пример использования:

```bash
kinsidectl domain create --domain kinside.local --project project-name
```

Будет созданы файлы и тд для домена kinside.local или другого, который
указан в базовой конфигурации.

3. `--ports-type` - тип выделяемого порта(web, back, db и тд). По умолчанию имеет значение web.
4. `--ports-index` - индекс порта из массива выделенных по данному направлению. По умолчанию 0.
5. `--activate` - Активирует конфигурацию доменного имени, после создания. По умолчанию он не активирован.

### Remove

Удаляет доменное имя и все связанные с ним файлы. А также отвязывает его от проекта.

Пример использования:

```bash
kinsidectl domain remove {{ meta.domains.main }}
```

### Ls

Выводит список доменных имен на сервере.

Пример использования:

```bash
kinsidectl domain ls
```

Формат вывода:
| N | subdomain | domain | project | status | createdAt |
|---|-----------|--------|--------| ----- |-----------|
| 0 | test | {{ meta.domains.root }} | testing |activated |2023-03-15 |

#### Флаги

1. `--activated` - Выводит список активных доменных имен
2. `--deactivated` - Выводит список неактивных доменных имен

### Activate

Активирует доменное имя. Если оно активировано, то ничего не делает

Пример использования:

```bash
kinsidectl domain activate {{ meta.domains.main }}
```

### Deactivate

Деактивирует доменное имя. Если оно активировано, то ничего не делает

Пример использования:

```bash
kinsidectl domain activate {{ meta.domains.main }}
```

### Generate-cert

Заново генерирует сертификаты для доменного имени.

Пример использования:

```bash
kinsidectl domain generate-cert {{ meta.domains.main }}
```

### Regenerate

Заново генерирует все сертификаты, конфигурации и директории для доменного имени.

Пример использования:

```bash
kinsidectl domain regenerate {{ meta.domains.main }}
```