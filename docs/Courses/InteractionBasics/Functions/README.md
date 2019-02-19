# Functions

![hey](./media/function-diagram-1.png)

You already use containers for content in layout — divs. You also use containers for data — variables. It was only a matter of time before you discovered there are **containers for instructions** too 💁‍♀️.

Meet **functions** — a powerful named container for your instructions that helps you avoid repeating same code many times and jam multiple instructions directly into event listeners.

## Creating a function

<video width="100%" controls autoplay muted style="margin-top: 16px;">
  <source src="./media/functions-1.mp4" type="video/mp4">
</video>

In the [Managing lists](./../Lists-and-loops/arrays-methods.md) sections you’ve seen examples of having multiple instructions assigned to one event listener. On top of that, different events may need the same set of instructions:
<!-- todo: currently this is not truth, no multiple instructions there, not repeating ones either -->

```vue
<input v-model="newMessage" @keypress.enter="messages.push(newMessage); newMessage = ''">
<button @click="messages.push(newMessage); newMessage = ''">
  Send
</button>
```

This code works, but makes a simple layout quite busy. Also you have to keep in mind that if you make changes to instructions in one event listener, you shouldn't forget to make them in another listener too, if these two events must behave identically.

There's a way to store a set of instructions in a separate container - **a function** - and call for it from as many event listeners as you want. First, you create a function inside `methods` container of your [template](./../Setup/) with instructions inside:

```js
methods: {
  addMessage () {
    this.messages.push(this.newMessage)
    this.newMessage = ''
  }
}
```

Let's review parts of this code one by one:
- First comes the name — `addItem`. Just as with data variables you pick a name yourself. Best practices for naming are also the same: make sure the name helps understanding what a function does, and use camel case for names that consist of multiple words.
- The name is followed by a pair of parenthises. This is where parameters go. This is explored in the following article, and for now they just stay empty.
- The body of a function, **instructions**, is enclosed in curly brackets.
- When referencing a variable from `data` section or another function from `methods` section, you need to put `this.` in front of the name—something you didn’t have to do when you wrote instruction right into event listener.

:::tip this.
The use of `this.` is a complex topic that requires understanding scope of variables. A simple, yet not exactly accurate, explanation is this: a function is a universe of its own that allows you to create variables and functions inside of it. Functions allow you to name your variables and functions whatever you want, meaning you may (doesn't mean you should) use the names you've already used in your `data` container. For a function to be able to understand that you are referencing a variable or a function **outside of the function**, you need to add `this.` in front of the name.
:::

## Using a function

To access a function you've created, you need to call it by its name in your event listeners, where instructions used to live:

```html
<input v-model="newTask" @keypress.enter="addItem()">
<button @click="addItem()">
  Add
</button>
```

Both event listeners can be read as “when the event happens, call the function `addItem` to execute instructions it has”. The syntax is simple here: the name followed by parentheses that stay empty for now.

### Hands-on

<video width="100%" controls autoplay loop muted style="margin-top: 16px;">
  <source src="./media/functions-2.mp4" type="video/mp4">
</video>

1. Download the [prototype](./../../../course-files/interaction-basics/function-chat.html.zip) and open it VSCode.
2. Locate and study the `sendMessage` function in `methods` section at the bottom of the code.
3. Locate the input and the button in the layout. Add `keypress.enter` and `click` event listeners that call for `sendMessage` function.
4. Open the prototype in Chrome and try sending a message by clicking “Add” button or pressing enter/return inside the input field.

## Self-practice

> coming soon