# Parameters

Back to the tasks prototype. You’ve already moved instructions to add an item to a function. Yet deleting an item from a list is still in your layout:

```js
click="deleteItem(i)"

deleteItem (index) {
  this.items.splice(i, 1)
}
```

Even though it‘s just one instruction and it is not repeated anywhere else, it’s still a good practice to put all instructions in functions: cleaner layout, scalable