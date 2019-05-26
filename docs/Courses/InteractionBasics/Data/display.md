# Displaying data

## Text

Data stored in a variable can be rendered as plain text in layout:

![2 rendered from data](./media/connect-text.png)

To display a variable’s value, place the variable name in the layout, in between two pairs of curly braces:

```html
<div id="app">
  <div>{{itemsInCart}}</div>
<div>
```
```js
data: {
  itemsInCart: 2
}
```

This special syntax indicates that `itemsInCart` is a variable and that its value should be rendered. Remember, all dynamic content must be placed inside the container with the `id="app"` attribute found in the [template](./../Setup/).

A variable doesn’t have to take up the whole div container. You can put it next to static text or next to another variable: 

<iframe height="348" style="width: 100%;" scrolling="no" title="Data—Displaying—Multiple" src="//codepen.io/andgordy/embed/mgmPjV/?height=348&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/mgmPjV/'>Data—Displaying—Multiple</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```html
<div id="app">
  <div>{{firstName}} {{lastName}}</div>
  <div>{{itemsInCart}} pieces</div>
  <div>${{total}}</div>
<div>
```
```js
data: {
  firstName: 'Steve',
  lastName: 'Allen',
  itemsInCart: 2,
  total: 50
}
```

This way, you can store the number 50 in the variable `total` without the `$` character and add the dollar sign to the layout.

## Images

Together with data that can be rendered in a prototype, you can store an image URL in a variable if you want the URL to be dynamic:

<iframe height="462" style="width: 100%;" scrolling="no" title="Data—Displaying—Image" src="//codepen.io/andgordy/embed/mgmPzV/?height=462&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/mgmPzV/'>Data—Displaying—Image</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

A special kind of `src` attribute is applied to the `img` tag to achieve this:

```html
<div id="app">
  <img :src="imageUrl">
<div>
```
```js
data: {
  imageUrl: 'https://images.unsplash.com/photo-1543949790-0f66d1f34270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80'
}
```

A colon in front of `src` means that the content of this attribute should not be treated as a URL, as it is with the regular `src` [attribute](./../../../Courses/LayoutBasics/Core/images.md). Instead, you place a variable name there, and the variable’s value will be taken for a URL. 

The next section—[Events](./../Events/)—explains how variable values can be changed with interactions so that rendered text and images change too. But first, another way to connect the layout and data is explored in the next article: [Forms](./forms.md). 

## Practice

Use data to render image and text on a card:

<iframe height="610" style="width: 100%;" scrolling="no" title="Data—Displaying—Task: Chair" src="//codepen.io/andgordy/embed/GLmZPq/?height=610&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GLmZPq/'>Data—Displaying—Task: Chair</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new prototype from the [template](./../Setup/).
2. In the JS section, add 4 variables to the `data` container:
```js
  imageUrl: 'https://secure.img1-fg.wfcdn.com/im/41465224/resize-h700-p1-w700%5Ecompr-r85/6677/66771259/Elk+Wingback+Chair.jpg',
  title: 'Elk Wingback Chair',
  producer: 'Gus* Modern',
  price: 1200
```
3. Create a card layout in the HTML section.
4. Use the value of `imageUrl` to render an image. Use the other 3 variables to render texts.
5. Try changing the values of the variables. You should see changes in the preview.