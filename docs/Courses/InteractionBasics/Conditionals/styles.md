# Conditional styles

You can use conditions not only to show and hide containers but also to apply different styles to components. In the [Conditional rendering](./) article a prototype with 3 tabs was used as an example. It was missing one important feature: an indication of the selected tab in the tab bar:

<iframe height="662" style="width: 100%;" scrolling="no" title="Conditional rendering—Tabs—Init" src="//codepen.io/andgordy/embed/Lvxeqa/?height=662&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/Lvxeqa/'>Conditional rendering—Tabs—Init</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This can be achieved with a special **conditional class** attribute:

```html
<div :class="{'text-teal-500': currentTab === 'Newsfeed'}">
  Newsfeed
</div>
```

`:class` attribute can be read as “add class `text-teal-500` to the container if the `currentTab` equals to `'Newsfeed'`”.

The syntax *is* heavy, but it should be easier to get used to it if you break its contents into parts:
- Class name is written in single quotes and is separated from condition with a colon.
- Class name and condition are surrounded by curly braces.
- As with other attributes like regular `class` and `:img` for [dynamic images](./../Data/display.md#images), the value of the attribute is wrapped in double quotation marks.

<!-- todo: write: say it can live together with regular class attribute and show and example -->

### Many classes, one condition

In the example above only one class was applied conditionally. But in the example above not only the text is colored in teal, but the bottom border too. Just like with regular `class` attribute you can specify multiple conditional classes:

```html
<div :class="{'text-teal-500 border-teal-500': currentTab === 'Newsfeed'}">
  Newsfeed
</div>
```

Both `text-teal-500` and `border-teal-500` will be applied to the container if the condition is satisfied. You can add as many classes as you wish for a single condition by placing them inside single quotes. As with regular `class` attribute you separate class names with white spaces.

### Many classes, many conditions

Another option you have when styling your components is to provide different classes for different conditions. For example, a Submit button with 3 states:
- greyed-out by default,
- blue when users agree to Privacy Policy,
- half-transparent when users click it and the data is uploaded to server.

<iframe height="593" style="width: 100%;" scrolling="no" title="Conditionals—Styles—Form" src="//codepen.io/andgordy/embed/xegjPz/?height=593&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/xegjPz/'>Conditionals—Styles—Form</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To achieve this you would need two variables and a pair of conditional styles:

```html
<div class="bg-gray-400"
     :class="{'bg-teal-500': didAgreeToPrivacy, 'opacity-50': isDataLoading}">
  Submit
</div>
```

Pairs of classes and conditions are separated by commas inside curly braces.

## Practice

### Tab bar

Design a navigation bar with different styles for inactive and active tabs:

<iframe height="660" style="width: 100%;" scrolling="no" title="Conditional styles—Practice—Tabs" src="//codepen.io/andgordy/embed/moXRLM/?height=660&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/moXRLM/'>Conditional styles—Practice—Tabs</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new pen by forking the [template](https://codepen.io/andgordy/pen/OqQPNa).
2. Create a variable to store the state of the currently selected tab. Set the default value to `'Library'`.
3. Design a quick layout for the top navigation bar with 4 tabs.
4. Add 2 conditional style groups to each tab:

  - When a tab is not selected it is half transparent.
  - When a tab is selected it has a colored border.

### Productivity app

Design a task list with editable items that change style when checked:

<iframe height="430" style="width: 100%;" scrolling="no" title="Conditional styles—Practice—To Do" src="//codepen.io/andgordy/embed/WmMKBY/?height=430&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/WmMKBY/'>Conditional styles—Practice—To Do</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a layout with 4 containers. Each one has two icons–empty and checked—and a text input control.
2. Create 4 variable to store the states of the items: checked or not checked.
3. Add event listeners to icons. Checked icons must change value of their respective variables to `false`, and empty icons change must them to `true`.
4. Add [conditions](./booleans.md) to icons so the empty ones are shown when their items are unchecked, and filled ones are shown when the items are checked.
5. Add conditional styles to inputs so they have `text-grey` and `line-through` classes where their items are checked.
6. As a bonus, make the text editable. Create 4 more variables, [connect them to inputs](./../Data/md#text) and assign default values so the items are not empty when the prototype is loaded.

