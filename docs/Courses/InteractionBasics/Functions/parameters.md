# Parameters

In the [Managing lists](./../Lists-and-loops/arrays-methods.html#splice) section, you learned how to remove an item from a list with the `splice` method:

<iframe height="441" style="width: 100%;" scrolling="no" title="Functions—Parameters—List" src="//codepen.io/andgordy/embed/dLvyjV/?height=441&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/dLvyjV/'>Functions—Parameters—List</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You can remove an item by passing its index to the method:

```html {3}
<div v-for="(task, i) in tasks">
  <div>{{task}}</div>
  <button @click="tasks.splice(i, 1)">
    X
  </button>
</div>
```

If you move the instructions from `@click` event listener to a function (as it was done in the previous article), the prototype won’t work:

```html {3}
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

`i` is used inside the function, but, at this point, the function has no idea what `i` stands for. This function can be called from anywhere, and it can’t know where it was called from. <!-- **It just executes the instructions inside**.--> In the function’s definition, there's no indication of the value of `i`.

To address this issue the event listener must not only call a function but also provide the required values a function needs to work properly. This is called passing parameters to a function:

```html{3}
<div v-for="(task, i) in tasks">
  <div>{{task}}</div>
  <button @click="removeItem(i)">
    X
  </button>
</div>
```
```js{2,3}
methods: {
  removeItem (i) {
    this.tasks.splice(i, 1)
  }
}
```

- In the `@click` listener, you call a function and pass it the value of `i` by placing `i` inside parentheses.
- In the function’s definition in `methods` section, you specify a _name_ for the value a function is expected to receive, also inside parentheses.
- This _name_ is used in the `splice` method that is part of the function’s instructions so the method knows which item to delete.

### Naming parameters

When you are passing something to a function, you are not actually passing a variable, which has a name *and* a value. You are passing only a value. When you define the function `removeItem (i) {...}` in the methods section, you don't mean “expect `i` to be passed to this function”. In fact, you mean “expect **a value** and name it `i` so that it can be accessed by this name inside the function”.

This means that you can give any name to a parameter and use that name inside the function. The following code works the same as the code shown above:

```html{3}
<div v-for="(task, i) in tasks">
  <div>{{task}}</div>
  <button @click="removeItem(i)">
    X
  </button>
</div>
```
```js{2,3}
methods: {
  removeItem (index) {
    this.tasks.splice(index, 1)
  }
}
```

When the function is called, the value of `i` (not `i` itself) is passed into a function. The function gives the name `index` to this value. The name `index` is then used to pass the value to the `splice` method. 

This is an important feature even though its value is not obvious in this simple example. In complex prototypes a function may be called from multiple places, each one using different names to pass a value. The ability of functions to accept values that you can name as you wish makes them a truly universal tool. 

<!-- todo: write: functions are separated with commas -->

## Practice

To practice working with properties, add them to the prototypes you created that use an index in their instructions:

### Channels

<iframe height="379" style="width: 100%; margin-top: 16px;" scrolling="no" title="Functions—Parameters—Task: Channels" src="//codepen.io/andgordy/embed/NmaKmx/?height=379&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/NmaKmx/'>Functions—Parameters—Task: Channels</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork you result of [Navigation with counters](./../Objects/#navigation-with-counters) from the Objects article. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/ywWjdd?editors=1000).
2. Create the function `selectChannel`. 
3. Move the instructions from `@click` listener to the function. Don’t forget to add `this.` wherever you reference a variable from the `data` section.
4. Specify a value to be passed to the function. Call it `index` and use it in the `push` method.
5. Use the function in the `@click` listener by specifying the function’s name, followed by paretheses. Pass an index as a parameter.

### From list to list

<iframe height="413" style="width: 100%; margin-top: 16px;" scrolling="no" title="Functions—Parameters—Task: Lists" src="//codepen.io/andgordy/embed/JVrPxv/?height=413&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVrPxv/'>Functions—Parameters—Task: Lists</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the [From list to list](./../Lists-and-loops/arrays-methods.html#from-a-list-to-a-list) task from the Managing lists article. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/EMrRed?editors=1000).
2. Create 2 functions: `fromLeftToRight` and `fromRightToLeft`.
3. Move the instructions from `@click` listeners to the functions. Don’t forget to add `this.`
4. Specify the values in the functions. Call them `index` and use them in the `push` and `splice` methods.
5. Use the functions in the `@click` listeners by specifying the functions’ names, followed by parentheses. Pass an index as a parameter to each function.

### Notes app

<iframe height="564" style="width: 100%; margin-top: 16px;" scrolling="no" title="Functions—Parameters—Task: Notes" src="//codepen.io/andgordy/embed/VNMZOq/?height=564&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/VNMZOq/'>Functions—Parameters—Task: Notes</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the [Note-taking app](./../Lists-and-loops/arrays-methods.html#note-taking-app) task from the Managing lists article. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/ywwOPb?editors=1000).
2. Create two functions: `addNote` and `deleteNote`.
3. Move the instructions from `@click` listeners to the functions. Don’t forget to add `this.`
4. Specify a value to be passed to the `deleteNote` function. Call it `index` and use it in the `splice` method.
5. Use the functions in the `@click` listeners by specifying the functions’ names, followed by paretheses. Pass an index as a parameter to `deleteNote`.