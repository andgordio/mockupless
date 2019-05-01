# Variables

A variable is a data container with a **name** and a **value**. The value is the content you want to store. The name is a key to accessing this content. Variables are stored in the `data` container, which is in the JS section of the [template](./../Setup/):

```js
data: {
  userName: 'Steve Allen',
  itemsInCart: 2,
  isUserLoggedIn: true
}
```
The syntax is fairly simple:
- The name and the value of a variable are separated by a colon and a space. 
- Variables are separated from each other by a comma and a line break.

## Naming variables

You are free to choose names for variables yourself, but there are a couple rules to consider:

- A name can include letters, numbers, and underscores.
- A name cannot start with a number.
- You cannot use one of the words [reserved](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) for JavaScript purposes as a name.

A good name is a balance between clarity and length so that a variable doesn’t take up too much space in your code yet allows you to understand what to expect from its contents. Also, [camel case](https://en.wikipedia.org/wiki/Camel_case) is used to name variables in this course, but you may adopt another style if you like.

```js
data: {
  5door: true,          // Invalid name: starts with a number.
  new: 'girl',          // Invalid name: ‘new’ is a reserved word.
  new-items: 2,         // Invalid name: has a special symbol ‘-’.
  newItems: 0           // Good name: brief, clear and readable.
}
```

## Data types

There are different types of data that variables can store, and each type has unique abilities and behavior. This article covers a group of types called **primitives**, which include strings, numbers, booleans and null.

### Strings

The string data type is basically a **text** value. It’s used to store names, states, emails, titles, even paragraphs. String values are enclosed in single or double quotation marks.

```js
userName: 'Steve Allen',
currentScreen: 'Dashboard',
productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
usersReply: ''
```

Quotation marks with nothing in between them represent an empty string. It’s used, for example, for inputs that take a text value without providing a default text value.

Single quotation marks are used for string values in this course. If a single quotation mark is part of your string, you have to add a backslash in front of the character:

```js
callToAction: 'Let\'s go'
```

The backslash tells browsers that the symbol that follows doesn’t mark the end of a string and that it is a part of the string’s content. One good idea is to use proper [curly quotes](https://practicaltypography.com/straight-and-curly-quotes.html) and [apostrophes](https://practicaltypography.com/apostrophes.html) in your text unless you really need straight marks.


### Numbers

A number is a data type used for storing numeric values:

```js
itemsInCart: 0,
pocketMoney: 3.5,
degreesOutside: -15
```

A number in JavaScript can be positive, negative, or zero. It can also be a whole number or a decimal.

Often, you need numbers to store meaningful amounts: items, currencies, weights, etc. Users expect to see values like `$5`, `-15°C`, and `15 kg` in the UI, but you should **store only numeric values in variables of type number** if you want to perform mathematical operations on these values. If you don’t need to do that, you should use a string instead:

```js
degreesOutside: -15,       // valid number
degreesOutside: '-15°C',   // valid string
degreesOutside: -15°C      // invalid value
```

The next article explains how to add symbols to numbers that store only numeric values in your UI.


### Boolean

Some decisions in an interactive UI rely on a straightforward answer to a yes-no question:

- Is a user logged in? If yes, show the home page. If no, show the login page.
- Did a user agree to the privacy policy? If no, disable the confirmation button.
- Did a user press *Delete*? If yes, show confirmation dialog.

There is a special data type for storing these kinds of answers, and it’s called a boolean. It’s value can be either `true` or `false`:

```js
isUserLoggedIn: false,
doShowConfirmationDialog: true,
didAcceptAgreement: true
```

Even though boolean values look like proper English words they are written without quotation marks. This allows browsers to understand that they are not strings.

The [Conditions](./../Conditionals/) section of the course goes into the details of using the boolean data type to show and hide containers and to apply conditional styles.

### null

Sometimes it’s useful to indicate that a variable doesn’t have any value at all. Usually you do it by defining the variable as an empty string (for text) or zero (for numbers). But there’s also a special data type, `null`, that serves the same purpose:

```js
userName: '',       // empty string
itemsInCart: 0,     // zero
listOfGuests: null  // null
```

Just like boolean values, `null` is a reserved word, so it is written without quotation marks. On the surface, the difference between an empty string and `null` or between `0` and `null` is almost non-existent, and `null` is not used in this course at all. However, when you see `null` in someone else’s code or start learning about functions in detail, treat `null` as an absence of value and consider [learning more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null#Description) about its behavior.