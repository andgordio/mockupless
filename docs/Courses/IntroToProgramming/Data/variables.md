# Variables and simple data types

## Storing data

![illustration of variables](./images/data-storing.png)

There are mainly three reasons to store data:
1. Make some content dynamic — one that may change when interacting with UI. Think numbers that increase, lists that get populated with new items, button labels that change from Save to Loading, etc
2. Save data inputed by a user.
3. Keep track of states to show the appropriate parts of UI. Is user logged in? Ok, show dashboard. Which tab is currently selected, Profile? Ok, show the html code for Profile then and hide the others. Did turned wi-fi on? Ok, show available networks. 

## Variables

Data is stored in variables. A variable is a container with a name and a value. Value is the actual content you wish to store, and the name is a key to accessing this content.

```js
data () {
  userName: 'Steve Allen',
  itemsInCart: 2,
  isUserLoggedIn: true
}
```
* It's common to write names in [camel case](https://en.wikipedia.org/wiki/Camel_case)
* Variables are stored in `data: { }` section of vue code
* Variables should be separated with a coma and a new line

## Simple data types

All data can be separated into two groups of simple and complex data. Simple data is as simple as the name suggests, and its types are described below. Complex data types are basically collections of simple data types (Arrays and Objects) and are described later in the course.

### Numbers

```js
itemsInCart: 2,
pocketMoney: 3.5,
degreesOutside: -15
```
- Can be positive, negative or zero
- Can be an integer or neceloye chislo
- Do not include any symbols

### Strings
::: warning todo
write an intro about strings
:::
```js
firstLetter: '',
userName: 'Sam Smith',
productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius eum enim ab doloremque quaerat quibusdam. Dolorum sint dolores rerum!'
```
- put in single quotation marks
- when you need to have single quotation marks inside your string, you have to add backslash before every one of them. For example: `I\'m`

### Boolean
::: warning todo
write an intro about boolean
:::
```js
isUserLoggedIn: false
doShowConfirmationDialog: true
```
- can be only **true** or **false**
- written without quotation marks

### null
::: warning todo
write an intro about null
:::
```js
listOfItems: null
```
- means emptiness, the absence of value