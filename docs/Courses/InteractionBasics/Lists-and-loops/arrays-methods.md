# Managing lists

<video width="100%" controls autoplay muted style="margin-top: 24px; margin-bottom: -24px;">
  <source src="./media/list-managing-1.mp4" type="video/mp4">
</video>

## Methods

The beauty of arrays is how powerful they are when you need to change their content. They come with a toolset of operations you can perform on them. These operations are called **methods**.

Two methods are explored in this article: **adding** an item to an array and **removing** one from it. You will find yourself using these two methods most often when prototyping, but there are many, many more, that allow you to sort items, filter them, etc.

## Adding to a list

When prototyping a task list, or a chat for example, it is essential to allow users to add items to an array. It takes two steps to add a new item to an array:

1. You need to store user's input that you want to become an item in an array.
2. As with most interactions, you need an event listener with instructions to add user's input to an array.

First step is nothing new—you create a form control [connected to a variable](./../Data/display.md#text) with `v-model` attribute:
```html
<div v-for="task in tasks">
  {{task}}
</div>
<input v-model="newTask" placeholder="Add a task...">
```
```js
data: {
  newTask: '',
  tasks: ['Take a breath', 'Buy lettuce', 'Make smoothie']
}
```

Next you need to add an event listener—for example, `@keypress.enter` on the very same input—to add the variable's value to the array. There's a special method for adding items to an array called `push`:

```html
<input v-model="newTask" @keypress.enter="tasks.push(newTask)"  placeholder="New task">
```

This instruction can be read as “take the `tasks` array and add the value of `newTask` to it”.

Now let's take a closer look to the syntax:

- You attach the method's name to the array's name.
- You separate them with a dot.
- You put parentheses after the method's name.
- You put a value, if a method expects any, inside parentheses.

As a result, now every time a user presses enter inside the input, the value of the input is added to the array.

### Hands-on

<video width="100%" controls autoplay muted style="margin-top: 24px; margin-bottom: 8px;">
  <source src="./media/list-managing-1.mp4" type="video/mp4">
</video>

1. Download the [prototype](./../../../course-files/interaction-basics/manage-list-adding.html.zip).
2. Open it in Chrome and try adding items to the list by entering a value into the input and pressing return/enter.
3. You should see the item being added to the list and staying in the input too.
4. To fix this open open the prototype in VSCode and add another instruction to `keypress.enter` event listener to clean the variable connected to the input. Instructions must be separated with a semicolon and a space `; `. See this being done in the video above.

##  Removing from a list

Taking an item from a list is yet another command you can give to an array. This can be done with the method `splice`  and unlike `push` it takes two parameters, not one:

- With first parameter you specify at which **index** you want to start taking items out. Where `push` doesn't care much about the number of items and their indexes in an array—it just adds another item to an array—when it comes to removing things you need to know which item to remove, and indexes are the right tool to track that.
- With the second parameter you tell how many items you want to remove. Quite often the value is `1`, because most of the time you allow users to delete one item at a time, but it may as well be another number or even a variable.

Continuing with the task list example, you have a list generated from an array with a `v-for` attribute and you track both value and index of each item with `(item, i)` syntax. Now let's add a button to the template, and add `click` event listener with instructions to delete an item it was pressed on:

<!-- Good thing you already know from the [previous article](./indexes.md#index-in-v-for-attribute) that you can keep track of indexes in containers repeated with `v-for` -->

<!-- TAnd the starting index depends on which item a user wants to delete. Good thing you know from the [previous article](./indexes.md#index-in-v-for-attribute) that you can keep track of indexes in containers repeated with `v-for`: -->

```html
<div v-for="(task, i) in tasks">
  <button @click="tasks.splice(i, 1)"></button>
  <div>{{task}}</div>
</div>
```

The value of `@click` can be read as “take the `contacts` array and remove one item from it at the index the button was clicked”. Understanding this concept can be challenging at first, so let's review what's going on here in details:

- Let's say you have an array with three items — `tasks: ['A', 'B', 'C']`.
- You create a template container with `v-for` attribure connected to the array. 
- You track not only the value of an item for each repetition, but also its index with `(task, i)`.
- At this point you have 3 containers in your layout. You display the value from an array by using temporary variable `task` and you **track index** of each item with temporary variable `i` without using it anywhere just yet.
- You add a button that applies `splice` method to the array and uses the value of `i` for the starting index.
- Now, for example, when you click Remove on the second item in the list, splice method takes the item's index, which is 1 (remember, indexes start from 0 in arrays) and deletes one item starting from index 1, which happens to be the item you pressed Remove on.

### Hands-on

<video width="100%" controls autoplay muted style="margin-top: 24px; margin-bottom: 8px;">
  <source src="./media/list-managing-3.mp4" type="video/mp4">
</video>

1. Download the [prototype](./../../../course-files/interaction-basics/manage-list-removing.html.zip).
2. Open it in Chrome and try removing items by clicking circles to the left of items' texts.
3. Open the prototype in VSCode and find the `splice` method in `click` event listener. Try changing `i` to `index` in `v-for`  and `click`. Save and preview in Chrome—it should work as before. This is just a reminder, that `i` is just a name you choose in `v-for` to reference it elsewhere.


## Self-practice

<!-- todo: task 1: ? -->

### Note-taking app

Create an app that allows to create notes and delete notes, and saves the content:

<video width="100%" controls autoplay loop muted style="margin-bottom: 8px;">
  <source src="./media/array-methods-task-1.mp4" type="video/mp4">
</video>

1. Download the [starting file](./../../../course-files/interaction-basics/note-taking-start.html.zip).
2. Connect textareas to items in the `notes` array. As a result you will see values from the array in the UI. Also open Vue dev tools and try adding some text to the first note—you should see the value of the item change as you type. Hint 1: connecting textareas is done the same way it's done for [inputs](./../Data/display.html#text). Hint 2: you need to use item's index to connect it.
3. Add a click event listener to the “+” container that adds an item to an array. The value should be an empty string.
4. Add a click event listener to the “x” container inside template-container. It should remove an item from the container using the index of the item.

If you have any problems completing the task, dowload and review the [solution](./../../../course-files/interaction-basics/note-taking-end.html.zip).