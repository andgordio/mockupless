# Selecting from a list

Let's extend the prototype from the previous article with the ability to select a contact and see its name in the details view:

<iframe height="600" style="width: 100%;" scrolling="no" title="Lists—Contacts—Complete" src="//codepen.io/andgordy/embed/moLrQx/?height=600&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/moLrQx/'>Lists—Contacts—Complete</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The solution should be fairly simple: you need a variable to store the name of the selected item and display the value of this variable in details view. The question is how does one store a reference to the selected item if items in the arrays don't have names, they are just values separated by commas:

<!-- 🤔 maybe a different paragraph above: more straight to the point of accessing items in the array -->

```js
data: {
  contacts:  ['Joe Cole', 'Michael B. Jordan', 'Linnea Berthelsen', 'Veronika Ngo', 'Zack Ward']
}
```

For the lack of names, items in the array have something even more convenient—indexes.

## Indexes

Even though we can't see it with a naked eye, every item in the array has a serial number called **index**. Indexing **starts with zero**. You can think of the first item in the array as a variable `0: 'Adam'`, the second item `1: 'Annabelle'` and so on.

<!-- This shifted ordering where third item has an index of 2 may confuse at first, but later you will learn that having first item indexed as zero makes sense and provides you with some neat capabilities. -->

To access one of the array's items in layout you need to put square brackets with its index next to the name of the array:

<iframe height="235" style="width: 100%;" scrolling="no" title="Lists—Accessing by index" src="//codepen.io/andgordy/embed/drayPY/?height=235&theme-id=36403&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/drayPY/'>Lists—Accessing by index</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This reads as “show the value of item at index 0 in `contacts` array”.

## Variable as index

According to the task you need to display the value of the **selected** item, so the index cannot be hard-coded. Instead, you create a variable of type number to store the index:

```js
data: {
  contacts: ['Joe Cole', 'Michael B. Jordan', 'Linnea Berthelsen', 'Veronika Ngo', 'Zack Ward'],
  selectedContact: 0
}
```

Now in layout you can use this variable to access an item in the array:

<iframe height="223" style="width: 100%;" scrolling="no" title="Lists—Accessing by variable index" src="//codepen.io/andgordy/embed/VRgwea/?height=223&theme-id=36403&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/VRgwea/'>Lists—Accessing by variable index</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The syntax and the idea is the same as in previous example: “show me the value from an array at a particular index”, but instead of a specific number you use a variable. This allows you to change the displayed item by changing the value of the variable.

## Index in v-for attribute

The last question you need to answer to solve the case is “how do you store the value of a selected item?” Thankfully `v-for` provides you with all the necessary tools.

In [previous article](./#v-for) you've learnt that when creating a loop, you create a temporary name that you use to **access the value** of an item in an array. Similarly, you can define second name to **access the index** of the item:

<iframe height="269" style="width: 100%;" scrolling="no" title="Lists—Rendering with a value and an index" src="//codepen.io/andgordy/embed/NJMQQo/?height=269&theme-id=36403&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/NJMQQo/'>Lists—Rendering with a value and an index</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

:::tip Naming
As with a [name for the value of an item’s](./#v-for), you can use any name to access its index. For example, `v-for="(contact, index) in contacts"` works the same. Basically, whatever you place after the comma will be considered a temporary name for the item’s index. Don’t forget [rules and recommendations](./../Data/variables.md#naming-variables) for naming variables.
:::

## Click

Here’s what you achieved so far:

- A container is created for each item in the array `contacts` from a template-container with `v-for` directive.
- Values and indexes of the array's items are accessed through temporary names `contact` and `i`.
- An item from an array is accessed and rendered by an index that is stored in a variable `selectedContact`.

The last step is to add an event listener that assigns the index of the clicked container to the variable `selectedContact`:

```html
<div v-for="(contact, index) in contacts" @click="selectedContact = index">
  {{contact}}
</div>
```

When the item is clicked its index is assigned to `selectedContact` variable. And in details view on the right this variable is used as an index to render an item from the array:

```html
<div>
  {{contacts[selectedContact]}}
</div>
```

As a result, when an item is selected from a list it’s value is shown on the right:

<iframe height="600" style="width: 100%;" scrolling="no" title="Lists—Contacts—Complete" src="//codepen.io/andgordy/embed/moLrQx/?height=600&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/moLrQx/'>Lists—Contacts—Complete</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<!-- todo: summary -->

## Practice

### Color grid

Create a 3x3 grid with a different background color for a selected item:

<iframe height="674" style="width: 100%;" scrolling="no" title="Lists—Task: Coloring boxes" src="//codepen.io/andgordy/embed/GeBdEj/?height=674&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GeBdEj/'>Lists—Task: Coloring boxes</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create an array with 9 items and a variable to store the selected item's index.
2. Create a grid using flex and a child template-container with `v-for` directive.
3. Make sure you track both: value and index for each item in the loop.
4. Attach click event listener to the template-container to save the index of the selected item.
5. Add a conditional class attribute to template-container that applies `bg-teal-500 text-teal-100` when an index of an item is equal to the index of the selected item.

<!-- todo: task 2: ? -->