# Arithmetics

![operators](./media/functions-arithmetics.png)

:::tip Tip
When reading this article for the first time, scan through the content quickly and proceed to the [next](./click.md) article — there you will find first applications of arithmetics. Come back to this article later to recap, especially when working on self-practice [tasks](./practice.md).
:::

## Assign

As you may recall from the [Data](./../Data/variables.md) chapter, in order to define variables you need to put them inside data container with a name, a default value and a colon in between:

```js
data: {
  itemsInCart: 0
}
```

To change the default value — usually as a response to users' actions — you need to **assign** a different value to the variable. The syntax is similar, but you need to use equal sign instead of a colon:

```js
itemsInCart = 2
```

<!-- todo: explain why the expression above lacks context -->
<!-- - You will also use this sytax to create variables inside functions, but that comes later. -->


## Add, subtract, multiply and devide

Even though prototyping doesn't involve a lot of math, it's hard to imagine working with code without having to add or multiple a couple of things here and there. In JavaScript all basic operators are availble to you, and they should be easy to remember if you did your homework in school:

```js
sum = 2 + 2     // 4
diff = 10 - 3   // 7
mult = 14 * 5   // 70
div = 21 / 7    // 3
```

### Groupping

As in real life (pen-and-paper style) you should use parentheses to define the order in which operations will be performed:

```js
sumOne = 2 + 2 * 3     //  8, because multiplication happens before addition be default
sumTwo = (2 + 2) * 3   //  12, because now addition happens first
```

### Strings

Addition also works for combining strings. This is called **concatenation**:

```js
fullName = 'Steve' + ' ' + 'Allen'   // 'Steve Allen'
```

If you add a number or a boolean to a string, they will be concatenated:

```js
weirdSum = 2 + false + 'vegetarians' // '2falsevegetarians'
```

### Using existing values

Often you'll need to use values of other variables when doing your math:

```js
data: {
  numberOne: 1,
  numberTwo: 2,
  sum: null
}
```
```js
sum = numberOne + numberTwo  // 3
```

Even more often, you'll need to use the existing value of a variable for your math. The way you increase, for example, the value of a variable by 1 may look weird the first time you see it:

```js
sum = sum + 1  // 4
```

It should make more sense when you know the order in which the operations are performed. The key here is that **assignment always happens last**. Here's what happens in the example above:
1. `sum + 1` — the existing value of the varible `sum` is added to `1`. The result of this operation is `4`.
2. `sum = 4` - the result of addition performed on the previous step is assigned to the variable `sum`.

Operations like this may look confusing for quite some time. Just remember to read assignment last and you'll get used to it.


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