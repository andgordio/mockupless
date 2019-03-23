# Managing lists

Array is a powerful data type that comes with a number of built-in methods—commands you can give to change its contents. 

Two popular methods are explored in this article: **push** that adds an item to an array, and **splice** that allows to remove items form it. 

## push

When prototyping a productivity app, for example, it is essential to allow users to add items to their agenda or a task list:

! Prototype

If the task list is stored in an array, the goal would be to allow adding items to this array. It takes three pieces of code to achieve this:

1. An array to render the list
2. A variable to store users’ input.
3. An event listener to add users’ input to the array on click.

Creating and rendering an array should be the easiest part by now. You create a variable with a couple of items stored by default and render a list from a template-container with v-for directive:

! Html code with v-for and js Code for array

Storing users’ input isn’t new for you either. You create a text input form control [connected](./../Data/forms.md#text) to an empty variable with `v-model` attribute:

```html
<input v-model="newTask" placeholder="Add a task...">
```
```js
data: {
  newTask: ''
}
```

Finally you need to add an event listener with instructions to add the value of `newTask` to the `tasks` array. Here’s where method `push` comes into play:

```html
<button @click="tasks.push(newTask)">
  Add
</button>
```

This instruction can be read as “take the `tasks` array and add the value of `newTask` to it as a new item”.

Let's take a closer look to the syntax:

- Method's name is separated from the array's name with a dot: `tasks.push`
- Method's name is followed by parentheses. A value (if a method expects any) is placed within them: `tasks.push(newTask)`

! Rewrite to Click:

As a result, now every time a user presses enter inside the input, the value of the input is added to the array.

! A prototype with adding only

##  Removing from a list

Deleting an item from an array can be done with `splice` method. Unlike `push` it takes two parameters, not one. Let’s review a simple example first:

! Code with splice command: items.splice(2, 1), also show array with four letters

- First parameter specifies at which **index** you want to start taking items out. 
- Second parameter indicates how many items you want to remove from an array. 

The code above reads: “Remove one item from `items` array at index 2”. This means that when this command is applied, C is taken out and the updated array has only three items:

! Code of updated array

Going back to the task list example: you have a list generated from an array with a `v-for` attribute:

! Template container task in tasks

Now you want to add a delete button to every element with an event listener that removes this item on click. `splice` requires the index of the item so we need to track it too:

! Template container task, i in tasks

Similarly to the way you used index’s temporary name to track which item was selected in the [previous article](./indexes.md), you can now use this name to inform `splice` at which index you want to delete an item:

! Template with @click splice

Since each item generated from the template knows its index by the name i, when users click delete button on an item with index 2 for example, 2 is passed to splice and the item at index 2 is deleted, which is the item that the button was pressed at.

<!-- todo: As in previous, think about meaningful summary, taking it all back to the very high level, maybe in general, abstract terms. The of the article must make user comfortable with this piece of knowledge.  -->


## Practice

Working with arrays is a complex subject and it’s worth practicing it for a while. Below you can find X exercises ranging from simple to quite complex. Each of them explores different applications of lists and their combination with other features. Take your time to complete all of them—this will make your progress further more comfortable, because lists are present in most prototypes you find further in the course. 
! Edit last sentences

### Task 1: messages UI

enter message and keypress.enter to send. See them in the conversation history
- no delete
- flex-1 to push down

### Task 2: from one list to another
 
see items in the Catalog column and add them to the Cart column with a click, remove from Cart with Delete. 
- Taking from one array using index
- Deleting

### Task 3: note-taking app

Create an app that allows to add, edit and delete notes:

<video width="100%" controls autoplay loop muted style="margin-bottom: 8px;">
  <source src="./media/array-methods-task-1.mp4" type="video/mp4">
</video>

1. Fork the [starting file]() that has the layout created for you together with the array.
2. [Connect]() textarea in the template-container to the items in the `notes` array. As a result you will see values from the array in the UI, and all changes you apply to them will be saved in the array. 

! Check if it works without using an index. If it doesn’t, use another task. This is too early to introduce these kinds of problems to people. But why wouldn’t it? It should!

1. Download the [starting file](./../../../course-files/interaction-basics/note-taking-start.html.zip).
2. Connect textareas to items in the `notes` array. As a result you will see values from the array in the UI. Also open Vue dev tools and try adding some text to the first note—you should see the value of the item change as you type. Hint 1: connecting textareas is done the same way it's done for [inputs](./../Data/display.html#text). Hint 2: you need to use item's index to connect it.
3. Add a click event listener to the “+” container that adds an item to an array. The value should be an empty string.
4. Add a click event listener to the “x” container inside template-container. It should remove an item from the container using the index of the item.

If you have any problems completing the task, dowload and review the [solution](./../../../course-files/interaction-basics/note-taking-end.html.zip).
