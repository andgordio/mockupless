# Alignment

One of the greatest powers a flex container has is the ability to control the alignment of its child containers. You can specify the horizontal and the vertical alignments with two different properties that are explored below.

## align-items

When flex children have different height you can specify the vertical alignment with the `align-items` property:

<iframe height="331" style="width: 100%;" scrolling="no" title="Flex—Alignment—align-items" src="//codepen.io/andgordy/embed/eaOjYE/?height=331&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eaOjYE/'>Flex—Alignment—align-items</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- `flex-start` aligns to top.
- `center` centers vertically.
- `flex-end` aligns to bottom.
- `stretch`, the default value, makes the height of the child containers equal to the highest of the them. Child containers with the specified `height` property won’t stretch.

## justify-content

The `justify-content` property allows you to align child containers horizontally:

<iframe height="515" style="width: 100%;" scrolling="no" title="Flex—Alignment—justify-content" src="//codepen.io/andgordy/embed/RmbBRz/?height=515&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/RmbBRz/'>Flex—Alignment—justify-content</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- `flex-start`, the default value, aligns to the left.
- `center` centers horizontally.
- `flex-end` aligns to the right.

There are three more values that distribute the horizontal space evenly:

<iframe height="517" style="width: 100%;" scrolling="no" title="Flex—Alignment—justify-content 2" src="//codepen.io/andgordy/embed/pmzZew/?height=517&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/pmzZew/'>Flex—Alignment—justify-content 2</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- `space-between` distributes the space evenly between the containers.
- `space-around` distributes the space evenly around the containers.
- `space-evenly` distributes the space evenly between the containers and the edges of the parent container.

## Turning tables

The specs above are true for flex parent container with the default direction, which is `row`. When you change the direction to `column`, all the properties of the flex container rotate 90 degrees clockwise:

- `align-items` switches to vertical alignment. For example, `align-items: flex-start` align to the left and `align-items: flex-end` aligns to the right.
- `justify-content` switches to horizontal alignment. For example, `justify-content: flex-start` aligns to the top, `justify-content: flex-end` aligns to the bottom, etc.

This can be confusing at first, and in reality it’s easy to mix up the alignments even after years of practice. The good news is, since there are only two alignment properties, if one of them did not work properly, you just need to switch to another one.

## Practice

### Centered

A centered container that doesn’t expand beyond a fixed width is a very popular layout in responsive design. Open [this prototype](https://s.codepen.io/andgordy/debug/eaGbBZ) and try resizing the window. You should notice that on larger screens the white container has the fixed width, and on smaller screens it adjusts to the width of the viewport. Let’s create this layout step-by-step:

<iframe height="428" style="width: 100%;" scrolling="no" title="Flex—Alignment—Task 1" src="//codepen.io/andgordy/embed/eaGbBZ/?height=428&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eaGbBZ/'>Flex—Alignment—Task 1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new pen. In CSS, apply `margin: 0` to the `body` tag.
2. In HTML, create a parent flex container with light-gray background.
3. Make it full-screen using `height: 100vh`.
4. Center the content horizontally using `justify-content: center`. 
5. Create a child container with white background, and subtle borders on the sides.
6. As described in max-width section of the Box model article, prevent the container from expanding beyond a particular size by applying `width: 100%` and `max-width: 560px`. Try resizing the Preview now: you should see a centered container that takes the full screen width on smaller screens, and has a fixed width on larger screens.

There’s a number of ways to center containers horizontally, but using a flex parent with the `justify-content: center` property is particularly useful for prototyping. If you decide you want a sidebar next to the main area, you will only need to add another child container and they will be both centered:

<iframe height="444" style="width: 100%;" scrolling="no" title="Flex—Alignment—Task 1, multicolumn" src="//codepen.io/andgordy/embed/eaGbXW/?height=444&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eaGbXW/'>Flex—Alignment—Task 1, multicolumn</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Tabs

Design a tab bar:

<iframe height="233" style="width: 100%;" scrolling="no" title="Flex—Alignment—Task 2" src="//codepen.io/andgordy/embed/JqrxjZ/?height=233&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JqrxjZ/'>Flex—Alignment—Task 2</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new pen. In CSS, apply `margin: 0`  and a light-gray background to the `body` tag.
2. In HTML, create a flex parent container with white background and a gray bottom border.
3. Create three child containers. Apply a text color and a colored bottom border to one of them to indicate the selected state.
4. Add the `justify-content` property to the parent container and try different options of space distribution to find the one that works best for you.