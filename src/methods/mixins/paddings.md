# Paddings Methods

These are the methods available for the paddings by default. They all excepts `double` value as a parameter to apply paddings.

| Method          | Description                        |
| --------------- | ---------------------------------- |
| .p(double val)  | Creates all side padding           |
| .px(double val) | Creates left and rght side padding |
| .py(double val) | Creates top and bottom padding     |
| .pl(double val) | Creates only left side padding     |
| .pt(double val) | Creates top side padding           |
| .pr(double val) | Creates right side padding         |
| .pb(double val) | Creates botton padding             |

::: tip
If you have added more spacers inside your `tailwind.config.json` file, they will also be available for you to use on any Widget that uses `TwPaddingMixin`.
:::
