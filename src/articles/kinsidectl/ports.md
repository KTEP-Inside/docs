## Содержание

1. [Основная информация](#Основная_информация)
2. [Глобальные флаги](#Глобальные_флаги)
3. [Список команд](#Список_команд)
   1. [Create](#Create)
   2. [Remove](#Remove)
   3. [Ls](#Ls)
   4. [Status](#Status)

## Основная информация

Модуль отвечающий за работу с портами и их ассоциацию с проектом.

```bash
kinsidectl ports subcommand [...args] [...flags]
```

## Глобальные флаги

1. `-h/--help` - выводит подсказку со списком команд и объяснениями их работы.

## Список команд

1. [Create](#Create)
2. [Remove](#Remove)
3. [Ls](#Ls)
4. [Status](#Status)

### Create

Выделяет порты и создает ассоциацию их с проектом.

Диапазоны и типы портов берутся из [базовой конфигурации](/articles/kinsidectl/global-state-and-configs#базовая-конфигурация).

#### Обязательные флаги

1. `--project` - название проекта, к которому будет привязан порт
2. `-t/--type` - тип или направление выделяемого порта.

Пример использования:

```bash
kinsidectl ports create --project project-name -t web
```

Команда выделит один порт из диапазона web для проекта project-name.

#### Флаги

1. `-c/--count` - количество выделяемых портов, по умолчанию 1.

### Remove

Освобождает все порты проекта, все порты типа на проекте или конкретный порт в конкретном типе.

#### Обязательные флаги

1. `--project` - название проекта, от которого отвязывается порт

Пример использования:

```bash
kinsidectl ports remove --project project-name
```

Команда удалит все порты, выделенные под проект.

#### Флаги

1. `-t/--type` - тип или направление выделяемого порта.
2. `--port-index` - индекс порта в массиве. **Применяется только с флагом `-t/--type`**

```bash
kinsidectl ports remove --project project-name -t web --port-index 1
```

Удалит порт у проекта project-name в типе web под индексом 1.

### Ls

Выводит список портов по типам(направлениям) выделенного для проекта.

#### Обязательные флаги

1. `--project` - название проекта

```bash
kinsidectl ports ls --project project-name
```

Пример вывода:

```json
{
	"db": [3001],
	"web": [501],
	"backend": [1501]
}
```

#### Флаги

1. `-t/--type` - тип или направление выделяемого порта.
   Пример использования:

```bash
kinsidectl ports ls --project project-name --type web
```

Пример вывода:

```bash
[501]
```

### Status

Выводит текущее состояние, т.е. номера следующих портов по типа(направлениям) и уже освобожденные.

Пример использования:

```bash
kinsidectl ports status
```

Пример вывода:

```json
{
	"web": {
		"next": 502,
		"free": []
	},
	"back": {
		"next": 1502,
		"free": []
	},
	"db": {
		"next": 3002,
		"free": []
	},
	"other": {
		"next": 5001,
		"free": []
	},
	"reserve": {
		"next": 8001,
		"free": []
	}
}
```
