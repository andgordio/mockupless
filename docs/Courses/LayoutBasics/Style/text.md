# Text

Understanding the basics of web typography is essential for rapid prototyping. Being able to control font sizes, weights and colors can help you create well-balanced layouts without spending too much time on details.

There’s a mind-blowing amount of ways to control the look and the behavior of text with HTML and CSS. This article introduces you to the very core properties of type: family, size, weight, alignment and color.

## font-family

With the `font-family` property you can specify the font for a container:

```html
<div style="font-family: Helvetica, Arial, sans-serif;">
  Some sans-serif text.
</div>
<div>
  A container with no font-family specified. The default serif is applied.
</div>
```

<iframe height="204" style="width: 100%;" scrolling="no" title="Style—Text—family" src="//codepen.io/andgordy/embed/eaYZYY/?height=204&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eaYZYY/'>Style—Text—family</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You can list multiple fonts separated by commas to provide a browser with alternatives if it fails to load the first one on your list. In the example above, Helvetica will be applied to the first container by default. If Helvetica is not installed on the operating system of a user, which is common for Windows PCs, Arial will be applied. If Arial is absent too, the system's default sans-serif font will be applied.

It is common to put one of the three generic font families—`serif`, `sans-serif` or `monospace`—in the end of your list. This way, when all the fonts you specified fail to load, a system’s default font family is applied.

When you apply the `font-family` property to a container, its children inherit the value of the property by default. If a child has its own `font-family` specified, it overwrites the parent’s value:

```html
<div style="font-family: 'Courier New', Courier, monospace">
  <div>Some monospaced text.</div>
  <div>Also monospaced.</div>
  <div style="font-family: Helvetica, Arial, sans-serif;">Some sans-serif here.</div>
</div>
```

<iframe height="218" style="width: 100%;" scrolling="no" title="Style—Text—family, inheritance" src="//codepen.io/andgordy/embed/LopRXv/?height=218&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/LopRXv/'>Style—Text—family, inheritance</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Note that a font name must be enclosed in single quotes if it consists of two or more words, like this: `'Courier New'`.

When prototyping, you are not limited to the fonts that are built into the operating systems. In the Frameworks and libraries section of this course you will learn to use fonts from a nice collection of typefaces in the Google Fonts library.

## font-size

The `font-size` property allows you to set the size of the text inside a container:

```html
<div style="font-size: 32px;">
  Title of the page
</div>
<div style="font-size: 16px;">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, deleniti!
</div>
```

<iframe height="229" style="width: 100%;" scrolling="no" title="Style—Text—size" src="//codepen.io/andgordy/embed/ZNEWYz/?height=229&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ZNEWYz/'>Style—Text—size</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Using pixels for font sizes is perfectly fine for prototyping. However, you should know that most design systems and frameworks have text sizes defined in `em` or `rem`. These units allow you to specify font sizes relatively to a default value. For example, if `1rem` is `16px` by default, so if you set the font size of a container to be `1.5rem` it will render to `24px`. 

```html {1,4}
<div style="font-size: 1rem;">
  This text is rendered to 16px (16px * 1)
</div>
<div style="font-size: 1.5rem;">
  This text is rendered to 24px (16px * 1.5)
</div>
```

This allows you to change the size of all fonts throughout the project by changing only one, default, value.

## font-weight

The `font-weight` property allows you to use different weight variations of a font:

```html {3,7,10}
<div style="font-family: Helvetica, Arial, sans-serif;">
  <div style="font-size: 32px;
              font-weight: 300;">
    Title of the page
  </div>
  <div style="font-size: 13px;
              font-weight: bold;">
    Today, 9:15am
  </div>
  <div style="font-weight: 500">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, deleniti!
  </div>
</div>
```

<iframe height="273" style="width: 100%;" scrolling="no" title="Style—Text—weight, numeric" src="//codepen.io/andgordy/embed/pmoyvm/?height=273&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/pmoyvm/'>Style—Text—weight, numeric</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You can specify font weight in 2 ways: with the numeric values, or with the named ones:

- Numeric values are: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, where 100 is the lightest and 900 is the boldest.
- Named values include `normal` (equivalent of 400) and `bold` (equivalent of 700).

Note that most fonts don’t have all 9 weight variations. If you set font weight to 300, for example, and the font you are using doesn’t have this variation, it will be replaced with another weight variation by a browser using [Fallback weights](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Fallback_weights) system.

When the `font-weight` property gets inherited by the children of a container:

```html
<div style="font-weight: 900;">
  <div>This text is the boldest</div>
  <div>
    <div>This one is bold too</div>
    <div>So is this one</div>
  </div>
</div>
```

<iframe height="221" style="width: 100%;" scrolling="no" title="Style—Text—weight, inheritance" src="//codepen.io/andgordy/embed/ZNbJxa/?height=221&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ZNbJxa/'>Style—Text—weight, inheritance</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## text-align

`text-align` allows you to specify the horizontal alignment of the text inside a container. The options are: `left`, `center`, `right`:

```html
<div style="text-align: left;">
  One to the left
</div>
<div style="text-align: center;">
  One in the middle
</div>
<div style="text-align: right;">
  And one to the right
</div>
```

<iframe height="223" style="width: 100%;" scrolling="no" title="Style—Text—align" src="//codepen.io/andgordy/embed/vwYGKp/?height=223&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/vwYGKp/'>Style—Text—align</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Notice that this property—unlike family, size and weight—starts with `text-`, not `font-`. There seems to be [a justification](https://stackoverflow.com/questions/21075127/font-vs-text-in-css-property-names) of  having different prefixes for different font properties, but in reality, you just need to remember the full names of the properties to use them effectively.

## color

The `color` property allows you to specify the color of the text inside a container:

```html {3,7}
<div style="font-size: 32px;
            font-weight: 300;
            color: firebrick;">
  Title of the page
</div>
<div style="font-size: 13px;
            color: dimgray">
  Today, 9:15am
</div>
<div>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, deleniti!
</div>
```

<iframe height="223" style="width: 100%;" scrolling="no" title="Style—Text—color" src="//codepen.io/andgordy/embed/PvoNbd/?height=223&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/PvoNbd/'>Style—Text—color</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This property surprisingly doesn’t have neither `font-` nor `text-` prefix, so this is another name you just need to memorize. 

As discussed in the Color article, you can define the color in different ways: using named values, hex, RGB or HSL values. 

## Practice

Add text styles to an article design:

<iframe height="462" style="width: 100%;" scrolling="no" title="Style—Text—Task" src="//codepen.io/andgordy/embed/GavVrP/?height=462&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GavVrP/'>Style—Text—Task</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the [starting prototype](https://codepen.io/andgordy/pen/mYMNXo?editors=1000). It includes the required content and some necessary styles.
2. Change the font family of the title, the subtitle and the intro paragraph to sans-serif.
3. Change the size of the title to 30px, the intro paragraph to 19px and the body of the article to 18px.
4. Make the title bold.
5. Change the color of the subtitle to #718096.
6. Align the title and the subtitle to the center.