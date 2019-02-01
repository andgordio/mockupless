# Managing lists

## Adding to a list

```html
<input v-model="newItemInput">
<button @click="contacts.push(newItemInput)">
  Add item
</button>
```

##  Removing from a list

```html
<div v-for="(item, i) in items">
  <div>{{item}}</div>
  <button @click="items.splice(i, 1)">remove</button>
</div>
```

<!-- ## Length 🤔 -->