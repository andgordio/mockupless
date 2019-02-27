# Variables

A variable is a data container with a name and a value. Value is the actual content you wish to store, and the name is a key to accessing this content.

```js
data: {
  userName: 'Steve Allen',
  itemsInCart: 2,
  isUserLoggedIn: true
}
```
- It's common to write variables' names in [camel case](https://en.wikipedia.org/wiki/Camel_case).
- Variables are stored in `data: { }` section of vue code.
- Variables should be separated with a coma and a line break.

## Primitive data types

All data can be separated into two groups of primitive and complex data. Simple data is as simple as the name suggests, and its types are described below. Complex data types are basically collections of simple data types and are described later in the course (Arrays and Objects to name a few).

### Numbers

```js
itemsInCart: 2,
pocketMoney: 3.5,
degreesOutside: -15
```
- Can be positive, negative or zero.
- Can be an integer or decimal.
- Do not include any symbols like % and $ in value even if a percent or currency.

### Strings

String is a name for text in programming world.

```js
firstLetter: '',
userName: 'Sam Smith',
productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius eum enim ab doloremque quaerat quibusdam. Dolorum sint dolores rerum!'
```
- Put in single quotation marks.
- When you need to have single quotation marks inside your string, you have to add backslash before every one of them. For example: `'I\'m going to Spain!'`. When used after backslash, the single quotation mark doesn't indicate end of the string, but an apostrophe instead.

### Boolean

It is very common to save states when prototyping UI, and quite often the state is either of two: *on* or *off*. Did a user log in? Should you show a dialog box? An appropriate way to store this type of data is in a form of a boolean varibale that can have only one of two values. Later, you will learn how booleans play a crucial role when defining conditions. 

```js
isUserLoggedIn: false,
doShowConfirmationDialog: true
```
- Can be only **true** or **false**
- Written without quotation marks

### null

Sometimes it's useful to indicate that a variable doesn't have any value (yet). If you store a list of items a user has added to the shopping cart, for example, you need a way to indicate that there is nothing in it initially.

```js
listOfItems: null
```
- Written without quotation marks
- Do not confuse with zero `0` which is a number and is used for counting, and not an indication of absence of value

## Self-practice

- Create new proto from a template
- Add a couple of variables to `data`
- Open in Chrome, dev tools, and find them there
- Edit in dev tools !!!!

<!--## Sample case
Imagine you are designing an online store and you want to prototype the checkout experience. One of the essential UI elements you need is a shopping cart icon that indicates how many items a user currently has prepared for checkout:

![cart](./img/img-cart.png)

For this UI to display correct number of items in cart and react to user's actions you need to:
1. **Store** the number in your code
2. **Display** the number in your UI
3. **Track** user's actions to initiate the change
4. **Change** the number depending on user's actions -->

<!-- ## Variables

Variable is a container with value and a name. You define the name yourself and use it then to access the value. -->

<!-- This section covers the very of programming: data — what you do with it and what types there are.
* programming is reading and writing data essentially.
* to read and write you need to store it somewhere
* data is stored as a container with a name and a value
* with the name you read the value, and with name you change it  -->