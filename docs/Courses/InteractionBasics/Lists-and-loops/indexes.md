# Selecting from a list

Let's extend the prototype from the previous article with the ability to select a contact and see its name in the details view:

<video width="100%" controls loop autoplay muted>
<source src="./media/selecting-from-list.mp4" type="video/mp4">
</video>

The solution should be fairly simple — you need a variable to store the name of the selected item and display the value of this variable in details view. The question is how does one store the selected item if items in the arrays don't have names, they are just values separated by commas:

```js
data: {
  contacts: ['Adam', 'Annabelle', 'Bruce', 'Christine', 'Dambo']
}
```

For the lack of names, items in the array have something even more convenient — indexes.

## Indexes

Even though we can't see it with a naked eye, every item in the array has a serial number called **index**. Indexing **starts with zero**. You can think of the first item in the array as a variable `0: 'Adam'`, the second item `1: 'Annabelle'` and so on. This shifted ordering where third item has an index of 2 may confuse at first, but later you will learn that having first item indexed as zero makes sense and provides you with some neat capabilities.

In the layout, to access one of the array's items you need to put square brackets with its index next to the name of the array:

```vue
<div>
  {{contacts[0]}}
</div>
```

This reads as “show the value of `contacts` array's item at index 0”. This container will display `Adam` from the array shown above.

## Variable as index

The task we defined in the beginning of the article suggests that we display value not of a particular item, but of any item that becomes selected. To achieve that, you need to make the index a variable first:

```js
data: {
  contacts: ['Adam', 'Annabelle', 'Bruce', 'Christine', 'Dambo'],
  selectedContact: 0
}
```

Now in the layout you can use the name of this variable instead of defining a static index:

```vue
<div>
  {{contacts[selectedContact]}}
</div>
```

The syntax and the idea is the same: “show me the value from an array at a particular index”, but instead of a particular number you put a variable, value of which can be changed when interacting with a prototype.

## Index in v-for attribute

The last question you need to answer to solve the case is “how do you store the value of a selected item?” Thankfully `v-for` provides you with all the necessary tools.

It [previous article](./lists.md#loop) you've learnt that when creating a loop, you create a temporary name that you use to access the value of an item in an array. Similarly, you can define second name to access the index of the item:

```vue
<div v-for="(contact, index) in contacts">
  {{contact}} at index {{index}}
</div>
```

![hey](./media/indexes-wireframes-1.png)

As with a name for an item's value, you can put any name to access the index — for example, `v-for="(contact, i) in contacts"` works the same. Note that when you cannot access index with accessing the value, because index is always accessed through the second name. Also, note that when you define two names, you separate them with commma and put them in parentheses.

### Click

Now that a container is created for each item in the array, and access to the items' values and indexes is provided, you can now add click event listener, that will assign the index of the clicked container to `selectedContact`:

```vue
<div v-for="(contact, index) in contacts" @click="selectedContact = index">
  {{contact}}
</div>
```

The task is complete since this part of code will now show the value of the selected item:

```vue
<div>
  {{contacts[selectedContact]}}
</div>
```


#### 👐 Hands-on

<video width="100%" controls autoplay muted style="margin: 24px 0;">
  <source src="./media/selecting-from-list-2.mp4" type="video/mp4">
</video>

- Download the [prototype](./../../../course-files/interaction-basics/lists-contacts-3.html.zip)
- Preview it in Chrome, click on items on the left and see values change on the right
- Open it in VSCode and study the code.
- Locate `contacts` array, add another name or two, remove one. Preview results in the browser.
- Study the conditional class attribute attached to the item. Can you tell how its value applies the style only to the selected item?

## Self-practice

### Task 1: Color grid

Create a 3x3 grid with a different background color for a selected item:

<video width="100%" loop controls autoplay muted style="margin: 12px 0;">
  <source src="./media/color-grid.mp4" type="video/mp4">
</video>

1. Create an array with 9 items and variable to store the selected item's index.
2. Create a grid with flex and a template-container with `v-for` attribute.
3. Make sure you track both: value and index for each item in the loop.
4. Attach click event listener to the template-container to save the index of the clicked item.
5. Add a conditional class attribute to template-container that applies `bg-pink` when the selected item's attribute is equeal to the item's index.

If you have any problems completing the task, dowload and review the [solution](./../../../course-files/interaction-basics/color-grid.html.zip)

<!-- todo: task 2: ? -->