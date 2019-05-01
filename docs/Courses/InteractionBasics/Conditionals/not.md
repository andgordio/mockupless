# Inequality

`v-if` asks the question “Should I render the component I am assigned to?” When its condition returns `true`, the component is displayed. Checking for equality in the previous article worked well for components designed for a specific state of an interface. For example: the Newsfeed container is shown only when `currentScreen` is equal to `'Newsfeed'`.

Sometimes, however, you need a component to be shown in all states **except** for one. Let’s assume you need to hide the header that shows the title of the current view when Profile is selected:

<iframe height="660" style="width: 100%;" scrolling="no" title="Conditionals—Inequality—Tabs" src="//codepen.io/andgordy/embed/LvRrmx/?height=660&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/LvRrmx/'>Conditionals—Inequality—Tabs</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In this case, the condition is “when `currentScreen` is **not** equal to `'Profile'`”. To hide the header properly you need to render it conditionally by checking for **inequality**:

```html
<div v-if="currentTab !== 'Profile'">{{currentTab}}</div>
```

The statement can be read as “show the container only if the value of `currentTab` is not equal to `'Profile'`.”

`!==` is a boolean operator that compares the value on the left to the value on the right, returns `true` if they are not equal, and returns `false` if they are. As a result of this operation, the component above is rendered when `currentTab` is `'Newsfeed'`, `'Explore'`, or any other value you assign to it, but it is hidden when `currentTab` is `'Profile'`.

## Practice

### Color palette v2

Add indication of the selected color by showing a hole on all non-selected buttons: 

<iframe height="453" style="width: 100%;" scrolling="no" title="Conditionals—Inequality—Task: Palette, full" src="//codepen.io/andgordy/embed/yraEMw/?height=453&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/yraEMw/'>Conditionals—Inequality—Task: Palette, full</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the Color palette task from the [Conditional rendering](./#color-palette) article. You can also fork the [one from the article](https://codepen.io/andgordy/pen/XQKZEK?editors=1000).
2. Add holes to all color picker buttons. A hole is essentially a smaller rounded container with a white background centered in the button. 
3. Add conditions to all holes so that they are rendered if the selected color is **not** the one they are placed within.
4. As a result, all non-selected buttons will be outlined, and the selected one will be filled.

### Tabs v2

Recreate the prototype from this article, and add a new tab:

<iframe height="665" style="width: 100%;" scrolling="no" title="Conditionals—Inequality—Tabs, Extended" src="//codepen.io/andgordy/embed/NmRzmJ/?height=665&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/NmRzmJ/'>Conditionals—Inequality—Tabs, Extended</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the Tabs task in the [Conditional rendering](./#tabs ) article. You can also fork the [one from the article](https://codepen.io/andgordy/pen/dLXppP?editors=1000).
2. Add `v-if` to the header toso that the header will be rendered when `currentTab` is **not** `'Profile'`.
3. Add a new tab, *Newsfeed*, to the nav bar with a click event listener that changes the value of `currentTab` to `'Notifications'`.
4. Add a new content container with conditional rendering. It must be displayed if the *Notitications* tab is selected. The content of this view is up to you—feel free to copy and paste placeholders from other views.
5. As a result, you should have a prototype with 4 tabs. The header with the name must be hidden when the *Profile* view is shown. 
