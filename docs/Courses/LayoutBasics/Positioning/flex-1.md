# flex: 1

Let’s create a simplistic toolbar layout:

<iframe height="224" style="width: 100%;" scrolling="no" title="Flex—flex-1" src="//codepen.io/andgordy/embed/dEbgOZ/?height=224&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/dEbgOZ/'>Flex—flex-1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Turning the toolbar into a flex parent container stacks the items horizontally and aligns them to the left by default:

```html
<div style="display: flex;">
  <div>AppName</div>
  <div>Newsfeed</div>
  <div>Explore</div>
  <div>Profile</div>
</div>
```

<iframe height="226" style="width: 100%;" scrolling="no" title="Flex—flex-1, no flex-1" src="//codepen.io/andgordy/embed/QREQgK/?height=226&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/QREQgK/'>Flex—flex-1, no flex-1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

There’s always a number of ways to achieve something in CSS, and every solution has its advantages. Since iterative design is at the core of the prototyping workflow, the best solution is the one that allows you to change layouts quicker. There’s a property, `flex: 1`, that tells a child container to take **all space inside the parent container that is not taken by other children**. You will be surprised by how many applications this property has, but first, let’s apply it to the first child container from the example above:

```html
<div style="display: flex;">
  <div style="flex: 1;">AppName</div>
  <div>Newsfeed</div>
  <div>Explore</div>
  <div>Profile</div>
</div>
```

<iframe height="223" style="width: 100%;" scrolling="no" title="Flex—flex-1, first child" src="//codepen.io/andgordy/embed/byeLMe/?height=223&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/byeLMe/'>Flex—flex-1, first child</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

With `flex: 1`, the first container pushes other items to the right by taking all available horizontal space. The effect is easier to see if you add a background color to the container:

<iframe height="225" style="width: 100%;" scrolling="no" title="Flex—flex-1 with highlights, alternative" src="//codepen.io/andgordy/embed/gJYBgB/?height=225&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/gJYBgB/'>Flex—flex-1 with highlights, alternative</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[Open the prototype](https://codepen.io/andgordy/live/gJYBgB) and try resizing the browser window. You should see that the container automatically adjusts its width and always takes as much space as it can.

An even more flexible approach is to create a separate empty container with `flex: 1`, instead of applying the property to the first container: 

```html
<div style="display: flex;">
  <div>AppName</div>
  <div style="flex: 1;"></div>
  <div>Newsfeed</div>
  <div>Explore</div>
  <div>Profile</div>
</div>
```

A background color is added to highlight the `flex: 1` child:

<iframe height="225" style="width: 100%;" scrolling="no" title="Flex—flex-1 with highlights" src="//codepen.io/andgordy/embed/JqPmKN/?height=225&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JqPmKN/'>Flex—flex-1 with highlights</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This approach gives you the freedom of distributing the space around by moving the `flex: 1` container. For example, you decide to move some items next to the title, and keep *Profile* on the right. To implement this, you just move the `flex: 1` container to where the space should be:

```html
<div style="display: flex;">
  <div>AppName</div>
  <div>Newsfeed</div>
  <div>Explore</div>
  <div style="flex: 1;"></div>
  <div>Profile</div>
</div>
```

<iframe height="224" style="width: 100%;" scrolling="no" title="Flex—flex-1 with highlights and more tabs" src="//codepen.io/andgordy/embed/wbwYJO/?height=224&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/wbwYJO/'>Flex—flex-1 with highlights and more tabs</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Multiple `flex: 1` containers

If you apply `flex: 1` to two or more child containers, they will share the available space evenly. This feature can be used, for example, to center a container:

<iframe height="225" style="width: 100%;" scrolling="no" title="Flex—flex-1: multiple, Mockupless template" src="//codepen.io/andgordy/embed/PvzRKm/?height=225&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/PvzRKm/'>Flex—flex-1: multiple, Mockupless template</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you apply `flex: 1` and `text-align: center` to the middle container, the label will not be centered, because the width of controls on left is not equal to the width of controls on the right. Below, the `flex: 1` container is highlighted:

<iframe height="222" style="width: 100%;" scrolling="no" title="Flex—flex-1: multiple, Mockupless template, middle flex" src="//codepen.io/andgordy/embed/PvzxaK/?height=222&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/PvzxaK/'>Flex—flex-1: multiple, Mockupless template, middle flex</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Instead, you can put the controls in two `flex: 1` containers and they will center the label by sharing the space evenly:

```html {2,8}
<div style="display: flex;">
  <div style="flex: 1;">
    <button>Back</button>
  </div>
  <div>
    Steve Allen
  </div>
  <div style="flex: 1;">
    <button>Video</button>
    <button>Audio</button>
    <button>Info</button>
  </div>
</div>
```

The `flex: 1` containers are highlighted with a background color:

<iframe height="222" style="width: 100%;" scrolling="no" title="Flex—flex-1: multiple, Mockupless template, highlighted" src="//codepen.io/andgordy/embed/WBxzJJ/?height=222&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/WBxzJJ/'>Flex—flex-1: multiple, Mockupless template, highlighted</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Practice

### 3 columns

Create a wireframe of a three-column layout, where the third column has flexible width:

<iframe height="548" style="width: 100%;" scrolling="no" title="Flex—flex-1—Task 1" src="//codepen.io/andgordy/embed/MdExaP/?height=548&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/MdExaP/'>Flex—flex-1—Task 1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new pen. In CSS, apply `margin: 0` to the `body` tag.
2. Create a flex parent container with light gray background.
3. Make it full-screen using `height: 100vh`.
4. Add three child containers with different backgrounds.
5. Apply fixed widths to the first two children.
6. Apply `flex: 1` to the third column.
7. Try resizing the Preview. The first two columns should always stay the same, and the third must adjust to the width of the viewport.

### Centered title

Create a header with a centered title:

<iframe height="237" style="width: 100%;" scrolling="no" title="Flex—flex-1—Task 2" src="//codepen.io/andgordy/embed/XweGaL/?height=237&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/XweGaL/'>Flex—flex-1—Task 2</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new pen. In CSS, apply `margin: 0` to the `body` tag.
2. In HTML, create a flex parent container with a bottom border and some paddings.
3. Create three child containers.
4. Enter a title of a website in the second container.
5. Center the second container by applying `flex: 1` to the first and the third containers.
6. Add `button` tags to the first and second container to create the navigation.
7. Apply `text-align: right` to the third container to push the buttons to the right.
8. Apply `align-items: center` to the flex parent container to align the title and the buttons horizontally.
9. In CSS, overwrite the default styles of the `button` tag using `background-color: transparent`, `border: none` and other properties.