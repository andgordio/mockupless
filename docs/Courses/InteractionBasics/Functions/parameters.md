# Parameters

In [Managing lists](./../Lists-and-loops/arrays-methods.html#splice) you learnt to remove an item from a list with `splice` method:

<iframe height="441" style="width: 100%;" scrolling="no" title="Functions—Parameters—List" src="//codepen.io/andgordy/embed/dLvyjV/?height=441&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/dLvyjV/'>Functions—Parameters—List</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This is achieved by passing an index of an item into the method:

```html{3}
<div v-for="(task, i) in tasks">
  <div>{{task}}</div>
  <button @click="tasks.splice(i, 1)">
    X
  </button>
</div>
```

If you decide to move instructions from click event listener into a function as it was done in the previous article the prototype won’t work:

```html{3}
<div v-for="(task, i) in tasks">
  <div>{{task}}</div>
  <button @click="removeItem()">
    X
  </button>
</div>
```
```js
methods: {
  removeItem () {
    this.tasks.splice(i, 1)
  }
}
```

`i` is used inside the function but currently the function has no idea what `i` stands for. This function can be called from anywhere and it doesn’t know where it was called from. **It just executes the instructions inside**. There's no indication of what the value of `i` is inside the function.

To address this issue the event listener must not only call a function but also provide the required values a function needs to work properly. This is called passing parameters to a function:

```html{3}
<div v-for="(task, i) in tasks">
  <div>{{task}}</div>
  <button @click="removeItem(i)">
    X
  </button>
</div>
```
```js{2}
methods: {
  removeItem (i) {
    this.tasks.splice(i, 1)
  }
}
```

- In the `@click` listener you call a function and also pass the the value of `i` to it by placing it inside parentheses.
- In the function itself in `methods` section you specify a _name_ for a value a function is expected to get, also inside parentheses.
- Then in function’s instructions this _name_ is used in `splice` method so it knows which item to delete.

### Naming parameters

When you are passing something into a function, you are actually not passing a variable, which is a name *and* a value. You are only passing a value. This means when you define a function `removeItem (i) {...}` inside methods section you don't mean “expect `i` to be passed to this function”. In fact you mean “expect **a value** and name it `i`, so it can be accessed by this name inside the function”.

This means you can give any name to a parameter and use it inside a function. The following code works the same as the one shown above with `i`'s used everywhere:

```html{3}
<div v-for="(task, i) in tasks">
  <div>{{task}}</div>
  <button @click="removeItem(i)">
    X
  </button>
</div>
```
```js{2}
methods: {
  removeItem (index) {
    this.tasks.splice(index, 1)
  }
}
```

When the function is called, not `i` but **its value**, `2` for example, is passed into a function. The function gives the name `index` to this value. The name `index` is then used to pass `2` into `splice` method. 

This is an important feature even though its value is not too obvious in this simple example. In complex prototypes a function may be called from multiple places, each using different names to pass a value. The ability of functions to accept value and name it as you wish makes them a universal tool. 

<!-- todo: write: functions are separated with commas -->

## Practice

> prototypes with indexes from previous articles.

