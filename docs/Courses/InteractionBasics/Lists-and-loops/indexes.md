# Selecting from a list

Let's extend the prototype from the previous article so that users have the ability to select a contact and see its name in the details view on the right:

<iframe height="600" style="width: 100%;" scrolling="no" title="Lists—Contacts—Complete" src="//codepen.io/andgordy/embed/moLrQx/?height=600&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/moLrQx/'>Lists—Contacts—Complete</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The solution should be fairly simple: you need a variable to store the name of the selected item, and you need to display the value of this variable in the details view. The question is: how do you store a reference to the selected item if the items in the arrays don’t have names (they are just values separated by commas)?

<!-- todo: maybe a different paragraph above: more straight to the point of accessing items in the array -->

```js
data: {
  contacts:  ['Joe Cole', 'Michael B. Jordan', 'Linnea Berthelsen', 'Veronika Ngo', 'Zack Ward']
}
```

Although they lack names, the items in the array have something even more convenient—indexes.

## Indexes

Even though we can’t see it, every item in the array has a serial number called an **index**. Indexing **starts with zero**. You can think of the first item in the array as the variable `0: 'Adam'`, the second item `1: 'Annabelle'`, and so on.

To access one of the array's items in the layout, you need to put square brackets that contain the index next to the array’s name:

```html
<div>
  <div>{{contacts[0]}}</div>
</div>
```

This means “show the value of the item at index 0 in the `contacts` array”. The value of this item is rendered as follows:

<iframe height="235" style="width: 100%;" scrolling="no" title="Lists—Accessing by index" src="//codepen.io/andgordy/embed/drayPY/?height=235&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/drayPY/'>Lists—Accessing by index</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Variable as index

According to the task, you need to display the value of the **selected** item, so the index cannot be hard-coded. Instead, you should create a variable of type number to store the index:

```js
data: {
  contacts: ['Joe Cole', 'Michael B. Jordan', 'Linnea Berthelsen', 'Veronika Ngo', 'Zack Ward'],
  selectedContact: 0
}
```

Now you can use this variable in the layout to access an item in the array:

```html
<div>
  <div>{{contacts[selectedContact]}}</div>
</div>
```

<iframe height="223" style="width: 100%;" scrolling="no" title="Lists—Accessing by variable index" src="//codepen.io/andgordy/embed/VRgwea/?height=223&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/VRgwea/'>Lists—Accessing by variable index</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The syntax and the meaning are the same as they were in the previous example: “show me the value at a particular index in the array”. However, you use a variable instead of a specific number. The variable allows you to change the displayed item by changing the value of the variable.

## Index in the v-for attribute

The last question you need to answer to solve the case is: how do you store the value of a selected item? Fortunately, `v-for` provides you with all the necessary tools.

In the [previous article](./#v-for), you learned that you create a temporary name to **access the value** of an item in an array when you are creating a template container. Similarly, you can define a second name to **access the index** of the item:

```html
<div v-for="(contact, i) in contacts">
  {{contact}} at index {{i}}
</div>
```

The value of the `v-for` attribute now has two names in parentheses, separated by comma. Both the value and the index of each item are displayed:

<iframe height="269" style="width: 100%;" scrolling="no" title="Lists—Rendering with a value and an index" src="//codepen.io/andgordy/embed/NJMQQo/?height=269&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/NJMQQo/'>Lists—Rendering with a value and an index</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

:::tip Naming
As with naming the [value of an item](./#v-for), you can use any name to access an item’s index. For example, `v-for="(contact, index) in contacts"` works too. Basically, whatever you place after the comma will be considered a temporary name for the item’s index. Don’t forget about the [rules and recommendations](./../Data/variables.md#naming-variables) for naming variables.
:::

## Click

Here’s what you’ve achieved so far:

- Created a container for each item in the `contacts` array from a template-container with the `v-for` attribute.
- Allowed values and indexes of the array’s items to be accessed through the temporary names `contact` and `i`.
- Enabled an item from the array to be accessed by an index that is stored in the variable `selectedContact`. <!--It is displayed on the right.-->

The last step is to add an event listener that assigns the index of the clicked container to the variable `selectedContact`:

```html {1}
<div v-for="(contact, index) in contacts" @click="selectedContact = index">
  {{contact}}
</div>
```

When an item is clicked, its index is assigned to `selectedContact`, and this variable is used as an index to render an item from the array in details view on the right:

```html
<div>
  {{contacts[selectedContact]}}
</div>
```

As a result, when an item is selected from a list, its value is shown on the right:

<iframe height="600" style="width: 100%;" scrolling="no" title="Lists—Contacts—Complete" src="//codepen.io/andgordy/embed/moLrQx/?height=600&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/moLrQx/'>Lists—Contacts—Complete</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Practice

### Color grid

Create a three-by-three grid with a special background color for a selected item:

<iframe height="674" style="width: 100%;" scrolling="no" title="Lists—Task: Coloring boxes" src="//codepen.io/andgordy/embed/GeBdEj/?height=674&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GeBdEj/'>Lists—Task: Coloring boxes</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create an array with 9 items and a variable to store the index of the selected item.
2. Create a grid using flex and a child template-container with the `v-for` attribute.
3. Make sure that you track both the value and the index of each item in the loop.
4. Attach a click event listener to the template-container to save the index of the selected item.
5. Add to the template-container a conditional class attribute that applies `bg-teal-500 text-teal-100` when an index of an item is equal to the index of the selected item.

<!-- todo: task 2: ? -->