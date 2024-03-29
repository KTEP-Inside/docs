## Содержание

1. [Основная информация](#Основная_информация)
2. [Глобальные флаги](#Глобальные_флаги)
3. [Список команд](#Список_команд)
   1. [Create](#Create)
   2. [Recreate](#Recreate)
   3. [Sync](#Sync)
   4. [Remove](#Remove)
   5. [Ls](#Ls)
   6. [Inject](#Inject)

## Основная информация

Модуль отвечающий за работу с проектом. С помощью него конфигурируется и запускается проект. Этот модуль является связующим для всех остальных

```bash
kinsidectl project subcommand [project-name] [...flags]
```

## Глобальные флаги

1. `-h/--help` - выводит подсказку со списком команд и объяснениями их работы.

## Список команд

1. [Create](#Create)
2. [Recreate](#Recreate)
3. [Sync](#Sync)
4. [Remove](#Remove)
5. [Ls](#Ls)

### Create

Создает новый конфигурационный файл для проекта и вносит изменение в глобальное состояние сервера. Принимает единственный параметр - название проекта. Название проекта обязательно должно быть уникальным.

> **Внимание!!! Конфигурация и проект привязывается к директории, в которой была вызвана эта команда, чтобы изменить директорию, нужно удалить проект и создать его заново в нужном месте**

Пример использования:

```bash
kinsidectl project create project-name
```

### Recreate

Заново генерирует файл конфигурации из текущего состояния. Команда нужна для случаев, когда файл конфигурации в проекте был утерян или невозвратно изменен, но на сервере остались записи об этом проекте(глобальное состояние).

Пример использования:

```bash
kinsidectl project recreate project-name
```

### Sync

Обновляет глобальное состояние сервера из файла конфигурации проекта.

> **Внимание!!! При попытке изменить выделенные порты, будет вызываться исключение, по этому не нужно изменять выделенные порты**

Пример использования:

```bash
kinsidectl project sync project-name
```

### Remove

Полностью удаляет файл конфигурации, сертификаты, глобальную информацию о проекте и освобождает порты.

> **Внимание!!! После использования этой команды, с сервера стираются все данные, связанные с конфигурацией и управлением проектом, восстановить их будет невозможно**

Пример использования:

```bash
kinsidectl project remove project-name
```

### Ls

Получить список проектов и путей до их директорий.

Пример использования:

```bash
kinsidectl project ls
```

### Inject

Внедряет некоторые части конфигурации, например порты, путь до SSL сертификата и др, в файл переменных окружения, который передается в конфигурации проекта.

Пример использования:

```bash
kinsidectl project inject project-name
```

Пример выходного файла:

```properties
...Другие переменные среды

# KINSIDE
# Внимание, при повторном исполнение команды inject, данный блок будет перезаписан
KINSIDE_DB_PORT_0=3001
KINSIDE_SERT_PATH=/path/to/cert
...
#
```
