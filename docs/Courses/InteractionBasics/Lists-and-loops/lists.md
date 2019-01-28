# Lists

![hey](./media/lists-diagram-1.png)
<!-- todo: a nice illustration with a list and a grid / maybe real-world examples, but probably no -->

Quite often you need to show repeating components in lists, grids, etc. They should have similar look and behaviour, but the content is probably different. In this chapter you will learn how to generate lists and grids from one item only. As you may have guessed, it's a huge timesaver. 

Let's start with a simple list of contacts:

![hey](./media/lists-wireframes-1.png)

The most straight-forward way to prototype this is to create a container for every single item with identical styles and populate each one of them with content:

```vue
<div class="border-b border-grey-lighter py-4 ml-2">
  Adam
</div>
<div class="border-b border-grey-lighter py-4 ml-2">
  Annabelle
</div>
<div class="border-b border-grey-lighter py-4 ml-2">
  Bruce
</div>
<div class="border-b border-grey-lighter py-4 ml-2">
  Christine
</div>
<!-- many similar containers more here -->
```

The donwside of this approach is pretty obvious — you need to write **a lot of repetative code** and every change of style has to be applied to multiple containers.

Vue provides an alternative way of rendering repeating items that allows to create item layout only once. To achieve this, you will have to do 2 things:

1. Store the content of your list as a special type of variable — **an array**.
2. Add **loop attribute** to a container to render it multiple times.

Let's go through these concepts one by one.

## Array

You are already familiar with [primitive data types](./../Data/variables.md#variables): numbers, strings and booleans. Array is the first non-primitive data type introduced in this course, and it is used to store **a list of values of any kind**:

```js
data: {
  contacts: [null, 1, 'hello', true]
}
```

The content of an array is placed within square brackets and its items are separated by commas. Think of an array as a list of variables that don't have names.
<!-- todo: maybe say: Kinda, but will get to that in the next lesson. -->

An array is a perfect fit for items you have to display as a list in the UI:

```js
data: {
  contacts: ['Adam', 'Annabelle', 'Bruce', 'Christine', 'Dambo']
}
```

With contacts stored in a variable, you are ready to create a repeating container. This where a loop comes into play.


## Loop

First, you create a container for a single item on the list:

```html
<div class="border-b border-grey py-4">
  Adam
</div>
```

Now, instead of manually copying this code many times in your layout, you add `v-for` attribute to the container to create a loop:

```html
<div v-for="item in contacts" class="border-b border-grey py-4">
  Adam
</div>
```

The attribute can be read as “Render the container for each item in `contacts` array”. This basically turns the container into a **template**, which is used to generate so many actual containers as many items the array has.

Here's what you'll see in a browser for the code above: 

![hey](./media/lists-wireframes-2.png)

You see that the container is shown 5 times, and that's exactly the number of items in the `contacts` array. However all items have the same content — the name you've put inside the container — and this is not the result you expect. This can be fixed easily with another feature `v-for` comes packed with.

As mentioned earlier `v-for="item in contacts"` stands for "render a container for each item in `contacts` array". What's also important is that `item` is a **temporary name** you give to a variable at the time when a container for it is rendered. This means 2 things:
1. You can use almost any word instead of `item`. For example, `v-for="contact in contacts"` works absolutely the same.
2. More importantly, you can use this name in your template-container. This way when, for example, a first copy a of the container is rendered the name is assigned to the value of the first item in the array. The same is repeated for the second item, the third, and every item the array has. Take a look at how this looks in practice:

```vue
<div v-for="item in contacts" class="border-b border-grey py-4">
  {{item}}
</div>
```

So each item in the array is used to render a copy of the container, and its value is used to populate the copy with content:

![hey](./media/lists-wireframes-1.png)

<!-- todo: continue from here -->


<!-- `v-for` creates a loop, and 3 amazing things happen when you add it:
- You reference `contacts` array so the loop renders a copy of the container for every item in the array.
- You define a temporary name `contact` for a variable in the array. As mentioned above, a copy is created for every variable in the array, and the name gives you access to the variable when its copy is being rendered.
- You use the temporary name inside a container to render the value of the variable that was used to create the  -->

<!-- The attribute can be read as “Repeat the container for each value in `contacts` array. For each repetition allow me to access the value by the name of `contact`”. `contact` is a temporary name you give to an item in an array when it's being rendered. -->

<!-- todo: maybe an animation of how rendering works (see notepad) -->

#### 👐 Hands-on

download the [sample file](./../../../course-files/interaction-basics/lists-contacts-1.html.zip), add new items to the list, see results.

![hey](./media/tobegif1.png)

## 👶 Self-practice

### Basic

Use template with one letter on the right (like iOS contacts app)
Create an array with all alphabet letters <!--todo: maybe suggest a good way to do this-->
Make the block repeat to show indexes

<!-- ![hey](./media/lists-wireframes-2.png) -->

```js
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
```

[solution](./../../../course-files/interaction-basics/lists-contacts-2.html.zip)


### Pro

Design a grid