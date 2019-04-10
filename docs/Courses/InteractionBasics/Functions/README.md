# Functions

![hey](./media/il-functions.png)

You already use containers for content in layout—divs. You also use containers for data—variables. It was only a matter of time before you discovered there are **containers for instructions** too 💁.

Meet **functions** — a powerful named container for instructions that helps you avoid repeating code and jamming multiple instructions directly into event listeners. In the [Managing lists](./../Lists-and-loops/arrays-methods.html#push) article you explored a prototype that adds an item to an array on click:

<iframe height="440" style="width: 100%;" scrolling="no" title="Functions—List—Add" src="//codepen.io/andgordy/embed/PgpoRB/?height=440&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/PgpoRB/'>Functions—List—Add</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Button Add has two instructions in the click listener:

```html{2}
<input v-model="newTask" placeholder="Enter new task...">
<button @click="tasks.push(newTask); newTask = ''">
  Add
</button>
```

Let’s say you tested this prototype and realized users expect to add items also by pressing return/enter. You add an event listener with the same instructions to the text input too:

```html{1}
<input @keypress.enter="tasks.push(newTask); newTask = ''" v-model="newTask" placeholder="Enter new task...">
<button @click="tasks.push(newTask); newTask = ''">
  Add
</button>
```

This code works but there are some issues with having copies of the same code:

- The layout code becomes busy with long repeating instructions.
- When you decide to change the instructions you'll have to make sure you change all their copies for all event listeners that should behave identically.

Functions address both issues by storing instructions away from the layout and allowing to re-use them as many times as you need.

## Creating a function

You create a function inside `methods` container in JS section of the [prototype](./../Setup/):

```js
methods: {
  addItem () {
    this.tasks.push(this.newTask)
    this.newTask = ''
  }
}
```

Let's review parts of this code one by one:
- First comes the name, `addItem`. Just as with [data variables](./../Data/variables.html#naming-variables) you pick a name yourself. Best practices for naming are also the same: make sure the name helps understanding what a function does and use camel case for names that consist of multiple words.
- The name is followed by a pair of parentheses. This is where parameters go but this example doesn’t have any. Parameters are explored in the following article, and for now the parentheses stay empty.
- Instructions, previousely placed directly in the event listeners, are enclosed in curly brackets.
- Instructions, previousely separated by semicolons, are separated with line breaks. You may keep instructions on a single line separated by semicolons but having a separate line for each one of them subjectively improves readability.

### this.

Notice that when referencing a variable from `data` section or another function from `methods` section, you need to put `this.` in front of the name—something you didn’t have to do when you placed instructions in event listener.

The use of `this.` is a complex topic that requires understanding scope of variables. A simple yet not exactly accurate explanation is the following: a function is a universe of its own that allows you to create variables and functions inside of it. Functions allow you to name your variables and functions whatever you want, meaning you may (doesn't mean you should) use the names you've already used in your `data` container. For a function to be able to understand that you are referencing a variable or a function **outside of the function**, you need to add `this.` in front of the name.

## Using a function

With the function created you can now replace the instructions in the event listeners with the function’s name followed by a pair of parentheses:

```html
<input v-model="newTask" @keypress.enter="addItem()">
<button @click="addItem()">
  Add
</button>
```

Both event listeners can be read as “when the event happens, call the function `addItem` to execute instructions it has”.

Both issues outlined in the beginning of the article are solved as you can see:

- Writing a function’s name in the event listeners instead of instructions makes layout cleaner
- Now when you decide adding an item requires different instructions you change them once, inside the function, and all event listeners will have access to the updated logic

## Practice

To practice working with functions add them to the prototypes you’ve created throughout the course:

### Simple form

[task](./../Events/#task-2)

> todo: return to this when the Events articles are moved to CodePen

1. Fork
2. Create 3 functions
3. Move instructions
4. Don't forget `this.`

### Chat

<iframe height="459" style="width: 100%; margin-top: 16px;" scrolling="no" title="Lists—Task: Messenger, with Function" src="//codepen.io/andgordy/embed/qwNdJV/?height=459&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/qwNdJV/'>Lists—Task: Messenger, with Function</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of [Lists—Task: Messenger](./../Lists-and-loops/arrays-methods.md#task-1-chat) task. Or fork the [one from the article](https://codepen.io/andgordy/full/RdvymE).
2. Create a `sendMessage` function in `methods` section.
3. Move the instructions from `@keypress.enter` event listener to the function.
4. Don’t forget to add `this.` everytime you reference a variable from `data` section within a function.

### Image previews

[task](./../Events/other.html#task-1)

> todo: return to this when the Events articles are moved to CodePen

1. Fork
2. Create 3 functions
3. Move instructions
4. Don't forget `this.`

