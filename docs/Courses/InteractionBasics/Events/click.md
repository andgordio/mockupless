# Click

![clicks illustration](./media/il-click.png)

Click (or tap, depending on the device) is the mother of interactivity. With clicks, components are added and removed, data is saved and deleted, pages are opened and animations are played.
<!-- todo: write: maybe a better variety of examples -->

To make your prototypes react to users’ clicks you need to do 2 things:

1. Add an **event listener** to a container you expect users to interact with.
2. Specify **instructions** that you want to be executed when the click is detected.

## Events and instructions

Let's start with a pair of buttons that change the value of the variable `isUserLoggedIn` when clicked:

<video width="100%" controls muted class="">
  <source src="./media/click-login.mp4" type="video/mp4">
</video>

```html
<button @click="isUserLoggedIn = true">
  Log in
</button>
<button @click="isUserLoggedIn = false">
  Log out
</button>
```

`@click` in the first button, for example, can be read as “when users click the button, assign the value of `true` to `isUserLoggedIn` variable”. Here's the breakdown of the syntax:
- `@` indicates an event listener.
- `click` specifies the event you want to respond to.
- `isUserLoggedIn = true` and `isUserLoggedIn = false` are the instructions you want to be executed when the events are triggered.

:::tip OK, but why change values in the first place?
Being able to render `true` or `false` on click doesn't hold much value. However, in the next section of this course you will learn how to conditionally show components and pages based on a value of a variable. For example, a login screen will be shown when `isUserLoggedIn` is `false` and a newsfeed screen will be shown when it’s `true`. This means that by changing a value of a variable clicks will be able to change screens.
:::

<!-- todo: allow to download the example -->

## Assigning a value
As described in [Variables](./../Data/variables.md) article, when you add a variable to `data` container you specify a name and a default value:

```js
data: {
  doShowDetails: false,
}
```

To change the default value, you need to assign a new one. A **single equals sign** assigns a value on its right to a variable on its left:

```html
<button @click="isUserLoggedIn = true">
```

Spaces around equals sign are optional. Subjectively they improve readability of your code.

### From variable to variable and multiple instructions

Consider another example—a user fills out a form, presses Submit button and then information gets saved and displayed elsewhere:

<video width="100%" controls muted class="">
  <source src="./media/click-var-to-var.mp4" type="video/mp4">
</video>

To achieve this you need:
- A variable `emailInput` connected to the input form control with `v-model`.
- Another variable `emailSubmitted` to store and display the *submitted* information.
- An event listener to move data from one variable to another on click.

The latter can be done by assigning a value of one variable to another. The following button will assign the value of `emailInput` to `emailSubmitted` when clicked:

```html
<input v-model="emailInput">
<button @click="emailSubmitted = emailInput">
  Sign up
</button>
<!-- -->
<div>Submitted email: {{emailSubmitted}}</div>
```

To complete the prototype you would also need to clean up the input form control when the button is pressed. You are able to define multiple instructions for one event separating them with a semicolon. The full-feature button also assigns empty string to `emailInput` right after saving its value in `emailSubmitted`:

```html
<input v-model="emailInput">
<button @click="emailSubmitted = emailInput; emailInput = ''">
  Sign up
</button>
<!-- -->
<div>Submitted email: {{emailSubmitted}}</div>
```

As a result when users input their data it's being immediately stored in `emailInput`. When the button is clicked the data is copied to `emailSubmitted` so you can use it anywhere in the UI, and `emailInput` is cleaned up so the form is returned to its initial state.

<!-- todo: download example file -->

## Beyond button

You can add a click event listener to any container, not only to a `<button>`. This means that you can design your components freely with `<div>`s and still allow for interactivity. What's even more important, clicking on child elements of the container with an event listener will also trigger an event:

<video width="100%" controls muted class="">
  <source src="./media/click-details.mp4" type="video/mp4">
</video>

```html
<div @click="doShowDetailsView = true" class="flex">
  <div class="w-16 h-16 rounded-full bg-grey-lighter mr-6">SA</div>
  <div class="flex-1">
    <div class="font-bold">Steve Allen</div>
    <div class="text-grey">This is an amazing opportunity!</div>
  </div>
</div>
```

In this example a `@click` listener is added to a flex container with multiple containers inside. Clicking anywhere on this container and its children triggers the event.

## Self-practice

### Task 1

Allow users to switch between different photos:

<video width="100%" controls muted class="">
  <source src="./media/click-practice-1.mp4" type="video/mp4">
</video>

1. Use the result of the [task in Displaying data](./../Data/display.md#self-practice) article as a starting file.
2. Add three buttons with click event listeners below the image.
3. On click assign different URLs to `imageUrl`. The following images are used in the demo: [1](https://secure.img1-fg.wfcdn.com/im/76790410/resize-h800-w800%5Ecompr-r85/6677/66771259/Elk+Wingback+Chair.jpg), [2](https://secure.img1-fg.wfcdn.com/im/23366032/resize-h800-w800%5Ecompr-r85/6677/66771264/Elk+Wingback+Chair.jpg), [3](https://secure.img1-fg.wfcdn.com/im/10686707/resize-h800-w800%5Ecompr-r85/6677/66771261/Elk+Wingback+Chair.jpg).
4. As a result a different images should be rendered depending on which button users click.

If you have problems completing the task download the [final result](./../../../course-files/interaction-basics/events/event-click-practice-1-end.html.zip).

### Task 2

Display information a user submits:

<video width="100%" controls muted class="">
  <source src="./media/click-practice-2.mp4" type="video/mp4">
</video>

1. Use the result of [Task 2 in Connecting to forms](./../Data/forms.md#task-2) article as a starting file.
2. Create another set of variables to store submitted data and display their values in the right column intead of displaying the values of variables that are connected to the form.
3. Add Submit button with a click event listener. On click assign values from variables connected to form controls to variables used for storing data and clear the form. Hint: you will have a total of six instructions in the click event listener.

If you have problems completing the task download the [final result](./../../../course-files/interaction-basics/events/event-click-practice-2-end.html.zip).

<!-- todo: allow to download the example -->

<!-- todo: self-practice 1: click to change a label, self-practice 2: click to change an image, self-practice 3: click to load data from a form -->

<!-- todo: probably the practice below should be moved to conditions section -->

<!-- ## Self-practice

The power of click allows you to add real interactivity to all prototypes you've created in Conditions articles. Now you can revisit your recent designs and add click events so you don't have to change values in Vue dev tools.

### Event creation

<video width="100%" controls loop autoplay muted style="margin-top: 24px;">
  <source src="./media/events-click-1.mp4" type="video/mp4">
</video>

1. Start with the prototype you created in [Complex conditions' self-practice](./../Conditionals/styles.html#self-practice-basic). If you don't have your prototype, download the [starting file](./../../../course-files/interaction-basics/events-click-task-events-start.html.zip).
2. Add 4 event listeners to buttons:
- “Create” shows the event creation
- “Save” and “Cancel” hide the event creation
- “Continue” on Features page marks intro as seen, so Features page is shown only once
3. Since the prototype has all required variables and conditions in place, you should be able to preview results in Chrome right after applying the listeners

#### Solution

If you have any problems completing the task, dowload and review the [complete prototype](./../../../course-files/interaction-basics/events-click-task-events-end.html.zip)

### Tabs

<video width="100%" controls loop autoplay muted style="margin-top: 24px;">
  <source src="./media/events-click-2.mp4" type="video/mp4">
</video>

1. Start with the prototype you created in [Conditional styles' self-practice](./../Conditionals/complex.html#self-practice). If you don't have your prototype, download the [starting file](./../../../course-files/interaction-basics/events-click-task-1-start.html.zip).
2. Add `@click` event listener to every tab container with instructions to change the value of the `currentTab` variable to the name of the tab.
3. Usually you'd come up with values for tabs yourself, but in the given prototype there are already conditional styles that rely on specific values like `:class="{'border-pink': currentTab === 'for you'}"`. Make sure you use the same values, so the styles are applied.

#### Solution

If you have any problems completing the task, dowload and review the [complete prototype](./../../../course-files/interaction-basics/events-click-task-1-end.html.zip) -->