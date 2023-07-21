---
title: TwRow - Now create and manage Row widget with ease
---

# TwRow

TwRow provides you a really usefull wrapper around the `Row` Widget to create Row for your app's UI and manage it with ease by using easy to use methods provided by the `TwRow` Widget.

## How it is useful?

As we all know that to use and configure each Widgets in flutter we need to apply a lot of code to achieve our desired look. But not to worry now `TailwindCLI` provides you same widgets with a tweek to it that lets you build UI with less key strokes.

### Traditional Row

`Row` Widget with some properties utilized.

:::code-group

```dart [Alignment Start]
Row(
    mainAxisAlignment: MainAxisAlignment.start,
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
        /// Childrens here
    ],
)
```

```dart [Alignment End]
Row(
    mainAxisAlignment: MainAxisAlignment.end,
    crossAxisAlignment: CrossAxisAlignment.end,
    children: [
        /// Childrens here
    ],
)
```

:::

### Using TwRow

`TwRow` Widget some properties utilized.

:::code-group

```dart [Alignment Start]
TwRow(
    children: [
        /// Childrens here
    ],
)
.justifyStart
.alignStart
.render()
```

```dart [Alignment End]
TwRow(
    children: [
        /// Childrens here
    ],
)
.justifyEnd
.alignEnd
.render()
```

:::

`Row` Widget some properties utilized.

:::code-group

```dart [Convert Row Widget to TwRow]
Row(
    children: [
        /// Childrens here
    ],
)
.isRow
.justifyStart
.alignStart
.render()
```

:::

## Api References

`TwRow` centralized all the properties of Row widget into easy to use methods.

### mainAxisAlignment (Aligns horizontally)
| Method/Extension | Replaces           | Applies                         |
| ---------------- | ------------------ | ------------------------------- |
| .justifyCenter   | mainAxisAlignment  | MainAxisAlignment.center        |
| .justifyStart    | mainAxisAlignment  | MainAxisAlignment.start         |
| .justifyEnd      | mainAxisAlignment  | MainAxisAlignment.end           |
| .justifyBetween  | mainAxisAlignment  | MainAxisAlignment.spaceBetween  |
| .justifyAround   | mainAxisAlignment  | MainAxisAlignment.spaceAround   |
| .justifyEvenly   | mainAxisAlignment  | MainAxisAlignment.spaceEvenly   |

### crossAxisAlignment (Aligns vertically)
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
