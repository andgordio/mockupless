# Background

Most containers in HTML are transparent by default. You can use a **color** and an **image** as a background. Images come with a number of additional settings.

## Color

You can apply a color to a container’s background with the `background-color` property:

```html
<div style="background-color: #FF4949;">
  What a background!
</div>
```

<iframe height="218" style="width: 100%;" scrolling="no" title="Style—Background—color" src="//codepen.io/andgordy/embed/byGpLy/?height=218&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/byGpLy/'>Style—Background—color</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

As mentioned in the [Colors](./colors.md) article, there’s a variety of ways to define colors in CSS: 

```css
background-color: tomato;                   /* named value */
background-color: #FF4949;                  /* hex value */
background-color: rgba(255, 73, 73, 1);     /* rgba value */
background-color: hsla(0, 100%, 50%, 0.3);  /* hsla value */
background-color: transparent;              /* no background */
```

## Image

You can fill the background of a container with an image using the `background-image` property and a URL of an image: 

```html
<div style="height: 400px;
            background-image: url('http://website.com/picture.jpg');">
</div>
```

<iframe height="567" style="width: 100%;" scrolling="no" title="Style—Background—image" src="//codepen.io/andgordy/embed/EzxKLW/?height=567&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/EzxKLW/'>Style—Background—image</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The `height` property sets the vertical size of the container. This property is explored in more detail in the next section of the course.

When an image is used for background it is rendered at its full size from the top left corner of a container. If the image doesn’t fit the container, it is cropped:

```html
<div style="height: 200px;
            background-image: url('http://website.com/picture.jpg');">
</div>
```

<iframe height="380" style="width: 100%;" scrolling="no" title="Style—Background—image, cropped" src="//codepen.io/andgordy/embed/eaYZog/?height=380&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eaYZog/'>Style—Background—image, cropped</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If the background image is smaller than its container, it is repeated:

<iframe height="568" style="width: 100%;" scrolling="no" title="Style—Background—image, repeated" src="//codepen.io/andgordy/embed/QRWNRb/?height=568&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/QRWNRb/'>Style—Background—image, repeated</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You can control the position, the size and the behavior of a background image with a set of additional properties, some of which are explored below. 

### Position

You can specify the vertical and the horizontal alignment of a background image with the `background-position` property:

```html {2,5}
<div style="background-image: url('http://website.com/picture.jpg');
            background-position: bottom center;">
</div>
<div style="background-image: url('http://website.com/picture.jpg');
            background-position: top left;">
</div>
```

<iframe height="390" style="width: 100%;" scrolling="no" title="Style—Background—image, position" src="//codepen.io/andgordy/embed/Beazzy/?height=390&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/Beazzy/'>Style—Background—image, position</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- Vertical alignment keywords are: `top`, `center`, `bottom`.
- Horizontal alignment keywords are: `left`, `center`, `right`.

### Repeat

You can also define whether you want the background image to be repeated when it’s smaller than the container using `background-repeat`:

```html {2}
<div style="background-image: url('http://website.com/picture.jpg');
            background-repeat: no-repeat;
            background-color: #ddd;">
</div>
```

<iframe height="453" style="width: 100%;" scrolling="no" title="Style—Background—image, no-repeat" src="//codepen.io/andgordy/embed/WBrrGv/?height=453&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/WBrrGv/'>Style—Background—image, no-repeat</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The available values are:

- `repeat` repeats a background image both vertically and horizontally. This value is useful for filling a container’s background with a pattern. It’s the default value.
- `repeat-x` repeats an image horizontally.
- `repeat-y` repeats an image vertically.
- `no-repeat` prevents a background image from being repeated.

As you can see in the example above, if the background image is smaller than the container, the background color becomes visible. You will also be able to see the color through the background images with transparency.

### Size

You can specify the size of a background image with the `background-size` property:

```html {2}
<div style="background-image: url('http://website.com/picture.jpg');
            background-size: 200px;">
  Hello
</div>
```

This is particularly useful when you export images for high-resolution displays in @2x or @3x, and you need to set their original dimensions to use as a background. If you are reading this article on a Retina display or a similar one, you should notice how sharp the image below is compared to the images in the previous examples:

<iframe height="563" style="width: 100%;" scrolling="no" title="Style—Background—image, size" src="//codepen.io/andgordy/embed/arbZmY/?height=563&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/arbZmY/'>Style—Background—image, size</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

There's also a special value, `cover`, that scales an image to fill the container completely without cropping too much area of the image:

```css
background-size: cover;
```

This value, when combined with `background-position`, provides you with freedom to align background without having to worry whether the image fits into a container, or whether it’s being cropped too much:

<iframe height="783" style="width: 100%;" scrolling="no" title="Style—Background—image, cover" src="//codepen.io/andgordy/embed/VOwjmg/?height=783&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/VOwjmg/'>Style—Background—image, cover</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Practice

Create a small photo gallery using the `background-image` property:

<iframe height="627" style="width: 100%;" scrolling="no" title="Style—Background—Task" src="//codepen.io/andgordy/embed/wbqVbK/?height=627&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/wbqVbK/'>Style—Background—Task</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the task in the [Colors article](./colors.md#boxes). You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/JqyVWM).
2. Add background images to all of the three containers. Here are the URLs of the images used in the prototype above:

```html
https://images.unsplash.com/photo-1529114901968-3b83794634b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60
https://images.unsplash.com/photo-1542772512-2484fbd3ea9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60
https://images.unsplash.com/photo-1538103600552-1bca79408b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60
```

3. Apply the `background-size: cover` to all containers for a better fit.

The images in this prototype are found on [Unsplash](https://unsplash.com). This is a great source of free high-quality photographs, that comes with a nice feature that gives you extra control. When you right-click on a photo on Unsplash, and select *Copy Image Address*, the URL of this type is copied:

```html
https://images.unsplash.com/...w=1600&q=60
```

Notice that the URL ends with `w=`, which stands for width, and `q=`, which stands for quality. You can change the values that follow these letters to request a different size of an image (in pixels) and a different quality (from 0 to 100). For example, here’s a URL that requests the version of an image that is 1280 pixels wide and is of maximum quality:

```html
https://images.unsplash.com/...w=1280&q=100
```