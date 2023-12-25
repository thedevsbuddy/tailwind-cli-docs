---
title: TwButton
---

# TwButton
TailwindCLI provides you a really helpful widget `TwButton` and an extension `isButton` to easily create a `Button` widget for your app's Layout.

| **Tw Widget** | **Flutter Widget**                         |
| ------------- | ------------------------------------------ |
| TwButton      | Some Widgets To Make A Clickable Button UI |

:::tip
You have 2 options to create a `Button` UI in your app while using `TailwindCLI` for your app.

1. `TwButton` Widget
   * You can directly use this Widget to get a Button UI and start styling it by built in extensions for all posible styles. 
2. `.isButton` extension method
   * Or you can use this extension method on `Button` UI that will convert it to `TwButton` and provides you the extensions for all posible styling and return `Button` UI built using some Widgets.
:::

No matter what you use for creating Button you will get the flutter's `Button` UI built using some Widgets at the end.


## Usage

* `TwButton`: Widget
* `.isButton`: Extension 

`TwButton` and `.isButton` are just helpful Widget and extension to provide Button UI.

`TwButton` is a wrapper widget around the `Widget`'s which allows you to create Button UI with ease.

| **Tw Widget** | **Flutter Widget**                         |
| ------------- | ------------------------------------------ |
| TwButton()    | Some Widgets To Make A Clickable Button UI |


`.isButton` is a helpful extension which creates a Button UI using some required Widgets.

| **Tw Widget** | **Flutter Widget**                         |
| ------------- | ------------------------------------------ |
| .isButton     | Some Widgets To Make A Clickable Button UI |

### TwButton widget

```dart
Widget build(BuildContext contexr){
    return TwButton( // [!code ++]
        child: TwText("I am a TwButton").render(), // [!code ++]
    ).primaryColor(context) // Primary Color From Theme // [!code ++]
    .onTap(() => print("Button Clicked.")) // Add on Tap action directly // [!code ++]
    .render(); // [!code ++]
}
```
> Provides a Button UI for your app with `primary` color from theme.

### .isButton extension

```dart
Widget build(BuildContext contexr){
    return Container(
        child: TwText("I am a TwButton").render(),
    )
    .isButton // It's Magic: By using this  // [!code focus]
    .primaryColor(context) // You will be able to do this  // [!code focus]
    .onTap(() => print("Button Clicked.")) // and this  // [!code focus]
    .render(); // and this  // [!code focus]
}
```
> Provides a Button UI for your app with `primary` color from theme with `onTap` action.


## TwButton Constructor
```dart
TwButton({required this.child})
```

## TwButton properties

* `Widget` **_child_**: Child to render inside the Button UI mostly it will be `Text`

## Api References

`TwButton` includes some handy extensions and methods which can help you add styling or functionality to button.


### Internal Methods
TwButton has some built in methods to provide styles to the Button UI. These methods are specifically defined for the Button UI.

#### .withConstraints(BoxConstraints constraints)
`.withConstraints` method allows you to provide constraints to the Button UI so you can provide constraints to the Button.

##### Example:
```dart
TwButton(child: "I am a Button".isText.render())
    .withConstraints(BoxConstraints(maxWidth: 120)) // It will be only 120 unit wide max. //[!code focus] 
    .primaryColor(context).onTap(() => print("Button Clicked.")).render(),
```

#### .color(Color color)
`.color` method allows you to provide custom color to the Button UI.

##### Example:
```dart
TwButton(child: "I am a Button".isText.render())
    .color(Colors.white) // It will be white colored button. //[!code focus] 
    .primaryColor(context).onTap(() => print("Button Clicked.")).render(),
```

<!--/// Sets the transform property to the animated box.
TwButton transform(Matrix4 val) => this.._transform = val;

/// Sets the clip behavior of the box.
TwButton clip(Clip clip) => this.._clip = clip;

/// To make it busy.
TwButton setBusy(bool isBusy) {
_isBusy = isBusy;
return this;
}

/// To show on busy state.
@Deprecated('Please use [setBusyWidget] instead.')
TwButton addBusyWidget(Widget? busyWidget) {
_loadingWidget = busyWidget;
return this;
}

TwButton setBusyWidget(Widget? busyWidget) {
_loadingWidget = busyWidget;
return this;
}

/// Sets the border of the Box.
TwButton withBorder(Border border) {
_border = border;
return this;
}

/// Sets the linear gradient to the decorated box.
TwButton linearGradient(LinearGradient linearGradient) => this.._gradient = linearGradient;

/// Sets the radial gradient to the decorated box.
TwButton radialGradient(RadialGradient radialGradient) => this.._gradient = radialGradient;

/// Sets the sweep gradient to the decorated box.
TwButton sweepGradient(SweepGradient sweepGradient) => this.._gradient = sweepGradient; -->


### Internal Extensions

### Methods & Extensions from Mixins

| Mixins Extensions              | Mixins Methods                  |
| ------------------------------ | ------------------------------- |
| [Alignment](/mixins/alignment) | [Alignment](/methods/alignment) |
| [Borders](/mixins/border)      | N/A                             |
| [Colors](/mixins/colors)       | [Colors](/methods/colors)       |
| [Gestures](/mixins/gestures)   | [Gestures](/methods/gestures)   |
| [Gradients](/mixins/gradients) | [Gradients](/methods/gradients) |
| [Margins](/mixins/margins)     | [Margins](/methods/margins)     |
| [Paddings](/mixins/paddings)   | [Paddings](/methods/paddings)   |
| [Roundness](/mixins/roundness) | [Roundness](/methods/roundness) |
| [Shadows](/mixins/shadow)      | [Shadows](/methods/shadow)      |
