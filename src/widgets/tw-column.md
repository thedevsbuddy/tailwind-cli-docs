---
title: TwColumn - Now create and manage Column widget with ease
---

# TwColumn

TwColumn provides you a really usefull wrapper around the `Column` Widget to create Column for your app's UI and manage it with ease by using easy to use methods provided by the `TwColumn` Widget.

## How it is useful?

As we all know that to use and configure each Widgets in flutter we need to apply a lot of code to achieve our desired look. But not to worry now `TailwindCLI` provides you same widgets with a tweek to it that lets you build UI with less key strokes.

### Traditional Column

`Column` Widget with some properties utilized.

:::code-group

```dart [Alignment Start]
Column(
    mainAxisAlignment: MainAxisAlignment.start,
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
        /// Childrens here
    ],
)
```

```dart [Alignment End]
Column(
    mainAxisAlignment: MainAxisAlignment.end,
    crossAxisAlignment: CrossAxisAlignment.end,
    children: [
        /// Childrens here
    ],
)
```

:::

### Using TwColumn

`TwColumn` Widget some properties utilized.

:::code-group

```dart [Alignment Start]
TwColumn(
    children: [
        /// Childrens here
    ],
)
.justifyStart
.alignStart
.render()
```

```dart [Alignment End]
TwColumn(
    children: [
        /// Childrens here
    ],
)
.justifyEnd
.alignEnd
.render()
```

:::

`Column` Widget some properties utilized.

:::code-group

```dart [Convert Column Widget to TwColumn]
Column(
    children: [
        /// Childrens here
    ],
)
.isColumn
.justifyStart
.alignStart
.render()
```

:::

## Api References

`TwColumn` centralized all the properties of Column widget into easy to use methods.

### mainAxisAlignment (Aligns vertically)
| Method/Extension | Replaces           | Applies                         |
| ---------------- | ------------------ | ------------------------------- |
| .justifyCenter   | mainAxisAlignment  | MainAxisAlignment.center        |
| .justifyStart    | mainAxisAlignment  | MainAxisAlignment.start         |
| .justifyEnd      | mainAxisAlignment  | MainAxisAlignment.end           |
| .justifyBetween  | mainAxisAlignment  | MainAxisAlignment.spaceBetween  |
| .justifyAround   | mainAxisAlignment  | MainAxisAlignment.spaceAround   |
| .justifyEvenly   | mainAxisAlignment  | MainAxisAlignment.spaceEvenly   |

### crossAxisAlignment (Aligns horizontally)
| Method/Extension | Replaces           | Applies                         |
| ---------------- | ------------------ | ------------------------------- |
| .alignCenter     | crossAxisAlignment | CrossAxisAlignment.center       |
| .alignStart      | crossAxisAlignment | CrossAxisAlignment.start        |
| .alignEnd        | crossAxisAlignment | CrossAxisAlignment.end          |
| .alignBetween    | crossAxisAlignment | CrossAxisAlignment.spaceBetween |
| .alignAround     | crossAxisAlignment | CrossAxisAlignment.spaceAround  |
| .alignEvenly     | crossAxisAlignment | CrossAxisAlignment.spaceEvenly  |


### mainAxisSize
| Method/Extension | Replaces           | Applies                         |
| ---------------- | ------------------ | ------------------------------- |
| .max             | mainAxisSize       | MainAxisSize.max                |
| .min             | mainAxisSize       | MainAxisSize.min                |
