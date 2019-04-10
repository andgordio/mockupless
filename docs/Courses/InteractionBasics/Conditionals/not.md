# Inequality

`v-if` asks a questions “Should I render the component I am assigned to?” and when its condition returns `true` the component is shown. Checking for equality in the previous article worked well for components designed for a particular state of UI. For example: Newsfeed container is shown only when `currentScreen` is equal to `'Newsfeed'`.

Yet sometimes you need a component to be shown everywhere **except** for a particular state. For example, you need to hide the header that shows the title of the current view when Profile is selected:

<iframe height="660" style="width: 100%;" scrolling="no" title="Conditionals—Inequality—Tabs" src="//codepen.io/andgordy/embed/LvRrmx/?height=660&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/LvRrmx/'>Conditionals—Inequality—Tabs</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In this case the condition is “when `currentScreen` is not equal to `'Profile'`”. To achieve this you need to render the header conditionally checking for **inequality**:

```html
<div v-if="currentTab !== 'Profile'">{{currentTab}}</div>
```

The syntax can be read as: show the container only if the value of `currentTab` is **not** equal to `'Profile'`.

`!==` is a Boolean operator that compares the value on the left with the value on the right and returns `true` if they are not equal, and `false` if they are. As a result the component above is rendered when `currentTab` is `'Newsfeed'`, `'Explore'` or any other value you assign to it, but it is hidden when `currentTab` is `'Profile'`.

## Self-practice

### Color palette 2

Add indication of the selected color by showing a hole in all non-selected buttons: 

<iframe height="453" style="width: 100%;" scrolling="no" title="Conditionals—Inequality—Task: Palette, full" src="//codepen.io/andgordy/embed/yraEMw/?height=453&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/yraEMw/'>Conditionals—Inequality—Task: Palette, full</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Use your result of Color palette task in [Conditional rendering](./#color-palette) article as a starting file. You can also fork the [one from the article](https://codepen.io/andgordy/pen/XQKZEK?editors=1000).
2. Add holes to all color picker buttons. A hole is essentially a smaller rounded container with white background centered inside the button. 
3. Add conditions to all holes so they appear if the selected color is **not** the one they are placed in.
4. As a result all non-selected buttons must look outlined and the selected one should look filled.

### Tabs 2

Recreate the prototype from this article and add another tab:

<iframe height="665" style="width: 100%;" scrolling="no" title="Conditionals—Inequality—Tabs, Extended" src="//codepen.io/andgordy/embed/NmRzmJ/?height=665&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/NmRzmJ/'>Conditionals—Inequality—Tabs, Extended</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Use your result of Tabs task in [Conditional rendering](./#tabs ) article as a starting file. You can also fork the [one from the article](https://codepen.io/andgordy/pen/dLXppP?editors=1000).
2. Add `v-if` to header that shows the title of the current view. The condition is condition to render it when `currentTab` is **not** `'Profile'`.
3. Add a new item to the nav bar with click event listener that changes the value of `currentTab` to `'Notifications'`.
4. Add new content container between Explore and Profile with conditional rendering if Notitications is selected in the bottom bar. The content of this view is up to you—feel free to copy and paste parts from other views.
5. As a result you should have a prototype with 4 tabs. The top bar must be hidden when the Profile view is shown. 