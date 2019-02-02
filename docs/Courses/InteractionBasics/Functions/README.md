# Functions

In the Managing lists sections you’ve seen examples of having multiple instructions assigned to one event listener. You’ve also seen the same set of instruction may be set to different listeners:

(code: input with keypress.enter and button with click both having same items.push(); input = '' instructions)

So having containers for our content in layout in form divs and containers for our data in a form of variables, do you think we could wrap up interaction basics without getting to know containers for instructions as well?)

Meet functions: a powerful named container for your instructions that helps you avoid repeating same code many times and jam multiple instructions directly into event listeners.

First, you need to create a function you’ll can reference later:

```js
methods: {
  addItem () {
    this.items.push(this.input)
    this.input = ''
  }
}
```

There’s a lot to note here, so let’s deconstruct:

- in methods
- name, (), {}
- () are used for parameters, that’s next lesson
- body of the function, instructions inside the {}
- this to reference data and other functions. this tells you mean those variables and functions. This is required because you can create variables and functions inside the function with the same names. 

With this function in place, all you have to do is to reference it in your event listeners:

```js
@keypress.enter, @click="addItem()"
```

Exercise 1: ?

Exercise 2: ?
