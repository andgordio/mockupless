# Arithmetics

![operators](./images/functions-arithmetics.png)

learn basic operations

:::tip Tip
When reading this article for the first time, quickly scan through the content and go to the [Events](./events.md) article — it allows you to try out the knowledge from this chapter, and practice is the king.
:::

## Assign

Rmember how you define variables? You put them in `data` section with the name, colon and the default value:

```js
data: {
  itemsInCart: 2
}
```
At some point you will want to change this value by assigning another one.
You will use functions to change the values later to react to users' actions. You do it with equal sign

<!-- ```js
methods: {
  setToTwo () {
    this.itemsInCart = 2
  }
}
```
- you'll learn what's happening here soon.   -->
```js
itemsInCart = 2
```


## Add, subtract, multiply and devide

It's very common to perform basic math operations on the variable

```js
sum = 2 + 2     // 4
diff = 10 - 3   // 7
mult = 14 * 5   // 70
div = 21 / 7    // 3
```

not only numbers, but other variables

```js
data: {
  one: 1,
  two: null
}
```
```js
two = one + 2   //  3
```

group with ~~parenthasis~~

## Changing the existing value

More often you would need not to just assign a sum of two numbers to a variable, but to change the existing value of a variable. For this you'd need to assign the va...

Take a look at this example below. First, we 

```js
data: {
  itemsInCart: 0
}
``` 
```js
itemsInCart = itemsInCart + 1
```


<!--

NOTE: Maybe not here, maybe there's a PRO section for += -= *= /=, ++ --, ternary

REMEMBER: There's a strong argument for not using shorthand operators: learning curve and not being able to collaborate with juniors

## Add 1 and subtract by 1

There are tow special operators for task that you'll need to perform way more often than you could expect before you started programming — adding 1 to the existing value of the variable.

You can do it using `+` operator, but the whole expression can be shortened to `++`. So these two are the same:

```js
itemsInCart = itemsInCart + 1
itemsInCart++
```

Subtracting goes the same way:

```js
itemsInCart = itemsInCart - 1
itemsInCart--
``` -->