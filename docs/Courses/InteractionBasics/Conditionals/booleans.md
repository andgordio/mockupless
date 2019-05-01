# Booleans as conditions

A variable of the [string data type](./../Data/variables.html#strings) is a good way to store a state. String values are usually clear and allow for an infinite number of options. Yet some states are binary, for example
- Is the user authenticated?
- Did they upload a profile image?
- Is data currently being processed by a server?

Strings _can_ handle these states; however, [Booleans](./../Data/variables.html#boolean), which are inherently binary, could be a better fit for the job. Imagine that you want to show a login screen when users are not authenticated, and you want to show everything else when they are. Press *Log in* to authenticate, and *Log out* under the *Profile* tab to sign out:

<iframe height="660" style="width: 100%;" scrolling="no" title="Conditionals—Booleans—Login" src="//codepen.io/andgordy/embed/mgOywy/?height=660&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/mgOywy/'>Conditionals—Booleans—Login</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To implement this behavior, you need one conditional container for a login screen and another one to wrap the rest of the layout. Remember, `v-if` represents the question “Should I render the component I am assigned to?” and expects a boolean (`true` or `false`) for an answer. This means that you can use a boolean variable as a condition:

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

- The boolean variable `isUserLoggedIn` stores the state.
- The login screen container has the condition `v-if="!isUserLoggedIn"`. The exclamation mark here has the same meaning as the [inequality](./not.md) operator—**not**—so the container is rendered when the variable is not `true`, which means that it is `false`.
- The app wrapper container has the condition `v-if="isUserLoggedIn"`, so it is rendered when the variable is `true`.
- The *Log in* button assigns `true` to the variable, and *Log out* button assigns `false` to it.

Boolean variables are a natural fit for storing binary conditions. With proper naming, they can make for pretty readable code: `v-if="!isUserLoggedIn"` is almost speaking in plain English to you, not JavaScript.

## Practice

### Checkbox

Conditional rendering is not limited to views and pages. Sometimes, smaller containers must be hidden unless some conditions are met.

Practice this by creating a simple subscription form that initially shows only one checkbox that is off by default. When users check it, show two more checkboxes:

<iframe height="447" style="width: 100%;" scrolling="no" title="Conditionals—Boolean—Task—Checkbox" src="//codepen.io/andgordy/embed/ZZBQLv/?height=447&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ZZBQLv/'>Conditionals—Boolean—Task—Checkbox</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the [template](https://codepen.io/andgordy/pen/OqQPNa). Design the header, 3 checkbox controls, and the button.
2. Create a variable and [connect](./../Data/forms.md#checkbox) it to the first checkbox.
3. Use this variable as a condition for rendereing the other 2 checkboxes.
4. The 2 checkboxes should be hidden when the first checkbox is unchecked.

### Chat

Create a simple prototype for a chat app with two screens—a list and a conversation:

<iframe height="705" style="width: 100%;" scrolling="no" title="Conditionals—Boolean—Task—Chat" src="//codepen.io/andgordy/embed/GLNrVb/?height=705&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GLNrVb/'>Conditionals—Boolean—Task—Chat</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new prototype from the [template](https://codepen.io/andgordy/pen/OqQPNa).
2. Create a boolean variable to store the state of the current screen. Make sure that the name suggests that the variable is boolean (`doShowChat`, for example).
3. Create a layout for the Recent page and make it conditional so that it is shown only when `doShowChat` is `false`.
4. Add event listeners to list items so that they change the value of the variable on click.
5. Create a layout for the Chat page and make it conditional too so that it is shown only when `doShowChat` is `true`.
6. Add an event listener to the Back button so it changes the value of the variable on click.
6. As a bonus, create another variable to store the name of the person that was selected on the Recent page. Assign a name to it when users click on an item in the list, and render its value in the top bar on the Chat page.

If you have problems creating the layout for this task, fork the [starting prototype](https://codepen.io/andgordy/pen/XQNMNE?editors=1000). Don’t forget to collapse main containers to make code navigation easier.
