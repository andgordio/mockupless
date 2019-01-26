# Lists

<!-- todo: a nice illustration with a list and a grid / maybe real-world examples, but probably no -->

Quite often you need to show repeating components in lists, grids, etc. They should have similar look and behaviour, but the content should be different. Let's take a simple list of contacts for example:

![hey](./media/lists-wireframes-1.png)

The most straight-forward way to prototype this is to create a container for every single item, add styles and populate each one of them with content. The donwside to this approach becomes obvious pretty fast: you need to write **a lot of repetative code** and every change to their layout has to be implemented for every container.

Vue provides an alternative way of rendering repeating items that allows to create item layout only once. To achieve this, you will have to do 2 things:

1. Store the content of your list as a special type of variable — **an array**.
2. Add **loop attribute** to a container to render it multiple times.

Let's go through these concepts one by one.

## Array

You are familiar with [primitive data types](./../Data/variables.md#variables): numbers, strings and booleans. An array is a variable used to store a list of values of any kind:

```js
data: {
  contacts: [null, 1, 'hello', true]
}
```

The content of an array is placed within square brackets and its items are separated by comas. Think of an array as a list of variables that don't have names.
<!-- todo: maybe say: Kinda, but will get to that in the next lesson. -->

Going back to the contacts list prototype, here's an array with contact names:

```js
data: {
  contacts: ['Adam', 'Annabelle', 'Bruce', 'Christine', 'Dambo']
}
```

With data stored properly, you are ready to create a repeating container.


## Loop

first, create a layout for one item:

```html
<div class="border-b border-grey py-4">
  Adam
</div>
```

Now you can repeat this layout for every item in an array. For this you need to add `v-for` attribute and use a value from an array as a content. <!--mention maybe that it's called loop? -->

```html
<div v-for="contact in contacts" class="border-b border-grey py-4">
  {{contact}}
</div>
```

The attribute can be read as “Repeat the container for each value in `contacts` array. For each repetition allow me to access the value by the name of `contact`”. `contact` is a temporary name you give to an item in an array when it's being rendered.

> maybe an animation of how rendering works (see notepad)

#### 👐 Hands-on

download the [sample file](./../../../course-files/interaction-basics/lists-contacts-1.html.zip), add new items to the list, see results.

![hey](./media/tobegif1.png)

## 👶 Self-practice: basic

Use template with one letter on the right (like iOS contacts app)
Create an array with all alphabet letters <!--todo: maybe suggest a good way to do this-->
Make the block repeat to show indexes

![hey](./media/lists-wireframes-2.png)

```js
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
```

[solution](./../../../course-files/interaction-basics/lists-contacts-2.html.zip)