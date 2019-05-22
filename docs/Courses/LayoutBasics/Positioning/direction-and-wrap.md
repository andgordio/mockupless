# Direction and wrap

## **flex-direction**

As you’ve seen in the previous article, containers are stacked horizontally in a flex parent by default:

<iframe height="234" style="width: 100%;" scrolling="no" title="Flex—Parent" src="//codepen.io/andgordy/embed/zXgZWq/?height=234&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/zXgZWq/'>Flex—Parent</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You can change the way child containers are stacked with the `flex-direction` property:

```html {2}
<div style="display: flex;
            flex-direction: column;">
  <div style="background-color: #E2E8F0; padding: 12px;">One</div>
  <div style="background-color: #CBD5E0; padding: 12px;">Two</div>
  <div style="background-color: #718096; padding: 12px;">Three</div>
</div>
```

<iframe height="294" style="width: 100%;" scrolling="no" title="Flex—Direction, column" src="//codepen.io/andgordy/embed/wbGPGP/?height=294&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/wbGPGP/'>Flex—Direction, column</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The available values are:

- `row`, the default value, stacks containers horizontally from left to right.
- `column` stacks containers vertically from top to bottom.
- `row-reverse` stacks from right to left, the opposite of `row`.
- `column-reverse` stacks from bottom to top, the opposite of `column`.

## **flex-wrap**

By default, all containers inside a flex container will do whatever it takes to fit into one stack, and the will never create a new one:

<iframe height="236" style="width: 100%;" scrolling="no" title="Flex—Flex-no wrap" src="//codepen.io/andgordy/embed/yWOjpe/?height=236&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/yWOjpe/'>Flex—Flex-no wrap</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You can allow the containers to create new lines with the `flex-wrap` property:

```html {2}
<div style="display: flex;
            flex-wrap: wrap;">
  <div style="background-color: #A0AEC0; width: 25%;">
    One
  </div>
  <div style="background-color: #CBD5E0; width: 25%; ">
    Two
  </div>
  <div style="background-color: #E2E8F0; width: 25%;">
    Three
  </div>
  <div style="background-color: #E2E8F0; width: 25%;">
    Four
  </div>
  <!--...-->
</div>
```

<iframe height="240" style="width: 100%;" scrolling="no" title="Flex—Flex-wrap" src="//codepen.io/andgordy/embed/NmQpVV/?height=240&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/NmQpVV/'>Flex—Flex-wrap</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

All child containers have width set to 25%, so only four of them can fit into one line. With `flex-wrap: wrap` applied to the flex parent container, the fifth item is allowed to create a new a line to satisfy its `width` property.

The `flex-wrap` property can have one of three values:

- `nowrap`, the default value, prevents child containers from creating new lines by forcing them to fit into a single one.
- `wrap` allows child containers to create new lines when it is required by their styles.
- `wrap-reverse` takes the behavior of `wrap`, but a new line is created on above the existing ones.

## Practice

### Buttons alignment

Align the buttons vertically:

<iframe height="372" style="width: 100%;" scrolling="no" title="Flex—direction—Task 1" src="//codepen.io/andgordy/embed/OYxgVj/?height=372&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/OYxgVj/'>Flex—direction—Task 1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the Buttons task in the [Box model article](./box-model.md#buttons). You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/YbrNOx).
2. Wrap all buttons in a single flex parent container.
3. Apply vertical direction to the flex container.

In the next article, you will learn why the buttons take full width in a flex container with vertical direction by default.

### Gallery

Create a two-column image gallery:

<iframe height="396" style="width: 100%;" scrolling="no" title="Flex—wrap—Task 1" src="//codepen.io/andgordy/embed/dEVRpX/?height=396&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/dEVRpX/'>Flex—wrap—Task 1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the [starting prototype](https://codepen.io/andgordy/pen/vweZpZ?editors=1000). It includes the containers with image and some necessary styles.
2. Wrap all containers in a single flex parent container.
3. Allow items in the flex container to create new lines using the `flex-wrap` property.
4. Set the width of all child `div` containers to take half of the parent’s width using percentages.