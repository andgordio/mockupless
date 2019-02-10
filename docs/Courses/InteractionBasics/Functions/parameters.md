# Parameters

To finish moving all instructions to functions in the tasks prototype, you need one for removing an item from an array. This instruction is different from the one for adding an item because it needs an index of the item to work properly:

```html
<div v-for="(task, i) in tasks">
  <button @click="tasks.splice(i, 1)"></button>
  <div>{{task}}</div>
</div>
```

If you just create a function and move the instruction to it you may spot a problem:

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

We use `i` inside the function but currently the function has no idea what `i` stands for. Anyone can call it from anywhere and by default a function doesn’t know who called it, it doesn't care about the context, **it just executes what's inside**. 

To fix this, the event listener must not only call a function but also provide the required information a function can use to work properly. This is called passing parameters to a function:

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

- A value you want to pass to a function is written inside parentheses right after the name of function
- When creating a function in methods section, you specify a name for what a function is supposed to receive. 
- Now inside a function you can use that name to pass it to splice method so it knows which item to delete. 

### Naming parameters

When you are passing something into a function, you are actually not passing a variable, which is a name *and* a value. You are only passing a value. This means when you define a function with `removeItem (i)` you don't mean “expect `i` to be passed to this function”. Instead you mean “expect *a* value and name it `i`, so I can access this value using this name inside the function”.

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

<!-- todo: explain why this is important -->

### Hands on

## multiple values

## smth 



<!-- Back to the tasks prototype. You’ve already moved instructions to add an item to a function. Yet deleting an item from a list is still in your layout:

```js
click="deleteItem(i)"

deleteItem (index) {
  this.items.splice(i, 1)
}
```

Even though it‘s just one instruction and it is not repeated anywhere else, it’s still a good practice to put all instructions in functions: cleaner layout, scalable -->