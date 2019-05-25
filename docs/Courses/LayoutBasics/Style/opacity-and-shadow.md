# Opacity and shadow

The final pair of decorative properties that are explored in this section of the course are `opacity` and `box-shadow`. The first property adds transparency to a container, and the second one adds an outer shadow.

## Opacity

The `opacity` property defines how opaque the container is on a scale from `0` to `1`, where `0` is fully transparent and `1` is fully opaque:

```html
<div style="opacity: 0.2;">0.2</div>
<div style="opacity: 0.4;">0.4</div>
<div style="opacity: 0.6;">0.6</div>
<div style="opacity: 0.8;">0.8</div>
<div style="opacity: 1;">1</div>
```

<iframe height="222" style="width: 100%;" scrolling="no" title="Style—Opacity, scale" src="//codepen.io/andgordy/embed/LoYxRJ/?height=222&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/LoYxRJ/'>Style—Opacity, scale</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## **Shadow**

The `box-shadow` property allows you to add an outer shadow to a container:

```html
<div style="box-shadow: 2px 8px 15px 2px rgba(0, 24, 64, 0.12);">
  <!-- container’s content -->
</div>
```

<iframe height="236" style="width: 100%;" scrolling="no" title="Style—Shadow" src="//codepen.io/andgordy/embed/oRNBZQ/?height=236&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/oRNBZQ/'>Style—Shadow</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

`box-shadow` expects five values in the particular order:

1. Horizontal offset
2. Vertical offset
3. Blur radius 
4. Spread radius
5. Color

You can apply multiple shadows separated by commas, if you want to create a more realistic effect:

```html
<div style="box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                        0 4px 6px -2px rgba(0, 0, 0, 0.05);">
  <!-- container’s content -->
</div>
```

<iframe height="235" style="width: 100%;" scrolling="no" title="Style—Shadow, multiple" src="//codepen.io/andgordy/embed/eaJWeP/?height=235&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eaJWeP/'>Style—Shadow, multiple</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Practice

Add a shadow to the card design:

<iframe height="271" style="width: 100%;" scrolling="no" title="Style—Shadow—Task" src="//codepen.io/andgordy/embed/rgGVNJ/?height=271&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/rgGVNJ/'>Style—Shadow—Task</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the [starting prototype](https://codepen.io/andgordy/pen/XwebPo?editors=1000). It includes the layout and some necessary styles.
2. Find an HTML shadow generator online. For example, you can use this one: [https://cssgenerator.org/box-shadow-css-generator.html](https://cssgenerator.org/box-shadow-css-generator.html). Create a shadow and copy the `box-shadow` property.
3. Apply the copied `box-shadow` property to the main container.
4. Change the opacity of the subtitle, so it’s displayed half-transparent.