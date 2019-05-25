# Units

## px

The variety of ways to measure distance and size in CSS can surprise you. However, it all starts with the unit that you should be pretty familiar with: **a pixel**. Pixels are used everywhere from measurements in graphic design tools to screen resolutions, and they are popular on the web too.

As you probably know, the size of a pixel is different on different screens. High-density screens, like Retina display on iPhones and MacBooks, fit multiple physical pixels into one pixel unit. Google calls these pixel units [density-independent pixels](https://material.io/design/layout/density-resolution.html#density-independence), and Apple calls them [points](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/). But no matter how complex the technical part of the pixel rendering gets, remember that in CSS pixels mean the same thing they do in Figma or other graphic design tools.

Pixels are written as `px` in CSS:

```html
<div style="width: 100px; height: 100px; background-color: teal;"></div>
```

<iframe height="235" style="width: 100%;" scrolling="no" title="Style—Units—px" src="//codepen.io/andgordy/embed/EzYJLx/?height=235&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/EzYJLx/'>Style—Units—px</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## %

**Percentages** is another popular way to measure size and distance on the web. A container that has width set to 50 percent will be half the size of its **parent container**. It’s very important to understand that percents are a relative value, for example: two containers with the width set to 25% can have different size depending on the size of their parent containers.

Percents are written as `%` in CSS:

```html {2}
<div style="width: 200px; height: 200px; background-color: tomato;">
  <div style="width: 50%; height: 50%; background-color: teal;">
  </div>
</div>
```

When you preview the code above, you see that the child container is indeed half the width and half the height of its parent container:

<iframe height="338" style="width: 100%;" scrolling="no" title="Style—Units—%, simple" src="//codepen.io/andgordy/embed/joPmXJ/?height=338&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/joPmXJ/'>Style—Units—%, simple</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## vw, vh

Another way to measure size and distance on the web is with the use of the **viewport units**. Viewport is the area where your prototype is rendered. On CodePen, the Preview panel is the viewport. If you switch to *Debug mode* in CodePen (found in the *Change View* menu), the browser tab becomes your viewport.

Two main viewport units are `vw` and `vh`:

- `vw` stands for “percentage of viewport width”.
- `vh` stands for “percentage of viewport height”.

Most often these units are used to define the width and the height of a container:

```html
<div style="width: 50vw; height: 50vh; background-color: teal;"></div>
```

If you try this code on CodePen and resize the browser window, you will see that the container is always half the width and half the height of the Preview panel:

<iframe height="449" style="width: 100%;" scrolling="no" title="Style—Units—vw and vh" src="//codepen.io/andgordy/embed/WBeWyg/?height=449&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/WBeWyg/'>Style—Units—vw and vh</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Other units

As mentioned in the beginning of this article, there’s a variety of units you can use in CSS. You can find the full list here: [https://www.w3schools.com/cssref/css_units.asp](https://www.w3schools.com/cssref/css_units.asp). Some units, like `em` and `rem`, are used quite often and they will be explored later in the course. Other units, like inches and millimeters, are not as popular and they rarely find there place in prototyping.

## Practice

Create a layout with three colored containers:

<iframe height="477" style="width: 100%;" scrolling="no" title="Style—Units—task 1" src="//codepen.io/andgordy/embed/NVvoPb/?height=477&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/NVvoPb/'>Style—Units—task 1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the [starting prototype](https://codepen.io/andgordy/pen/WBEPLM). It includes the required containers and some necessary styles.
2. Make the parent container with *LemonChiffon* background color full-screen using `width` and `height` properties with viewport units.
3. Make the children containers half the width and half the height of the parent container using percentages.

Try resizing the Preview section or the browser window. The parent container should always fill the whole viewport, and each of the children should always be the size of the quarter of the viewport.