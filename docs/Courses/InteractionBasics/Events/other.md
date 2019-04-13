# Other events

Click is probably the most popular interaction, but there are other events too that allow for richer UX. Three interactions are explored in this article: focus, hover and key press.

## Focus and unfocus

When designing a form you may want to know when the input field was focused and when it lost its focus. This information can be used to change styles, show suggestion, validate inputs, etc: 

<iframe height="332" style="width: 100%;" scrolling="no" title="Events—Other—Focus" src="//codepen.io/andgordy/embed/vMJdGa/?height=332&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/vMJdGa/'>Events—Other—Focus</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Event listeners `@focus` and `@blur` are responsible for catching these interactions: 

```html
<input @focus="didFocusInput = true" @blur="didFocusInput = false">
<div>Did focus: {{didFocusInput}}</div>
```

## Hover

Another common interaction on desktop computers is hovering over elements with the mouse cursor. `@mouseover` event listener tracks when a cursor *enters* the area of the element. Its counterpart `@mouseleave` reacts to a cursor *leaving* the area of an element:

<iframe height="383" style="width: 100%;" scrolling="no" title="Events—Other—Hover" src="//codepen.io/andgordy/embed/JVypbO/?height=383&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVypbO/'>Events—Other—Hover</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```html
<div @mouseover="didHoverCalendar = true" @mouseleave="didHoverCalendar = false">
  Calendar
</div>
<div @mouseover="didHoverChat = true" @mouseleave="didHoverChat = false">
  Chat
</div>
<div @mouseover="didHoverPeople = true" @mouseleave="didHoverPeople = false">
  People
</div>
```

Note the difference between CSS `:hover` selector and `@mouseover` event listener. `:hover` applies specified styles when the cursor enters the area of an element and also discards them when the cursor leaves. With the event listeners you provide two separate (sets of) instructions: one for cursor entering the area, and one for when it leaves. This is particularly useful when, for example, your design doesn't require anything to happen when the mouse leaves. [Self-practice Task 1](#task-1) is a good example of this UX.
<!-- todo: link: to Layout basics explaining hovers -->

## Key press

You already know how to [connect text input](./../Data/display.md#text) to a variable with `v-model`, so everything a user enters is stored in data. You don't need an event listener to achieve that. However sometimes you want to track *particular* key presses inside the input field to provide instructions explicitly for those events.

`@keypress` event listener reacts to every key press inside an input field but you rarely need to track this type of interaction. In addition, `@keypress` has modifiers that specify which particular key you want to respond to. For example, a commonly expected behavior when interacting with a search bar or a simple form is the ability to submit by hitting return/enter key. Adding modifier `.enter`  to `@keypress` event listener  allows you to react to this particular key being pressed:

<iframe height="394" style="width: 100%;" scrolling="no" title="Events—Other—Keypress" src="//codepen.io/andgordy/embed/JVypML/?height=394&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVypML/'>Events—Other—Keypress</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```html
<input v-model="emailInput"
       @keypress.enter="emailSubmitted = emailInput; emailInput = ''">
<button @click="emailSubmitted = emailInput; emailInput = ''">
  Subscribe
</button>
<div>
  Submitted {{emailSubmitted}}
</div>
```

Modifiers are placed right after the name of the event listener. List of modifiers includes `.tab`, `.esc` and many others. You can learn more about them in [Vue.js official guide](https://vuejs.org/v2/guide/events.html#Key-Modifiers).
<!-- Usually, the instructions in this type of cases are the same as for `@click` on a Submit button as shown in the example above.  -->


## Practice

### Product card

Allow users to switch between different photos by hovering the controls:

<iframe height="655" style="width: 100%;" scrolling="no" title="Events—Other—Task: Card" src="//codepen.io/andgordy/embed/wZqyjv/?height=655&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/wZqyjv/'>Events—Other—Task: Card</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the result of [Task 1 in Click](./#product-card) article as a starting file. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/rbzpmB?editors=1000).
2. Replace `@click` event listeners with `@mouseover` event listeners on colored circles.
3. As a result, different images should be rendered depending on which circle users hover over.

### Search form

Allow users to submit a search query without providing a Search button at all:

<iframe height="348" style="width: 100%;" scrolling="no" title="Events—Task—Search" src="//codepen.io/andgordy/embed/gyxvKN/?height=348&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/gyxvKN/'>Events—Task—Search</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a simple layout with a search bar and a heading.
2. Create 2 variables: one for storing the input and another one to store the submitted query.
3. Add `@keypress.enter` event listener to the text input.
4. Display users’ query in the heading when they press return/enter. Also clear the search input.