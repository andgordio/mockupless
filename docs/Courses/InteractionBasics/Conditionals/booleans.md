# Booleans as conditions

A variable of [string data type](./../Data/variables.html#strings) is a good place to store a state. String values are usually clear and allow for infinite amount of options. Yet some states are binary, for example:
- Is user authenticated?
- Did they upload a profile image?
- Is data currently being processed by a server?

Strings _can_ handle these states. Yet [Booleans](./../Data/variables.html#boolean), being binary by nature, could be a better fit for the job. Imagine you want to show login screen when users are not authenticated, and show everything else when they are (press Log in to authenticate, and Log out under Profile to sign out):

<iframe height="660" style="width: 100%;" scrolling="no" title="Conditionals—Booleans—Login" src="//codepen.io/andgordy/embed/mgOywy/?height=660&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/mgOywy/'>Conditionals—Booleans—Login</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To achieve this you need one conditional container for login screen, and another one to wrap the rest of the layout. Remember, `v-if` is asking a question “Should I render the component I am assigned to?” and expects Boolean `true` or `false` for an answer. This means you can use a Boolean variable as a condition:

```html
<div v-if="!isUserLoggedIn">
  <!-- login screen content -->
</div>
<div v-if="isUserLoggedIn">
  <!-- app content -->
</div>
```
```js
data: {
  isUserLoggedIn: false,
}
```

Let’s break it down:

- Boolean variable `isUserLoggedIn` stores the state.
- Login screen container has a condition `v-if="!isUserLoggedIn"`. Exclamation mark here has the same meaning as in [inequality](./not.md#inequality) operator — **not**. So the container is rendered when the variable is not `true`, which is `false`.
- App wrapper container has a condition `v-if="isUserLoggedIn"`. So it is rendered when the variable is `true`.
- “Log in” button assigns `true` to the variable and “Log out” assigns `false` to it.

Boolean variables are the natural fit for storing binary conditions and with proper naming can make for a pretty readable code: `v-if="!isUserLoggedIn"` is almost speaking in plain English to you, not JavaScript.

<!-- *show if a user is not logged in*. -->

<!-- [Equality]() and [inequality]() return Boolean value, but you can also use a Boolean variable as a condition: -->

 <!-- Since `v-if` is expecting a Boolean `true` or `false`, you can use a Boolean variable as a condition: -->

## Practice

### Checkbox

Conditional rendering is not limited to views and pages. Sometimes smaller containers also must be hidden unless some conditions are met.

Practice this by creating a simple subscription form that initially shows only one checkbox and it’s off by default. When users check it show 2 more checkboxes:

<iframe height="447" style="width: 100%;" scrolling="no" title="Conditionals—Boolean—Task—Checkbox" src="//codepen.io/andgordy/embed/ZZBQLv/?height=447&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ZZBQLv/'>Conditionals—Boolean—Task—Checkbox</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the [template](./../Setup/), design the header, 3 checkbox controls and the button.
2. Create a variable and [connect](./../Data/forms.md#checkbox) it to the first checkbox.
3. Use this variable as a condition for rendereing other two checkboxes.
4. As a result the 2 checkboxes should be hidden when the first checkbox is unchecked.

### Chat

Create a simple prototype for a chat app with two screens—a list and a conversation:

<iframe height="705" style="width: 100%;" scrolling="no" title="Conditionals—Boolean—Task—Chat" src="//codepen.io/andgordy/embed/GLNrVb/?height=705&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GLNrVb/'>Conditionals—Boolean—Task—Chat</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new prototype from the [template](./../Setup/).
2. Create a Boolean variable to store the state of the current screen. Make sure the name suggests that the variable is Boolean, for example `doShowChat`.
3. Create layout for Recent page and make it conditional, so it is shown only when `doShowChat` is `false`.
4. Add event listeners to list items so they change the value of the variable on click.
5. Create layout for Chat page and make it conditional too, so it is shown only when `doShowChat` is `true`.
6. Add an event listener to Back button so it changes the value of the variable on click.
6. As a bonus create another variable to store the name of the selected person on Recent page. Assign a name to it when users click on an item in the list, and render its value in the top bar on Chat page.

If you have problems creating the layout for this task fork the [starting prototype](https://codepen.io/andgordy/pen/XQNMNE?editors=1000). Don’t forget to collapse main containers to make navigation around the code easier.