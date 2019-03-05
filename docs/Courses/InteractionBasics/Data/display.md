# Displaying data

## Text

Data stored in a variable can be rendered in layout as plain text:

![2 in the middle of the screen](./media/connect-text.png)

To display a variable’s value you place its name in the layout surrounded by two pairs of curly braces:

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

This syntax indicates that `itemsInCart` is a variable and its value should be rendered. Remember, all dynamic contents must be placed inside the container with `id="app"` found in the [template](./../Setup/).

A variable doesn't have to take up the whole div container. You can put it next to a static text or next to another variable: 

![Steve Allen, 2 pieces, $50 in the middle of the screen](./media/connect-text-2.png)

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

This way you can store variable `total` as a number `50`, without the $ sign, and add the sign in the layout.

## Images

Together with data that can be rendered in a prototype you can store an image url in a variable, if you want it to be dynamic:

![a picture of a duck](./media/connect-image.png)

A special kind of `src` attribute is applied to img tag to achieve this:

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

A colon in front of `src` means that the content of this attribute should not be treated as a url, like in regular src. <!-- todo: link: to Layout basics about images and src --> Instead, you place a name of a variable there, and its value will be taken for a url. 

Next section—[Events](./../Events/click.md)—explains how values in variables can be changed with interactions so rendered texts and images change too. But first, another way of connecting layout and data is explored in the next article: [Forms](./forms.md). 

<!-- todo: links? :href="linkUrl" -->

## Self-practice

Use data to render image and texts on a card:

<!-- referfence: https://www.allmodern.com/furniture/pdp/gus-modern-elk-wingback-chair-gus1423.html?piid=28413244 -->
![a card with a photo of a chair, its name, producer and price](./media/connect-practice-1.png)

1. Download [starting file](./../../../course-files/interaction-basics/data/data-text-and-image-practice-start.html.zip) and open it VSCode.
2. The layout is already included into this file together with required data. Study the code to locate the card container and variables.
3. Use the value of `imageUrl` to render an image and other variables to render texts.
4. Open the prototype in Chrome and preview the results.
5. Open Vue dev tools and try changing values. You should be able to see changes in UI as soon as you apply them in dev tools.

If you have problems completing the task download the [final result](./../../../course-files/interaction-basics/data/data-text-and-image-practice-end.html.zip).



<!-- too early
## Background

```html
<div id="app">
  <div :style=""></div>
<div>
```
```js
data: {
  bgUrl: 'https://images.unsplash.com/photo-1543949790-0f66d1f34270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80'
}
```-->