# Managing lists

## Methods

The beauty of arrays is how powerful they are when you need to change them. They come with a toolset of operations you can perform on them, that are called **methods**. Two methods are explored in this article: **adding** an item to an array and **removing** one from it. These two are the ones you will find yourself using most often when prototyping, but there are many, many more, that allow you to sort, filter, map, etc.

## Adding to a list

You may have a default set of items in your prototype, but you may also allow users to add items themselves. Adding items to an array takes two steps:

1. Saving user's input.
2. Adding it to an array.

First steps requires one or more form controls [connected to variables](./../Data/display.md#text) with `v-model` attribute:
```html
<input v-model="newContact" placeholder="Enter new contact name...">
```
```js
data: {
  newContact: ''
}
```

Now you need to use an event listener, `@click` for example, to add this variable as a new item to an array. There's a special methods for adding to an array — `push`:

```html
<button @click="contacts.push(newContact)">
  Add
</button>
```

This instruction can be read as “take an array `contacts` and add the value of `newContact` to it”. A method is separated from an array with a dot, and followed by the parentheses with a value inside.

### Hands-on

<!-- todo: proto, download -->

##  Removing from a list

Taking an item from a list is another command you give to an array. The name of the method is `splice` and unlike `push` it takes two parameters, not one. With first parameter you specify at which index you want to start taking items out, and with the second one you tell how many items you want to remove. The latter parameter in our example is 1, because you need to remove one item at a time. And the starting index depends on which item a user wants to be deleted. Good thing you know from the [previous article](./indexes.md#index-in-v-for-attribute) that you can keep track of indexes in containers repeated with `v-for`:

```html
<div v-for="(contact, i) in contacts">
  <div>{{contact}}</div>
  <button @click="contacts.splice(i, 1)">Remove</button>
</div>
```

The value of `@click` can be read as “take `contacts` array and remove one item from it at the index the button was clicked”. Understanding this concept can be challenging at first, so let's review what's going on here in details:

- Let's say you have an array with three items `contacts: ['Adam', 'Annabelle', 'Bruce']`.
- You create a template container with `v-for` attribure that uses the array as its source. 
- You track not only the value of an item for each repeatition, but also its index with `(contact, i)`.

At this point you have 3 containers in your layout, each displays a value of an item from an array thanks to `{{contact}}` inside



- You create a template container with `v-for` attribure that uses the array to generate a copy of the container for each item on the array.
- You track not only the value of an item for each repeatition, but also its index with `(contact, i)`.
- You also add a button with click event listener that reacts to it with splice method to the array, using the index of an item the event was tracked upon

