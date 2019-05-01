# Conditional rendering

![conditionals illustration](./media/il-conditionals.png)

When, for example, you are creating a prototype that has multiple tabs you need to include contents for all the tabs in your code. Each tab will have its own container and proper placement in layout. However, only one tab should be displayed at a time. You also need to allow users to switch between tabs.

With Vue.js, you can specify conditions that must be met for a container to be shown. This is called **conditional rendering**, and it’s done with the `v-if` attribute.

## Equality

Let’s say you are creating a prototype with three views—*Newsfeed*, *Explore*, and *Profile*—and you want to allow users to switch between tabs with controls on the top right:

<iframe height="660" style="width: 100%;" scrolling="no" title="Conditional rendering—Tabs—Init" src="//codepen.io/andgordy/embed/dLXppP/?height=660&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/dLXppP/'>Conditional rendering—Tabs—Init</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Let’s start with creating a layout of this prototype. You need five main containers:

- Top navigation bar with app name and buttons
- Header that shows the title of the current view
- Newsfeed view content
- Explore view content
- Profile view content

The layout will have a nav bar, a header, and three content areas—all visible at the same time:

<iframe height="660" style="width: 100%;" scrolling="no" title="Conditional rendering—Tabs—No conditions" src="//codepen.io/andgordy/embed/bJeLqQ/?height=660&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/bJeLqQ/'>Conditional rendering—Tabs—No conditions</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To display each view only when the corresponding tab is selected, you need to complete three steps:

1. Create a variable to store the state of the selected tab.
2. Add click event listeners to tab controls to allow the value of the variable to be changed.
3. Add the `v-if` attribute to views’ content containers. It will show and hide containers according to the value of the variable.

Let’s go through these steps one by one.

#### A variable

Make sure the name of the variable suggests that it is used to store the state of the selected tab—this helps you to find it in the layout. Using the string data type allows you to make the variable value meaningful too:

```js
data: {
  currentTab: 'Newsfeed'
}
```

#### Event listeners

As explored in the [Click article](./../Events/), you can add event listeners to tabs that assign different values to the `currentTab` variable when clicks are detected:

```html
<div @click="currentTab = 'Newsfeed'">Newsfeed</div>
<div @click="currentTab = 'Explore'">Explore</div>
<div @click="currentTab = 'Profile'">Profile</div>
```

All three content containers are still displayed, but now you can use `currentTab` as a title by [rendering](./../Data/display.html#text) its value in the header:

```html
<div>{{currentTab}}</div>
```

Now when you click tabs, you see the header change accordingly:

<iframe height="660" style="width: 100%;" scrolling="no" title="Conditional rendering—Tabs—Init, no conditions, with clicks and header" src="//codepen.io/andgordy/embed/Nmrygo/?height=660&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/Nmrygo/'>Conditional rendering—Tabs—Init, no conditions, with clicks and header</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

#### Conditions

The final step is to use the value of the variable as a condition for rendering content containers. You do this by adding the `v-if` attribute with conditions to the containers:

```html
<div v-if="currentTab === 'Newsfeed'">
  <!-- Newsfeed content -->
</div>
<div v-if="currentTab === 'Explore'">
  <!-- Explore content -->
</div>
<div v-if="currentTab === 'Profile'">
  <!-- Profile content -->
</div>
```

The statement for the first container can be read as “show the container only if the value of `currentTab` equals `'Newsfeed'`”. This works in two steps:

1. `===` compares the value on the left to the value on the right and returns `true` if they are equal, and `false` if they are not.
2. `v-if` renders the container it’s applied to only if the condition is `true`. 

Initially, you specified the default value of `currentTab` as `'Newsfeed'`. As a result, the first content container is shown by default: its condition inside `v-if` is met. Then you added event listeners, that change the value of the variable, so when users click on the *Explore* tab, for example, the value of `currentTab` becomes to `'Explore'`. When this happens, the first container is hidden because its condition is no longer met, and the second container is shown because its condition is then satisfied:

<iframe height="660" style="width: 100%;" scrolling="no" title="Conditional rendering—Tabs—Init" src="//codepen.io/andgordy/embed/dLXppP/?height=660&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/dLXppP/'>Conditional rendering—Tabs—Init</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The [Conditional styles](./styles.md) article revisits this prototype and explains how you can highlight the selected tab.

## Practice

### Color palette

Create a simple color palette that allows the user to select a color and see its hex code:

<iframe height="450" style="width: 100%;" scrolling="no" title="Conditionals—Rendering—Task: Palette, full" src="//codepen.io/andgordy/embed/XQKZEK/?height=450&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/XQKZEK/'>Conditionals—Rendering—Task: Palette, full</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new prototype from the [template](https://codepen.io/andgordy/pen/OqQPNa).
2. Create a variable `selectedColor` with the default value, `'red'` for example, to store the state of the selected color.
3. Create colored buttons that change the value of the variable on click.
4. Create colored containers with hex values inside. Start with 2 or 3 of them.
5. Apply `v-if` to the colored containers so that each of them is rendered only if a particular value is assigned to the variable. For example, the first one should be rendered only when `selectedColor` is `'red'`, the second when `selectedColor` is whatever name you assigned on click of the second button.

If you have problems with steps 1–4, fork the [starting pen](https://codepen.io/andgordy/pen/PgzQdx?editors=1000). It includes the layout, the variable, and the event listeners. Complete step 5 and try adding more color options to the palette.

### Tabs

Recreate the full prototype from this article:

<iframe height="660" style="width: 100%;" scrolling="no" title="Conditional rendering—Tabs—Init" src="//codepen.io/andgordy/embed/dLXppP/?height=660&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/dLXppP/'>Conditional rendering—Tabs—Init</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the [starting file](https://codepen.io/andgordy/pen/bJeLqQ?editors=1000).
2. To navigate around code faster, collapse main containers using the triangles next to line numbers. Remember to keep them collapsed when you are not working with their contents:
![A screenshot of CodePen with collapsed containers](./media/collapsed-containers.png)
3. Follow the steps described in the article: [create a variable](./#a-variable), [add event listeners](./#event-listeners), and, finally, [add conditions to content containers](./#conditions).
