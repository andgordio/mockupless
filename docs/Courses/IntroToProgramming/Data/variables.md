# Variables and data types

## Storing data

For you to display the number of items in cart, you need to save that number in your code. The containers you use to store data are called **variables**.

```js
data () {
  userName: 'Steve Allen',
  itemsInCart: 2
}
```
* itemsInCart is variable's **name**. It's common to write a name in [camel case](https://en.wikipedia.org/wiki/Camel_case)
* 2 is its **value**.
* variables are stored in `data: { }` section of vue code
* coma and a new line to separate

## Data types

### Numbers

```js
itemsInCart: 2
pocketMoney: 3.5
degreesOutside: -15
```
- Can be [almost](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Properties) any positive number, negative or 0

### Strings

```js
firstLetter: ''
userName: 'Sam Smith'
productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius eum enim ab doloremque quaerat quibusdam. Dolorum sint dolores rerum!'
```
- put in single quotation marks
- can by empty, just quotation marks without content: `''`
- when you need to have single quotation marks inside your string, you have to add backslash before every one of them. For example: `I\'m`

### Boolean

```js
isUserLoggedIn: false
doShowConfirmationDialog: true
```
- can be only **true** or **false**
- written without quotation marks

### null

```js
listOfItems: null
```
- means emptiness, the absence of value