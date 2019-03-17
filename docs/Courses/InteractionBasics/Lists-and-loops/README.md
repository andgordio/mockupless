# Lists

![hey](./media/il-lists.png)

A popular task you have as an interface designer is to lay out a collection of components arranged in a list or a grid. A contacts list and recent conversations, latest tweets and recommended videos, songs in a playlist and related articles—all consist of items that share look and behavior but have different content. This section is focused on the effecient ways to render lists with rich content and manage their items.

Let’s start with a fairly simple prototype with a list of contacts on the left and details of the selected one in the right:
<!-- comment: “start”? does it get more complicated? If not, “review” instead of “start” -->

<iframe height="600" style="width: 100%;" scrolling="no" title="Lists—Contacts—Complete" src="//codepen.io/andgordy/embed/moLrQx/?height=600&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/moLrQx/'>Lists—Contacts—Complete</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Selecting an item from a list and showing its content on the right is explored in the next article. For now let’s focus on rendering the list.

The most straight-forward way to lay it out is to create a container for every item:

```html
<div class="flex items-center hover:bg-gray-100">
  <div class="w-12 h-12 bg-gray-300 rounded-full ml-3"></div>
  <div class="flex-1 py-5 ml-4 border-b border-gray-300">
    Joe Cole
  </div>
</div>
<div class="flex items-center hover:bg-gray-100">
  <div class="w-12 h-12 bg-gray-300 rounded-full ml-3"></div>
  <div class="flex-1 py-5 ml-4 border-b border-gray-300">
    Michael B. Jordan
  </div>
</div>
<div class="flex items-center hover:bg-gray-100">
  <div class="w-12 h-12 bg-gray-300 rounded-full ml-3"></div>
  <div class="flex-1 py-5 ml-4 border-b border-gray-300">
    Linnea Berthelsen
  </div>
</div>
<div class="flex items-center hover:bg-gray-100">
  <div class="w-12 h-12 bg-gray-300 rounded-full ml-3"></div>
  <div class="flex-1 py-5 ml-4 border-b border-gray-300">
    Veronika Ngo
  </div>
</div>
<div class="flex items-center hover:bg-gray-100">
  <div class="w-12 h-12 bg-gray-300 rounded-full ml-3"></div>
  <div class="flex-1 py-5 ml-4 border-b border-gray-300">
    Zack Ward
  </div>
</div>
```

The downsides of having a lot of repetative code should be clear: copying and pasting containers is time-cosuming and makes your code bloated, any change to layout has to be applied to multiple containers, and making a layout with 100 items is plain unreasonable this way.

Luckily Vue provides an alternative way of rendering repeated items that allows to create item container only once. This is done in three steps:

1. You store the content of your list as a special type of variable — **an array**.
2. You create one container and duplicate it programmatically. It is called **template-container** in this course.
3. You add **v-for directive** to the container to render it for every element in the array.

Let’s start with the array.

## Array

You are already familiar with [primitive data types](./../Data/variables.md#data-types): numbers, strings and booleans. Array is the first non-primitive data type introduced in this course and it is used to store **a list of values of any kind**:

```js
data: {
  items: [null, 1, 'hello', true]
}
```

The content of an array is placed within square brackets and its items are separated by commas. Naming arrays follows the same [rules and recommendations](./../Data/variables.md#naming-variables) as other variables. An array can be empty with no content inside the brackets:

```js
data: {
  items: []
}
```

Think of an array as a list of variables that don't have names. An array is a perfect fit for items you have to display as a list in the UI. Here's an array for the contacts list prototype:

```js
data: {
  contacts:  ['Joe Cole', 'Michael B. Jordan', 'Linnea Berthelsen', 'Veronika Ngo', 'Zack Ward']
}
```

With contacts stored this way, you are ready to create a template-container with `v-for` directive.

## v-for

You start with a single container:

```html
<div class="flex items-center hover:bg-gray-100">
  <div class="w-12 h-12 bg-gray-300 rounded-full ml-3"></div>
  <div class="flex-1 py-5 ml-4 border-b border-gray-300">
    Joe Cole
  </div>
</div>
```

Next, instead of manually duplicating this container many times you can turn it into a template with `v-for` directive connected to an array:

```html
<div v-for="contact in contacts" class="flex items-center hover:bg-gray-100">
  <div class="w-12 h-12 bg-gray-300 rounded-full ml-3"></div>
  <div class="flex-1 py-5 ml-4 border-b border-gray-300">
    Joe Cole
  </div>
</div>
```

The directive can be read as “Render the container for each item in `contacts` array”. Let’s break down the syntax:

- As with all attributes and directives the content is wrapped into a pair of double quotation marks.
- `contacts` is the name of the array you want the directive to connect with.
- `contact` is a temporary name given to an item in the array<!-- when a container is being rendered for it-->. This is explored in more details next.
- `in` is part of the syntax that makes the code a little more readable.

Here’s a list that the template-container above generates:

<iframe height="600" style="width: 100%;" scrolling="no" title="Lists—Contacts—Loop without rendering" src="//codepen.io/andgordy/embed/qvoJzL/?height=600&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/qvoJzL/'>Lists—Contacts—Loop without rendering</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

There are 5 items in the list and this matches the number of items in the `contacts` array. However all items have the same content, `Joe Cole`, because you have hard-coded it into your template-container. To fix this you must make the content dynamic, that is to use values from the array as the content.

Let’s take another look at the contents of `v-for` directive:

```html
<div v-for="contact in contacts" class="flex items-center hover:bg-gray-100">
  <div class="w-12 h-12 bg-gray-300 rounded-full ml-3"></div>
  <div class="flex-1 py-5 ml-4 border-b border-gray-300">
    Joe Cole
  </div>
</div>
```

Again, `contacts` is the name of the array you connect the template to and `in` is part of the syntax. `contact` is a **temporary name** given to an item in the array when a container is being rendered for it. To understand why this name is temporary and how you can use it, you need to understand the process of a list being created from a template:

1. When `v-for` directive is detected by Vue.js the framework goes to the specified array and “picks” the first item if there is one.
2. While “holding” this item, Vue.js creates a container from the template.
3. When this container is being created with an item being “held” by Vue.js the name you specified in the `v-for` directive is assigned to this particular item. This name can be used to access the value of the item inside the template.
4. When the container is created, Vue.js picks the second item from the array and creates a container for it. Now the tempopary name is assigned to the the second item in the array.
5. The process of picking an item, assigning the name to it and rendering a container for it is repeated until the array runs out of items.

This means that you can use this name in the template to access each variable in the array, one at a time. If you need to render the value, you would do this the same way you render other variables—by placing the name inside the container wrapped in two pairs of curly braces:

```html
<div v-for="contact in contacts" class="flex items-center hover:bg-gray-100">
  <div class="w-12 h-12 bg-gray-300 rounded-full ml-3"></div>
  <div class="flex-1 py-5 ml-4 border-b border-gray-300">
    {{contact}}
  </div>
</div>
```

As a result, for each item in the array a container is created and populated with the item’s value:

<iframe height="600" style="width: 100%;" scrolling="no" title="Lists—Contacts—Loop with rendering" src="//codepen.io/andgordy/embed/PLRxwZ/?height=600&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/PLRxwZ/'>Lists—Contacts—Loop with rendering</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

:::tip Naming
`contact` is the name *you* choose. So instead of `contact in contacts` the directive's value can be `item in contacts`, for example. Then to render the value in the template you put <code v-pre>{{item}}</code> instead of <code v-pre>{{contact}}</code>.

However using a singular form of an array’s name, like `contact` for `contacts`, makes it easier to identify it when your code gets busy.
:::

## Practice

### Task 1: Grid

Create a 3-by-3 grid using a template-container with `v-for` directive:

<iframe height="796" style="width: 100%;" scrolling="no" title="Lists—Task: Car models grid" src="//codepen.io/andgordy/embed/ywjGEW/?height=796&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ywjGEW/'>Lists—Task: Car models grid</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create an array with nine items.
2. Create a flex container to hold the grid and don’t forget to [wrap content](./../../LayoutBasics/Flex/direction-and-wrap.html#flex-wrap).
3. Create a child template container with width set to 33% using Tailwind's class `w-1/3`.
4. Apply `v-for` directive to the template. Connect it with the array you created in step 1.
5. Render value from the array using temporary name inside the template. 

<!-- todo: either provide general instructions for using CodePen in intro section of the course, or add “if having problems...” to every task -->

### Task 2: Alphabet

Extend the prototype from the article with an alphabetical navigation:

<iframe height="700" style="width: 100%;" scrolling="no" title="Lists—Task: Contacts with alphabet" src="//codepen.io/andgordy/embed/GedzKG/?height=700&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GedzKG/'>Lists—Task: Contacts with alphabet</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the [final prototype](https://codepen.io/andgordy/pen/PLRxwZ) from the article.
2. Add another variable to data—an array of letters:
```js
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
```
3. Change the content area on the left from one column to two columns so the list of contacts and the alphabet can be layed out next to each other.
4. Create a template container for the list of letter, connect it to the array from step 2 and render values using the temporary name.