---
title: TwContainer
---

# TwContainer

TailwindCLI provides you a really helpfull widget `TwContainer` and `isContainer` extension to easily create a `Container` widget for your app's Layout.

| **Tw Widget** | **Flutter Widget** |
| ------------- | ------------------ |
| TwContainer   | Container          |

:::tip
You have 2 options to create a `Container` Widget in your app while using `TailwindCLI` for UI design.

1. `TwContainer` Widget
   * You can directly use this Widget to get a Container and start styling it by built in extensions for all posible styles. 
2. `.isContainer` extension method
   * Or you can use this extension method on `Container` Widget so it will be converted to `TwContainer` and provides you the extensions for all posible styling.
:::

No matter what you use for creating Container you will get the flutter's `Container` Widget at the end.

## Usage

* `TwContainer`: Widget
* `.isContainer`: Extension 

`TwContainer` and `.isContainer` are just wrappers around the Container Widget itself to help you style it with ease using extension methods.

`TwContainer` is a wrapper widget around the Container widget which allows you to create Container widget with ease.

| **Tw Widget** | **Flutter Widget** |
| ------------- | ------------------ |
| TwContainer() | Container          |


`.isContainer` is a helpful extension which creates a Container widget.

| **Tw Widget** | **Flutter Widget** |
| ------------- | ------------------ |
| .isContainer  | Container          |


### TwContainer widget

```dart
Widget build(BuildContext contexr){
    return TwContainer( // [!code ++]
        child: TwText("I am a TwContainer").render(), // [!code ++]
    ).backgroundColor(context).center.render(); // [!code ++]
}
```
> Provided code will give you a Container with `backgroundColor` from the theme and it will be aligned center.

### .isContainer extension

```dart
Widget build(BuildContext contexr){
    return TwText("I am a TwContainer").render()
    .isContainer // [!code ++]
    .backgroundColor(context).center.render(); // [!code ++]
}
```
> Provided code will give you a Container with `backgroundColor` from the theme and it will be aligned center.


## TwContainer Constructor
```dart
TwContainer({this.child})
```

## TwContainer properties

* `Widget` **_child_**: Child to render inside the Container widget.

## Api References

`TwContainer` provides you helpfull extensions and methods to style your widget with ease.

### Extensions
`.clipAntialias`: Sets Container's Clip property to `Clip.antiAlias` value.



