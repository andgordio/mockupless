# Click

Click (or tap, depending on the device) is the mother of interactivity. With clicks, components are added and removed, data is saved and deleted, pages are opened, and animations are played.
<!-- todo: write: maybe a better variety of examples -->

To make your prototypes react to user clicks, you need to do two things:

1. Add an **event listener** to a container you expect users to interact with.
2. Specify **instructions** that you want to be executed when the click is detected.

## Events and instructions

Let's start with a pair of buttons that change the value of the variable `isUserLoggedIn` when clicked:

<iframe height="327" style="width: 100%;" scrolling="no" title="Events—Click—true/false" src="//codepen.io/andgordy/embed/wZebaL/?height=327&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/wZebaL/'>Events—Click—true/false</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```html
<button @click="isUserLoggedIn = true">
  Log in
</button>
<button @click="isUserLoggedIn = false">
  Log out
</button>
```

The `@click` associated with the first button, for example, can be read as “when users click the button, assign the value `true` to the variable `isUserLoggedIn`”. Here’s the breakdown of the syntax:
- `@` indicates that this is an event listener.
- `click` specifies the event you want to listen for.
- `isUserLoggedIn = true` is the instruction you want to be executed when the event is triggered.

:::tip OK, but why change the values in the first place?
Just being able to display `true` or `false` on click doesn’t seem to have much value. However, in the next section of this course, you will learn how to show components and pages according to the value value of a variable. For example, a login screen will be shown when `isUserLoggedIn` is `false` and a newsfeed screen will be shown when it’s `true`. This means that clicks will be able to change screens by changing the value of a variable.
:::

## Assigning a value
As described in the [Variables](./../Data/variables.md) article, when you add a variable to the `data` container, you specify a name and a default value:

```js
data: {
  doShowDetails: false,
}
```

To change the default value, you need to assign a new one. A **single equals sign** assigns a value on its right to a variable on its left:

```html
<button @click="isUserLoggedIn = true">
```

Spaces around an equals sign are optional, but usually they improve the readability of your code.

### From variable to variable and multiple instructions

Consider another example—a user fills out a form, presses the *Submit* button, and then information gets saved and displayed elsewhere:

<iframe height="372" style="width: 100%;" scrolling="no" title="Events—Click—Variable to variable" src="//codepen.io/andgordy/embed/qwjGrY/?height=372&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/qwjGrY/'>Events—Click—Variable to variable</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To achieve this, you need:
- A variable `emailInput` connected to the input form control with `v-model`.
- Another variable `emailSubmitted` to store and display the submitted information.
- An event listener to copy data from one variable to another on click.

The latter can be done by assigning the value of one variable to another variable. The button in the code below will assign the value of `emailInput` to `emailSubmitted` when clicked:

```html {2}
<input v-model="emailInput">
<button @click="emailSubmitted = emailInput">
  Sign up
</button>
<!-- left panel -->
<div>Submitted email: {{emailSubmitted}}</div>
```

To complete the prototype, you also need to clean up the input form control when the button is pressed. You can define multiple instructions for one event by separating them with a semicolon. The full-feature button also assigns an empty string to `emailInput` right after storing the value of `emailInput` in `emailSubmitted`:

```html
<input v-model="emailInput">
<button @click="emailSubmitted = emailInput; emailInput = ''">
  Sign up
</button>
<!-- left panel -->
<div>Submitted email: {{emailSubmitted}}</div>
```

As a result:

- When users input their data, it’s immediately stored in `emailInput`.
- When the button is clicked, the data is copied to `emailSubmitted`.
- Then `emailInput` is cleaned up so that the form is returned to its initial state.

## Beyond button

You can add event listeners to any container, not only to a `<button>`. This means that you can design your components freely with `<div>`s and still allow for interactivity. What’s even more important, clicking the child elements of the parent container that has an event listener will also trigger an event:

<iframe height="455" style="width: 100%;" scrolling="no" title="Events—Click—Beyond click" src="//codepen.io/andgordy/embed/JVyyqN/?height=455&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVyyqN/'>Events—Click—Beyond click</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In this example, `@click` listeners are added to parent containers that contain multiple containers. Clicking anywhere on these parent containers or their children triggers the events:

```html
<div @click="selectedContact = 'Joe Cole'">
  <div>Joe Cole</div>
  <div>Have they heard of Klimt anyway?</div>
</div>
<div @click="selectedContact = 'Michael B. Jordan'">
  <div>Michael B. Jordan</div>
  <div>No way! Thursday was supposed...</div>
</div>
<div @click="selectedContact = 'Linnea Berthelsen'">
  <div>Linnea Berthelsen</div>
  <div>You: sounds good!</div>
</div>
```

## Practice

### Product card

Allow users to switch between photos by clicking on small circles under the preview:

<iframe height="642" style="width: 100%;" scrolling="no" title="Events—Click—Task: Card" src="//codepen.io/andgordy/embed/rbzpmB/?height=642&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/rbzpmB/'>Events—Click—Task: Card</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the task in the [Displaying data](./../Data/display.md#practice) article. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/GLmZPq?editors=1000).
2. Below the image, add 3 buttons with click event listeners.
3. On click, assign different URLs to `imageUrl`. The following images are used in the demo: [light chair](https://secure.img1-fg.wfcdn.com/im/76790410/resize-h800-w800%5Ecompr-r85/6677/66771259/Elk+Wingback+Chair.jpg), [darker chair](https://secure.img1-fg.wfcdn.com/im/23366032/resize-h800-w800%5Ecompr-r85/6677/66771264/Elk+Wingback+Chair.jpg), [darkest chair](https://secure.img1-fg.wfcdn.com/im/10686707/resize-h800-w800%5Ecompr-r85/6677/66771261/Elk+Wingback+Chair.jpg).
4. Different images should be rendered according to which button users click.

### Profile information

Display information a user submits:

<iframe height="508" style="width: 100%;" scrolling="no" title="Events—Click—Task: Form" src="//codepen.io/andgordy/embed/wZqpmE/?height=508&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/wZqpmE/'>Events—Click—Task: Form</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of *Profile information* task in the [Connecting to forms](./../Data/forms.md#profile-information) article. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/QPgOGa?editors=1000).
2. Create another set of variables to store submitted data. Display their values in the right column.
3. Add a *Submit* button with a click event listener. On click
- Assign the values of variables connected to form controls to variables used for displaying data.
- Clear the values of the variables connected to forms to clear the form.