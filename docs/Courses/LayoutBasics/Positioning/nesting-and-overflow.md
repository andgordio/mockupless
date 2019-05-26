# Nesting and overflow

## Nesting

As explored in the [Nesting](./../Core/nesting.md) article of the Core section, the parent-child relations between containers are relative. A child of one container can be a parent to others. This is true for flexbox containers too: children of a flex container can be flex parents themselves. This allows you to create complex layouts like the one below:

<iframe height="465" style="width: 100%;" scrolling="no" title="Flex—Nesting" src="//codepen.io/andgordy/embed/mgNmdz/?height=465&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/mgNmdz/'>Flex—Nesting</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In the prototype above, the whole page is a full-screen flex container with three children—top nav bar, content and bottom tab bar:

```html
<div style="display: flex;
            flex-direction: column;
            height: 100vh;">
  <!-- TOP NAV BAR -->
  <div>...</div>
  <!-- MAIN CONTENT -->
  <div style="flex: 1;">...</div>
  <!-- BOTTOM TAB BAR -->
  <div>...</div>
</div>
```

The top nav bar is itself a flex container with the default horizontal direction:

```html {3}
<div style="display: flex; flex-direction: column; height: 100vh;">
  <!-- TOP NAV BAR -->
  <div style="display: flex; align-items: center;">
    <button>Back</button>
    <div>Title</div>
    <button>Info</button>
  </div>
  <!-- MAIN CONTENT -->
  <div style="flex: 1;">...</div>
  <!-- BOTTOM TAB BAR -->
  <div>...</div>
</div>
```

The bottom toolbar is a flex parent to five tabs. The content area is also a flex parent populated with cards, that are flex containers themselves, and so on.

Flexbox allows you to organize items in one direction and to control their alignment. Nesting flex containers within flex containers—each with its own set of properties—allows you to create almost any layout you can imagine. 

## Overflow

The `overflow` property isn’t directly related to flexbox, but it is required for most layouts created with flex. `overflow` specifies the behavior of child containers when they don’t fit into the container. 

By default, when a child container is larger than its parent, it remains visible.Wwith backgrounds applied, you can see how the child goes beyond the parent’s boundaries:

```html {2,6}
<div style="width: 80px;
            height: 80px;
            background-color: yellow;
            padding: 12px;">
  <div style="width: 40px;
              height: 160px;
              padding: 12px;
              background-color: blue;">
  </div>
</div>
```

<iframe height="411" style="width: 100%;" scrolling="no" title="Flex—overflow: none" src="//codepen.io/andgordy/embed/pmzxaj/?height=411&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/pmzxaj/'>Flex—overflow: none</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Scroll

If you set the `overflow` property of the parent container to `scroll`, the content will stay within the boundaries of the parent container, and users will be able to scroll it:

```html {5}
<div style="width: 80px;
            height: 80px;
            background-color: yellow;
            padding: 12px;
            overflow: scroll;">
  <div style="width: 40px;
              height: 160px;
              padding: 12px;
              background-color: blue;">
  </div>
</div>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Flex—overflow: scroll" src="//codepen.io/andgordy/embed/GaqzLJ/?height=300&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GaqzLJ/'>Flex—overflow: scroll</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You are going to use `overflow: scroll` often in prototyping to create scrollable areas like in the two-column layout below:

<iframe height="450" style="width: 100%;" scrolling="no" title="Flex—overflow: scroll, Mockupless Basic" src="//codepen.io/andgordy/embed/mYEvjb/?height=450&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/mYEvjb/'>Flex—overflow: scroll, Mockupless Basic</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The example above is created using a full-screen flex container with two children. `overflow: scroll` is added to both children, which enables two individual scrolls: 

```html
<div style="display: flex; height: 100vh;">
  <!-- LEFT COL -->
  <div style="width: 240px; overflow: scroll;">...</div>
  <!-- RIGHT COL -->
  <div style="flex: 1; overflow: scroll;">...</div>
</div>
```

## Hidden

When the `overflow` property is set to `hidden`, the content of the container is cropped, and scrolling is not enabled:

```html {5}
<div style="width: 80px;
            height: 80px;
            background-color: yellow;
            padding: 12px;
            overflow: hidden;">
  <div style="width: 40px;
              height: 160px;
              padding: 12px;
              background-color: blue;">
  </div>
</div>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Flex—overflow: hidden" src="//codepen.io/andgordy/embed/RmRdKa/?height=300&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/RmRdKa/'>Flex—overflow: hidden</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

A common application of the `hidden` value is to crop an image so it stays within the boundaries of a container. Below, an image is placed in a flex container with rounded corners, and it is centered vertically and horizontally with the `align-items` and the `justify-content` properties:

```html
<div style="width: 160px;
            height: 160px;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;">
  <img src="http://website.com/photo.png">
</div>
```

<iframe height="336" style="width: 100%;" scrolling="no" title="Flex—overflow: hidden" src="//codepen.io/andgordy/embed/MdgLBe/?height=336&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/MdgLBe/'>Flex—overflow: hidden</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Practice

### Cards

Design a list of recent conversations:

<iframe height="373" style="width: 100%;" scrolling="no" title="Flex—overflow—Task 2" src="//codepen.io/andgordy/embed/rgYOaQ/?height=373&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/rgYOaQ/'>Flex—overflow—Task 2</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new pen. In CSS, apply `margin: 0` to the `body` tag.
2. Start by designing a single card. Create a flex parent container with two children, one with a fixed width for a photo, and another with `flex: 1` to take the rest of the space (apply a blue background color to make to effect visible):

```html
<div style="display: flex;">
  <div style="width: 64px; height: 64px;"></div>
  <div style="flex: 1; background-color: #63B3ED;"></div>
</div>
```

3. To add a round photo, turn the first child into a flex container, apply `overflow: hidden` and big border radius, and center the content:

```html {3-6}
<div style="width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            border-radius: 999px;
            overflow: hidden;">
  <img src="https://...jpg" style="width: 64px;">
</div>
```

- You can copy image URLs from [UI Faces](https://uifaces.co).

4. Add two child containers to the blue container. The first one is a flex container for a user name and a time stamp. The second one for a message:

```html {2,7}
<div style="flex: 1; background-color: #63B3ED;">
  <div style="display: flex">
    <div>Joe Cole</div>
    <div style="flex: 1"></div>
    <div>12:15 AM</div>
  </div>
  <div>
    Have they heard of Klimt anyway?
  </div>
</div>
```

5. Apply proper alignments and text styles to the elements.

6. Duplicate the card twice to create two more cards.

7. To center the cards, wrap everything in a centered container:

```html
<div style="display: flex; justify-content: center;">
  <div style="width: 100%; max-width: 500px; padding-top: 16px;">
    <!-- cards go here -->
  </div>
</div>
```

8. Don’t forget to collapse the containers that you don’t work with to make navigating the code easier.

### Article

Create a low-fidelity design of an article page:

<iframe height="434" style="width: 100%;" scrolling="no" title="Flex—overflow—Task 1.1" src="//codepen.io/andgordy/embed/vwWOLP/?height=434&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/vwWOLP/'>Flex—overflow—Task 1.1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new pen. In CSS, apply `margin: 0` to the `body` tag.
2. In HTML, create a flex parent container. Make it full-screen using `height: 100vh`.
3. Paste the result of the task in the [flex: 1 article](./flex-1.md#centered-title) as the first child of the flex container. You can also use the code from [prototype from the article](https://codepen.io/andgordy/pen/XweGaL?editors=1000).
4. Create another child container with blue background. Apply `flex: 1` to it. You should be able to see in the Preview that this container takes all the available space:

<iframe height="383" style="width: 100%;" scrolling="no" title="Flex—overflow—Task 1.1, step 1" src="//codepen.io/andgordy/embed/PvOqQP/?height=383&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/PvOqQP/'>Flex—overflow—Task 1.1, step 1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

5. Since you need to center the article, you need to turn the blue container into a flex parent container using `display: flex` and center the content horizontally using `justify-content: center`.
6. In the blue container, create a single child container that takes full width using `width: 100%`, but doesn’t expand beyond the specified width using `max-width: 480px`.
7. Paste the result of the [Text task](./../Style/text.md#practice) in the *Box model* article into the centered container. 
8. Remove the background color from the blue container, and add `overflow: scroll` to it. This way the article area receives its own scroll, and the header always stays on top.