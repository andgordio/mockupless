# Parameters

<!-- To finish moving all instructions to functions in the tasks prototype, you need one for removing an item from an array. This instruction is different from the one for adding an item because it needs an index of the item to work properly: -->

<video width="100%" controls autoplay muted style="margin-top: 24px; margin-bottom: 8px;">
  <source src="./../Lists-and-loops/media/list-managing-3.mp4" type="video/mp4">
</video>

Another type of instructions was reviewed in [Removing from a list](./../Lists-and-loops/arrays-methods.md#removing-from-a-list)—the one that requires an index of an item:

```html
<div v-for="(task, i) in tasks">
  <button @click="tasks.splice(i, 1)"></button>
  <div>{{task}}</div>
</div>
```

If you create a function and move the instruction to it the code won't work:

```html
<div v-for="(task, i) in tasks">
  <button @click="removeItem()"></button>
  <div>{{task}}</div>
</div>
```
```js
methods: {
  removeItem () {
    this.tasks.splice(i, 1)
  }
}
```

We use `i` inside the function but currently the function has no idea what `i` stands for. Anyone can call it from anywhere and by default a function doesn’t know who called it, it doesn't care about the context, **it just executes what's inside**. There's no indication of what the value of `i` is inside the function. <!--, but it's good news, because you don't need _a_ value for i, you need _the_ value of particular item in the list -->

To fix this, the event listener must not only call a function but also provide the required values a function needs to work properly. This is called passing parameters to a function:

```html
<div v-for="(task, i) in tasks">
  <button @click="removeItem(i)"></button>
  <div>{{task}}</div>
</div>
```
```js
methods: {
  removeItem (i) {
    this.tasks.splice(i, 1)
  }
}
```

- A value you want to pass to a function is written inside parentheses right after the name of function.
- When creating a function in methods section, you specify a _name_ for a value a function is expected to get, also inside parentheses. 
- Now inside a function you can use that _name_ to pass it to `splice` method so it knows which item to delete. 

### Naming parameters

When you are passing something into a function, you are actually not passing a variable, which is a name *and* a value. You are only passing a value. This means when you define a function `removeItem (i)` inside methods section you don't mean “expect `i` to be passed to this function”. Instead you mean “expect *a* value and name it `i`, so I can access this value using this name inside the function”.

As a result, you can give any name to a parameter and use it inside a function. This code works absolutely the same as the one shown above with `i`'s used everywhere:

```html
<div v-for="(task, i) in tasks">
  <button @click="removeItem(i)"></button>
  <div>{{task}}</div>
</div>
```
```js
methods: {
  removeItem (index) {
    this.tasks.splice(index, 1)
  }
}
```

When the function is called, not `i` but **its value**, `2` for example, is passed into a function. And the function gives this value the name `index`, and then the name is used to pass `2` into `splice` method. 

<!-- todo: explain why this is important: This nature allows functions to be very  -->

### Hands on

<video width="100%" controls autoplay muted style="margin-top: 24px; margin-bottom: 8px;">
  <source src="./../Lists-and-loops/media/list-managing-3.mp4" type="video/mp4">
</video>

1. Download the [prototype](./../../../course-files/interaction-basics/functions-parameters-1.html.zip)
2. Preview it in Chrome.
3. Open it in VSCode to study methods section and layout.
4. In `removeItem` function rename the expected parameter from `index` to `itemToDelete`, also rename inside the function in splice method. Preview it in Chrome—the prototype should work as before.

<!-- ## multiple values ? -->

## Self-practice

> coming soon