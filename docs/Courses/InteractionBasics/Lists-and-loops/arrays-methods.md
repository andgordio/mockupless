# Managing lists

Array is a powerful data type that comes with a number of built-in **methods**. Methods are commands you can give to change its contents. 

Two popular methods are explored in this article: `push` that adds an item to an array, and `splice` that allows to remove items form it. 

## .push

When prototyping a productivity app, for example, it is essential to allow users to add items to their agenda or a task list:

<iframe height="480" style="width: 100%;" scrolling="no" title="Lists—Manage—Tasks list, adding only" src="//codepen.io/andgordy/embed/ywZJaR/?height=480&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ywZJaR/'>Lists—Manage—Tasks list, adding only</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Since the task list is stored in an array, your goal is to allow adding items to this array. It takes three pieces of code to achieve this:

1. An array to render the list
2. A variable to store users’ input.
3. An event listener to add users’ input to the array on click.

Creating a list should be the easy part for you by now. You create an array with a couple of items stored by default and render a list from a template-container with a `v-for` directive:

```html
<div v-for="task in tasks">
  {{task}}
</div>
```
```js
data: {
  tasks: ['Pick up delivery', 'Buy granola', 'Call grandma']
}
``` 

Storing users’ input isn’t new for you either. You create a text input form control [connected](./../Data/forms.md#text) to an empty variable with a `v-model` attribute:

```html
<div v-for="task in tasks">
  {{task}}
</div>
<input v-model="newTask" placeholder="Enter new task...">
```
```js
data: {
  tasks: ['Pick up delivery', 'Buy granola', 'Call grandma'],
  newTask: ''
}
```

Finally, you need to add an event listener with instructions to add the value of `newTask` to the `tasks` array. Here’s where method `push` comes into play:

```html
<div v-for="task in tasks">
  {{task}}
</div>
<input v-model="newTask" placeholder="Add a task...">
<button @click="tasks.push(newTask)">
  Add
</button>
```

This instruction can be read as “Take the `tasks` array and add the value of `newTask` to it as a new item”.

Let's take a closer look at the syntax:

- Method's name is separated from the array's name with a dot: `tasks.push`
- Method's name is followed by parentheses. A value (if a method expects any) is placed within them: `tasks.push(newTask)`

As a result, every time a user clicks Add button the value of the input is added to the array:

<iframe height="480" style="width: 100%;" scrolling="no" title="Lists—Manage—Tasks list, adding only, without cleaning" src="//codepen.io/andgordy/embed/VRgjWK/?height=480&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/VRgjWK/'>Lists—Manage—Tasks list, adding only, without cleaning</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you test the prototype above you should notice that it doesn’t work properly. When you click the Add button an item is added to the list as expected but the input field is not cleared. This happens because adding a variable's value to an array doesn’t move it, but copies instead. This can be fixed by adding another instruction to assign empty value to the variable connected to the input on click:

```html
<button @click="tasks.push(newTask); newTask = ''">
  Add
</button>
```

Now clicking the button adds the value of the variable to the arrays first, and then clears it by assigning an empty string.


## .splice

Deleting an item from an array can be done with `splice` method. Let’s review a simple example first:

```html{4}
<div v-for="letter in alphabet">
  {{letter}}
</div>
<button @click="alphabet.splice(2, 1)">
  Delete 3rd item
</button>
```
```js
data: {
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
}
```

Unlike `push`, `splice` method takes two parameters, not one:

- First parameter specifies at which **index** you want to start taking items out. 
- Second parameter indicates **how many** items you want to remove from an array. 

The `splice` method above reads: “Remove one item from `alphabet` array at index 2.” This means that when this command is applied, C is taken out (animation is added to visualize the result ):

<iframe height="310" style="width: 100%;" scrolling="no" title="Lists—Manage—Simple splice" src="//codepen.io/andgordy/embed/ZPwOqg/?height=310&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ZPwOqg/'>Lists—Manage—Simple splice</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Next time you press the Delete button D is deleted, because it has index 2 now. Next click will remove E and so on. This will continue until there are only two items in the array and there’s nothing to delete at index 2.

Going back to the to-do list prototype, a more realistic task would be to have multiple delete buttons, each removing a container it’s placed within:

<iframe height="480" style="width: 100%;" scrolling="no" title="Lists—Manage—Tasks list full" src="//codepen.io/andgordy/embed/wONazG/?height=480&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/wONazG/'>Lists—Manage—Tasks list full</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To achieve this, you need 3 pieces:

- Track indexes in `v-for` directive with a temporary name.
- Add an `x` button to the template container.
- Add an event listener to the button that calls `splice` with the index of an item

Similarly to the way you used index’s temporary name to track which item was selected in the [previous article](./indexes.md), you can now use this name to inform `splice` at which index you want to delete an item:

```html{1,3}
<div v-for="(task, i) in tasks">
  <div>{{task}}</div>
  <button @click="tasks.splice(i, 1)">
    X
  </button>
</div>
<input v-model="newTask" placeholder="Add a task...">
<button @click="tasks.push(newTask); newTask = ''">
  Add
</button>
```

Since each item generated from the template knows its index by the name i, when users click the X button on an item with index 2 for example, 2 is passed to splice and the item at index 2 is deleted, which is the item that the button was pressed at.


## Practice

<!-- Working with arrays is a complex subject and it’s worth practicing it for a while. Below you can find X exercises ranging from simple to quite complex. Each of them explores different applications of lists and their combination with other features. Take your time to complete all of them—this will make your progress further more comfortable, because lists are present in most prototypes you find further in the course. 
! Edit last sentences -->

### Chat

Create a chat view that allows to send messages:

<iframe height="414" style="width: 100%;" scrolling="no" title="Lists—Task: Messenger" src="//codepen.io/andgordy/embed/RdvymE/?height=414&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/RdvymE/'>Lists—Task: Messenger</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a layout with two main containers: conversation history and message input.
2. Create an array to store messages and a variable [connected](./../Data/forms.html#text) to the input.
3. [Render a list](./../Lists-and-loops/#v-for) of messages from a template-container with `v-for` directive.
4. Add a `@keypress.enter` event listener to the input with `push` method that adds contents of the input to the array.
5. Add an instruction to clear the input to the same event listener.

### From a list to a list

Design a prototype that allows to move items between 2 lists. This task is a litte abstract but it’s good for honing your basic list management skills:

<iframe height="400" style="width: 100%;" scrolling="no" title="Lists—Task: 2 lists" src="//codepen.io/andgordy/embed/EMrRed/?height=400&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/EMrRed/'>Lists—Task: 2 lists</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create two arrays. Populate one of them with 3-5 items.
2. Create a layout with two columns, both with template-containers connected to different arrays.
3. Make sure to track indexes in the templates.
4. Add click listeners to both templates with two instructions. First one adds the selected item to the opposing array with `push`. Second instruction removes the selected item from the array it was selected from with `splice`.

### Note-taking app

Create an app that allows to add, edit and delete notes:

<iframe height="563" style="width: 100%;" scrolling="no" title="Lists—Task: Note-taking app" src="//codepen.io/andgordy/embed/ywwOPb/?height=563&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ywwOPb/'>Lists—Task: Note-taking app</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create an array to store notes. Populate it with a couple of notes by default, so you don’t start with empty prototype.
2. Create a grid layout with a child template-container connected to the array with `v-for`. Make sure to track index.
3. Place `<textarea>` inside the template and [connect it](./../Data/forms.html#text) to the item in the array using its index.
4. Create the + container and add a click listener that adds an empty string to the array.
5. Add an x button to the template-container. It must delete an item from the array at the selected index.
