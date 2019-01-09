# Objects

Let's say you need a list, and not contacts that only have name, but chats, that have lot of stuff

![hey](./media/chats-wireframes-1.png)

Each item on this list has: a, b, c, d. There's a special variable type to store this — Object

```js
data: {
  contact: {
    firstName: 'Steve',
    lastName: 'Allen',
    latestMessage: 'Lorem ipsum dolor sit.',
    unread: 0,
    avatar: 'http://image.com'
  }
}
```

You can think of an object as a list of variables separated by commas and surrounded with curly braces.

:::warning to do
show array of objects, implement first name, last name and message
:::

## Conditions

`v-if="object.key"`

:::warning to do
implement unread indicator
:::

## Conditional style

`:class="{'text-bold': object.key}"`

:::warning to do
implement names and message conditional classes
:::

## Image and background

`:src` with object.key instead of `src`

`:style` with 'url(' + object.key + ')' — but this stuff may be just a little too confusing at this point

:::warning to do
implement avatar
:::

## Maybe also

:::tip 🤯 mind blown
take a closer look at `data` container you've been using to [store variables](./../Data/variables.md#variables) all this time. Notice anything? It's an object. But Vue treats it a little differently so you don't have to use dot notation to reference its values in your layout, so instead of `data.userName` you just write `userName`.
:::