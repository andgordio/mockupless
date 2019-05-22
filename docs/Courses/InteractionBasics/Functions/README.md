# Functions

<!-- ![illustration for functions](./media/il-functions.png) -->

You already use containers for content in layout: divs. You also use containers for data: variables. It was only a matter of time before you discovered that there are **containers for instructions** too 💁.

Meet **functions**, powerful named containers for instructions that help you avoid repeating code and jamming multiple instructions directly into event listeners. In the [Managing lists](./../Lists-and-loops/arrays-methods.html#push) article, you explored a prototype that adds an item to an array on click:

<iframe height="440" style="width: 100%;" scrolling="no" title="Functions—List—Add" src="//codepen.io/andgordy/embed/PgpoRB/?height=440&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/PgpoRB/'>Functions—List—Add</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The button *Add* has two instructions in the `@click` listener:

```html {2}
<input v-model="newTask" placeholder="Enter new task...">
<button @click="tasks.push(newTask); newTask = ''">
  Add
</button>
```

Let’s say you tested this prototype and realized that users expect to add items by pressing *Return*/*Enter*. You add a `@keypress.enter` event listener with the same instructions to the text input:

```html {1}
<input @keypress.enter="tasks.push(newTask); newTask = ''" v-model="newTask" placeholder="Enter new task...">
<button @click="tasks.push(newTask); newTask = ''">
  Add
</button>
```

This code works, but there are issues with having copies of the same code:

- The layout code becomes busy with long, repeated instructions.
- When you decide to change the instructions, you'll have to make sure that you change all their copies for all event listeners that should behave identically.

Functions address both issues by storing instructions away from the layout and allowing you to reuse them as many times as you need.

## Creating a function

Create a function inside the `methods` container in the JS section of the [prototype](./../Setup/):

```js
methods: {
  addItem () {
    this.tasks.push(this.newTask)
    this.newTask = ''
  }
}
```

Let's review the parts of this code one by one:
- First comes the name, `addItem`. As with [data variables](./../Data/variables.html#naming-variables) you pick a name yourself. The best practices for naming functions are also the same: make sure the name is helpful for understanding what the function does, and use camel case for names that consist of multiple words.
- The name is followed by a pair of parentheses. Parameters go inside the parentheses, but this example doesn’t have any (parameters are explored in the following article; for now, the parentheses stay empty).
- Instructions, previously placed directly in the event listeners, are enclosed in curly brackets.
- Instructions, previously separated by semicolons, are separated with line breaks. You may keep instructions on a single line separated by semicolons, but having a separate line for each one usually improves readability.

### this.

Notice that you need to add `this.` in front of the name when you reference a variable from the `data` section or another function from the `methods` section—something you didn’t have to do when you placed instructions in an event listener.

The use of `this.` is a complex topic that requires knowledge of the scope of variables. The following is a simple but not exactly accurate explanation: a function is a universe of its own that allows you to create variables and other functions inside of it. Functions allow you to name your variables and functions whatever you want, meaning that you may (not necessarily should) use the names you've already used in your `data` container. For a given function to understand that you are referencing a variable or a function that is **outside of the function**, you need to add `this.` in front of the name of the referenced variable or function.

## Using a function

With the function in place, you can replace the instructions in the event listeners with the function’s name followed by a pair of parentheses:

```html {1,2}
<input v-model="newTask" @keypress.enter="addItem()">
<button @click="addItem()">
  Add
</button>
```

Both event listeners can be read as “when the event happens, call the function `addItem` to execute the funciton’s instructions”.

As you can see, both issues outlined in the beginning of the article have been solved:

- Writing a function’s name in the event listeners instead of instructions makes layout cleaner.
- When you decide that adding an item requires different instructions, you change them once, inside the function, and all event listeners will have access to the updated logic.

## Practice

To practice working with functions add them to the prototypes you’ve created throughout the course:

### Simple form

<iframe height="555" style="width: 100%; margin-top: 16px;" scrolling="no" title="Functions—Task: Profile info" src="//codepen.io/andgordy/embed/VNzdxE/?height=555&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/VNzdxE/'>Functions—Task: Profile info</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the [Profile information](./../Events/#profile-information) task in the Events article. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/wZqpmE?editors=1000)
2. Create a `submitForm` function in the JS section, inside `methods`.
3. Move the instructions from the *Submit* button’s `@click` listener to the function. Don't forget to add `this.` to all references of the variables.
4. Use the function in the `@click` listener by adding its name followed by parentheses. 

### Chat

<iframe height="459" style="width: 100%; margin-top: 16px;" scrolling="no" title="Lists—Task: Messenger, with Function" src="//codepen.io/andgordy/embed/qwNdJV/?height=459&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/qwNdJV/'>Lists—Task: Messenger, with Function</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the [Lists—Task: Messenger](./../Lists-and-loops/arrays-methods.md#task-1-chat) task from the Array methods article or fork the [one from the article](https://codepen.io/andgordy/full/RdvymE).
2. Create a `sendMessage` function in the `methods` section.
3. Move the instructions from the `@keypress.enter` event listener to the function.
4. Don’t forget to add `this.` wherever you reference a variable from the `data` section within a function.
5. Use the function in the key press listener by adding its name followed by parentheses.

### Product card

<iframe height="647" style="width: 100%; margin-top: 16px;" scrolling="no" title="Functions—Task: Product card" src="//codepen.io/andgordy/embed/WWEygr/?height=647&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/WWEygr/'>Functions—Task: Product card</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the [Product card](./../Events/other.html#product-card) task from the Events article. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/wZqyjv?editors=1000)
2. Create 3 functions: `hoverFirst`, `hoverSecond` and `hoverThird`.
3. Move the instructions from the hover listeners to the functions. Don't forget to add `this.`
4. Use the functions in the hover listeners by adding their names followed by parentheses. 

