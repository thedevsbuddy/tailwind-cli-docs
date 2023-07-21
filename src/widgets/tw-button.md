---
title: Creating button is so simple now
---

# TwButton

In every application, buttons are one of the main requirements and used to get user input or actions so we need to create buttons in which user can take some actions.

## Widget it builds

Tailwind ships with some custon Widgets which at the end renders as Native Widgets provided by flutter we are only adding a custom layer on top of fluttr's native widgets to give you access to style them with ease.

In case of `TwButton` you end up with some native widgets used together to create thid button widget which can be used as a normal button.

What You write:

```dart
TwButton(
    child: "I am a button".isText.textSm.fontSemibold.render(),
).render(),
```

What You Get:

```dart
InkWell(
    splashFactory: NoSplash.splashFactory,
    // Other Inkwell Props
    child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.min,
        children: [
            AnimatedContainer(
                child: _isBusy ? _loadingWidget : child,
                // Other Container props
            ),
        ],
    ),
);
```

## What issue does it solve?

As demonstrated in the example above, with just a few lines of code, Tailwind empowers you to effortlessly create a fully functional button, saving you valuable time and effort. This way it saves you a lot of time which can be wasted in building this button and fine tuning all the styling by yourself.

## Using TwButton

You can use this Widget to create any type of button for your flutter project. Some examples are below:

:::code-group

```dart[Primary Button]
TwButton(
    child: Text("Click Me!").isText.textSm.fontSemibold.render(),
)
.px4
.py2
.roundedLg
.primaryColor(context)
.render()
```

```dart[Secondary Button]
TwButton(
    child: Text("Click Me!").isText.textSm.fontSemibold.render(),
)
.px4
.py2
.roundedLg
.secondaryColor(context)
.render()
```

```dart[Danger Button]
TwButton(
    child: Text("Click Me!").isText.textSm.fontSemibold.render(),
)
.px4
.py2
.roundedLg
.red500
.render()
```

:::

## Api References

`TwButton` includes some handy extensions and methods which can help you add styling or functionality to button.

| Mixins Extensions                         | Mixins Methods                         |
| ----------------------------------------- | -------------------------------------- |
| [Alignment](/mixins/alignment) | [Alignment](/methods/alignment) |
| [Borders](/mixins/border)      | N/A                                    |
| [Colors](/mixins/colors)       | [Colors](/methods/colors)       |
| [Gestures](/mixins/gestures)   | [Gestures](/methods/gestures)   |
| [Gradients](/mixins/gradients) | [Gradients](/methods/gradients) |
| [Margins](/mixins/margins)     | [Margins](/methods/margins)     |
| [Paddings](/mixins/paddings)   | [Paddings](/methods/paddings)   |
| [Roundness](/mixins/roundness) | [Roundness](/methods/roundness) |
| [Shadows](/mixins/shadow)      | [Shadows](/methods/shadow)      |
