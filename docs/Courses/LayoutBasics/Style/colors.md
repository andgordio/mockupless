# Colors

There are four ways to specify color in CSS: by a color name, as a hex value, as an RGB or an HSL value.

## Named colors

CSS has a number of named colors like `crimson` and `steelblue` that you can use anywhere a color value is expected. For example, these colors can be used for the `background-color` property:

```html {1,4,7}
<div style="background-color: crimson;">
  colored in crimson  
</div>
<div style="background-color: tomato;">
  colored in tomato
</div>
<div style="background-color: gold;">
  colored in gold
</div>
<!-- ... -->
```

<iframe height="335" style="width: 100%;" scrolling="no" title="Style—Colors—words" src="//codepen.io/andgordy/embed/joNRvQ/?height=335&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/joNRvQ/'>Style—Colors—words</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The full list includes 140 colors: [https://www.w3schools.com/colors/colors_names.asp](https://www.w3schools.com/colors/colors_names.asp).

Remembering *all* the names can be a burden, but knowing a couple of them is useful for rapid prototyping. When you don’t need an exact color, it’s easier to quickly type `crimson` or `tomato`, than to look for a hex on an RGB value for a shade of red.

One particularly useful named value for the background is `transparent`. It removes the background from the container.

The last section of this course introduces you to the CSS framework called Tailwind, which comes with its own palette of named colors. You will be encouraged to use them in your prototypes, so starting to specify colors by their names now can create a good habit by the time you get to the last section.

## hex

A hexadecimal value—**hex**, shortly— is a hashtag followed by 6 characters:

```html {1,4,7}
<div style="background-color: #dc143c;">
  colored in #dc143c  
</div>
<div style="background-color: #ff6347;">
  colored in #ff6347
</div>
<div style="background-color: #ffd700;">
  colored in #ffd700
</div>
<!-- ... -->
```

<iframe height="342" style="width: 100%;" scrolling="no" title="Style—Colors—hex" src="//codepen.io/andgordy/embed/NVKmoO/?height=342&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/NVKmoO/'>Style—Colors—hex</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Hex values are very popular on the web—probably, because their values are short and easy to copy from a color picker or a design tool.

Sometimes, you will see a shorthand versions of hex values with only three characters after the hashtag:

```html
<div style="background-color: #edf;">
  colored in #eeddff
</div>
```

This shorthand can be used when characters come in pairs. For example, `#eeddff` can be shortened to `#edf` as in the code above.

## RGB and RGBa

Another way to define color is to specify its **red, green and blue** values on a scale from 0 to 255:

```html
<div style="background-color: rgb(255, 127, 80);">
  Colored in coral with RGB
</div>
```

An extended version of RGB allows you to specify opacity too. It’s called RGBa, where “a” stands for alfa-channel:

```html
<div style="background-color: rgba(80, 255, 120, 0.3);">
  Colored in semi-transparent coral with RGBa
</div>
```

Unlike red, green and blue, the opacity scale goes from `0` to `1`. So `0.1` is barely visible and `0.5` is half-transparent.

## HSL & HSLa

Lastly, you can specify color using the HSL color model. **Hue** is set on a scale from `0` to `360`; **saturation** and **lightness** are set on a scale from `0%` to `100%`:

```html
<div style="background-color: hsl(29, 100%, 55%);">
  Colored in orange with HSL
</div>
```

HSL also has a version with an alfa channel that allows you to specify opacity:

```html
<div style="background-color: hsla(0, 100%, 50%, 0.3);">
  Colored in semi-transparent orange with HSLa
</div>
```

## Practice

### Boxes

Change colors of the boxes from the Units article:

<iframe height="521" style="width: 100%;" scrolling="no" title="Style—Colors—Task1" src="//codepen.io/andgordy/embed/JqyVWM/?height=521&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JqyVWM/'>Style—Colors—Task1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the task in the [Units article](./units.md#practice). You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/NVvoPb).
2. Design a color palette or find one online. [ColorHunt](https://colorhunt.co/palettes/trendy) is a nice tool with a lot of inspiration.
3. Replace named color values in the `background-color` attributes with hex values.

### Texts

Add colors to texts from the Intro to CSS article:

<iframe height="389" style="width: 100%;" scrolling="no" title="Style—Colors—Task2" src="//codepen.io/andgordy/embed/qGXwmx/?height=389&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/qGXwmx/'>Style—Colors—Task2</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the task in the [Intro to CSS](./#practice) article. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/GavYzr).
2. Set the text color of the user names to `#319795` using the `color` property.
3. Set the text color of the time stamps to `#718096`.
4. Set the color of the “photo” labels to `#ED8936`.