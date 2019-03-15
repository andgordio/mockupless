# Conditional styles

You can use conditions not only to show and hide containers but also to apply different styles to components. In the [Conditional rendering](./) article a prototype with 3 tabs was used as an example. One important feature it was missing is an indication of the selected tab in the bottom bar:

<video width="100%" controls muted class="">
  <source src="./media/cond-style-1.mp4" type="video/mp4">
</video>

This can be achieved with a special **coniditional class** attribute:

```html
<div class="text-grey" :class="{'text-teal': currentTab === 'Newsfeed'}">
  Newsfeed
</div>
```

`:class` attribute can be read as “add class `text-teal` to the container if the `currentTab` equals to `'Newsfeed'`”.

The syntax *is* heavy, but it should be easier to get used to it if you break its contents into parts:
- Class name is written in single quotes and is separated from condition with a colon.
- Class name and condition pair is surrounded by curly braces.
- As with other attributes, like regular `class` and `:img` for [dynamic images](./../Data/display.md#images), the value of the attribute is wrapped into double quotation marks.

### Many classes, one condition

In the example above only one class was applied conditionally. But let's say the selected tab must not only be colored in teal, but also the font must become bold. Same as with regular `class` attribute you can specify multiple conditional classes:

```html
<div class="text-grey" :class="{'text-teal font-bold': currentTab === 'Newsfeed'}">
  Newsfeed
</div>
```

Both classes `text-teal` and `font-bold` will be applied to the container if the condition is satisfied. You can add as many classes as you wish for a single condition inside single quotes. As with regular `class` attribute you separate classes with white spaces.

### Many classes, many conditions

Another option you have when styling your components is to provide different classes for different conditions. For example, a Submit button:
- is greyed-out by default;
- becomes colored when a user agrees to Privacy Policy;
- becomes when a users clicks it and the data is uploaded to server.

<video width="100%" controls muted class="">
  <source src="./media/cond-style-2.mp4" type="video/mp4">
</video>

To achieve this you would need two variables and a pair of conditional styles:

```html
<div class="bg-grey" :class="{'bg-teal': didAgreeToPrivacy, 'opacity-50': isDataLoading}">
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

1. Create a new pen from the template.
2. Create a variable to store the state of the currently selected tab, set the default value to `'Library'`.
3. Design a quick layout for the top navigation bar with 4 tabs.
4. Add 2 conditional style groups to each tab:

  - When a tab is not selected it is half transparent.
  - When a tab selected it has a colored border.



<!-- Take a basic desktop tab bar and add 2 conditional styles to each tab:
- When the tab is selected, color the bottom border in pink
- When the tab is not selected, lower its opacity to 25% -->

<!-- ![Changing value in Vue devtools to see tab classes changing](./images/task-styles-1.gif) -->

<!-- 1. Download the [starting file](./../../../course-files/interaction-basics/conditionals-style-task-1-start.html.zip). Preview it in Chrome and open in VSCode.
2. Create a variable to store the state of the currently selected tab, set the default value to `'library'`
3. Add conditional class attribute to Library tab with class `'border-pink'` applied if the tab is selected, and class `'opacity-25'` applied if the tab is not selected.
4. Open the file in browser. Library tab should have pink underline by default. Open the Vue dev tools and try changing the value of the variable to anything else. The tab should become greyed-out. If it doesn't, go back to your code, look for syntax errors and check whether you applied conditional classes to the correct container.
5. Add conditional classes to all tabs with `'border-pink'` class applied when the corresponding tab is selected, and `'opacity-25'` when it is not.
6. Go to browser, reload the page, open Vue dev tools and try changing the value of the variable. Pink underline should jump between selected tabs while others become greyed-out. If they don't, make sure you are entering the values you specified in conditions, and look for syntax errors. -->

<!-- #### Solution
If you have any problems completing the task, dowload and review the [complete prototype](./../../../course-files/interaction-basics/conditionals-style-task-1-end.html.zip) -->

### Productivity app

Design a task list with editable items that change style when checked:

<iframe height="388" style="width: 100%;" scrolling="no" title="Conditional styles—Practice—To Do" src="//codepen.io/andgordy/embed/WmMKBY/?height=388&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/WmMKBY/'>Conditional styles—Practice—To Do</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a layout with 4 elements. Each one is two icons, empty and checked, and an input.
2. Connect them to 4 Boolean variables to track if they are checked.
3. Add [conditions](./booleans.md) to icon containers so the empty ones are shown when their items are unchecked and filled colored ones are shown when the items are checked.
4. Add conditional styles to inputs so they have `text-grey` and `line-through` classes where their items are checked.
5. As a bonus create 4 more variables, [connect them to inputs](./../Data/forms.html#text) and assign default values so the items are not empty when the prototype is loaded.

<!-- Prototype a simple workout checklist. When a user checks out an item its label becomes greyed-out and lined-through: -->
<!-- ![Crossing out items on the list by clicking on the checkboxes](./images/task-styles-2.gif) -->

<!-- 1. Create a basic layout with shown content and your own styles. 
2. Create a variable for each item. Connect them to checkboxes.
3. Add conditional classes `text-grey` and `line-through` to labels.

:::tip Tip
Don't forget to add `id` attributes with unique values to checkboxes and `for` attributes to labels with corresponding values, to make labels clickable.
:::

#### Solution
If you have any problems completing the task, dowload and review the [complete prototype](./../../../course-files/interaction-basics/conditionals-style-task-2-end.html.zip) -->
