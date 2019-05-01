# Other events

Click is probably the most popular interaction, but there are other events that allow for more advanced interactivity. Three events are explored in this article: focus, hover, and key press.

## Focus and unfocus

While designing a form, you may want to know when the input field was focused on and when it lost focus. This information can be used to change styles, show suggestions, validate input, etc: 

<iframe height="332" style="width: 100%;" scrolling="no" title="Events—Other—Focus" src="//codepen.io/andgordy/embed/vMJdGa/?height=332&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/vMJdGa/'>Events—Other—Focus</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The event listeners `@focus` and `@blur` are responsible for catching these interactions: 

```html
<input @focus="didFocusInput = true" @blur="didFocusInput = false">
<div>Did focus: {{didFocusInput}}</div>
```

## Hover

Another common interaction on desktop computers is hovering over elements with the mouse cursor. The `@mouseover` event listener tracks when a cursor *enters* an element’s area. Its counterpart, `@mouseleave`, reacts to a cursor *leaving* an element’s area:

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

Note the difference between the CSS `:hover` selector and the `@mouseover` event listener. CSS’s `:hover` applies specified styles when the cursor enters the area of an element and discards them when the cursor leaves. With the event listeners, you provide two separate instructions: one for the cursor’s entering the area, and one its leaving. This is particularly useful when, for example, your design doesn't require anything to happen when the mouse leaves. Task 1 in the Practice section below is a good example of this type of interaction.
<!-- todo: link: to Layout basics explaining hovers -->

## Key press

You already know how to [connect text input](./../Data/forms.md#text) to a variable with `v-model` so that everything a user enters is stored in `data`. You don’t need an event listener to achieve that. However, sometimes you want to track *particular* key presses inside the input field to provide instructions explicitly for those events.

The `@keypress` event listener reacts to every key press inside an input field, but you rarely need to track this type of interaction. In addition, `@keypress` has modifiers that specify which particular key you want to respond to. For example, a commonly expected behavior when interacting with a search bar or a simple form is the ability to submit by hitting the *Return*/*Enter* key:

<iframe height="394" style="width: 100%;" scrolling="no" title="Events—Other—Keypress" src="//codepen.io/andgordy/embed/JVypML/?height=394&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVypML/'>Events—Other—Keypress</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Adding the modifier `.enter` to the `@keypress` event listener  allows you to react to this particular key’s being pressed:

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

Modifiers are placed right after the name of the event listener. The list of modifiers includes `.tab`, `.esc`, and many others. You can learn more about them in the official [Vue.js guide](https://vuejs.org/v2/guide/events.html#Key-Modifiers).
<!-- Usually, the instructions in this type of cases are the same as for `@click` on a Submit button as shown in the example above.  -->


## Practice

### Product card

Allow users to switch between photos by hovering over the small circles below the preview:

<iframe height="655" style="width: 100%;" scrolling="no" title="Events—Other—Task: Card" src="//codepen.io/andgordy/embed/wZqyjv/?height=655&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/wZqyjv/'>Events—Other—Task: Card</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of *Product card* task in the [Click](./#product-card) article. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/rbzpmB?editors=1000).
2. Replace the `@click` event listeners with `@mouseover` event listeners on the colored circles.
3. As a result, different images should be rendered according to the circle users hover over.

### Search form

Allow users to submit a search query without providing a *Search* button at all:

<iframe height="348" style="width: 100%;" scrolling="no" title="Events—Task—Search" src="//codepen.io/andgordy/embed/gyxvKN/?height=348&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/gyxvKN/'>Events—Task—Search</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a simple layout with a search bar and a text label.
2. Create 2 variables: one for storing the input and another for storing the submitted query.
3. Add the `@keypress.enter` event listener to the text input.
4. Display the user’s query below the search bar when *Return*/*Enter* key is pressed. Don’t forget to clear the search input.