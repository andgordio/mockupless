# Border

## Width, style and color

It takes 3 properties to apply an outline to a container:

- `border-width` specifies the thickness of an outline.
- `border-style` allows you to choose from a number of styles that include `solid`, `dotted` and `slashed`.
- `border-color` predictably specifies the color of an outline.

```html
<div style="border-width: 2px;
            border-style: solid;
            border-color: teal;">
  Bordered container
</div>
```

<iframe height="201" style="width: 100%;" scrolling="no" title="Style—Border—width, style, color" src="//codepen.io/andgordy/embed/xNxOYy/?height=201&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/xNxOYy/'>Style—Border—width, style, color</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You can also use a shorthand property `border`, that allows you to specify all three values in a single property:

```html
border: 2px solid #000;
```

The order is important—width goes first, then style, then color. Also, the `border` property has variations that allow you to specify which side of a container you want to apply a border to:

```html
<div style="border-top: 1px solid silver;
            border-bottom: 2px solid black;">
  A container with borders at the top and the bottom
</div>
```

<iframe height="201" style="width: 100%;" scrolling="no" title="Style—Border—width, style, color—bottom" src="//codepen.io/andgordy/embed/EzVoOe/?height=201&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/EzVoOe/'>Style—Border—width, style, color—bottom</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The available suffixes are `-top`, `-bottom`, `-left` and `-right`. As you can see in the example above, you can apply different borders to different sides of a container.

To remove a border from a container, apply `border: none`.

## Radius

The `border-radius` property rounds the corners of a container:

```html {2}
<div style="border: 1px solid teal;
            border-radius: 4px;
            text-align: center;
            color: teal;">
  OK
</div>
```

<iframe height="198" style="width: 100%;" scrolling="no" title="Style—Border—radius" src="//codepen.io/andgordy/embed/byGeMw/?height=198&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/byGeMw/'>Style—Border—radius</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You don’t have to apply a border to see the effect of the `border-radius` property. If a container has a background color you will be able to see the round corners too:

```html {1,2}
<div style="background-color: teal;
            border-radius: 4px;
            text-align: center;
            color: white;">
  OK
</div>
```

<iframe height="210" style="width: 100%;" scrolling="no" title="Style—Border—radius, background" src="//codepen.io/andgordy/embed/OYJXEM/?height=210&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/OYJXEM/'>Style—Border—radius, background</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Practice

Design a set of buttons:

<iframe height="373" style="width: 100%;" scrolling="no" title="Style—Border—Task" src="//codepen.io/andgordy/embed/RmLPXo/?height=373&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/RmLPXo/'>Style—Border—Task</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the [starting prototype](https://codepen.io/andgordy/pen/yWzYJG?editors=1000). It includes five containers with some necessary styles.
2. Apply appropriate background and text colors to all buttons.
3. Apply a subtle border radius to the Primary, the Secondary, the Ghost and the Alert buttons.
4. Apply a pixel-wide solid border to the Ghost and the Pill buttons.
5. Apply a border radius of 9999px to the Pill button. This tricks makes containers fully rounded on the sides.