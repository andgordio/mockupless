# Objects

Let's say you need a list, and not contacts that only have name, but chats, that have lot of stuff

> chats list UI

Each item on this list has: a, b, c, d. There's a special variable type to store this — Object

```js
data: {
  contact: {
    name: '',
    latestMessage: 'Lorem ipsum dolor sit.',
    unread: 0,
    isFavourite: true
  }
}
```

You can think of an object as a list of variables separated by commas and surrounded with curly braces.


:::tip 🤯 mind blown
take a closer look at `data` container you've been using to [store variables](./../Data/variables.md#variables) all this time. Notice anything? It's an object. But Vue treats it a little differently so you don't have to use dot notation to reference its values in your layout, so instead of `data.userName` you just write `userName`.
:::