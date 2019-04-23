# Variables

Variable is a data container with a **name** and a **value**. Value is the content you want to store. Name is a key to accessing this content. Variables are stored in `data` container found in JS section of the [template](./../Setup/):

```js
data: {
  userName: 'Steve Allen',
  itemsInCart: 2,
  isUserLoggedIn: true
}
```
The syntax is fairly simple:
- The name and the value of a variable are separated by a colon and a space. 
- Variables are separated from each other with a coma and a line break.

## Naming variables

You are free to choose names for variables yourself, but there are a couple of rules to consider:

- A name can include letters, numbers and underscores.
- A name cannot start with a number.
- You cannot use one of the words [reserved](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) for JavaScript purposes as a name.

A good name is balanced between clarity and length, so a variable doesn’t take too much space in your code, yet it allows you to understand what to expect from its contents by looking at its name. Also, [camel case](https://en.wikipedia.org/wiki/Camel_case) is used for naming variables in this course, but you may adopt another style of your liking.

```js
data: {
  5door: true,          // Invalid name: starts with a number.
  new: 'girl',          // Invalid name: ‘new’ is a reserved word.
  new-items: 2,         // Invalid name: has a special symbol ‘-’.
  newItems: 0           // Good name: brief, clear and readable.
}
```

## Data types

There are different types of data that variables can store, and each type has unique abilities and behavior. This article covers a group of types called **primitive** which include strings, numbers, booleans and null.

### Strings

The string data type is basically a **text** value. It’s used to store names, states, emails, titles, even paragraphs. Strings are stored in single or double quotation marks.

```js
userName: 'Steve Allen',
currentScreen: 'Dashboard',
productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
usersReply: ''
```

Quotation marks with nothing in between is an empty string. It’s used, for example, for text inputs where text value is expected, but there shouldn’t be any value by default.

Single quotation marks are used for storing string values in this course. If you need to have a single quotation mark symbol *inside* your string, you have to add backslash in front of it:

```js
callToAction: 'Let\'s go'
```

Backslash is telling a browser that a quotation mark that follows doesn’t stand for the end of a string, but it is a part of the string’s content. Another good idea is to use proper [curly quotes](https://practicaltypography.com/straight-and-curly-quotes.html) and [apostrophe](https://practicaltypography.com/apostrophes.html) in your texts unless you need straight ones for a reason.


### Numbers

Numbers is a data type used for storing digital values:

```js
itemsInCart: 0,
pocketMoney: 3.5,
degreesOutside: -15
```

A number in JavaScript can be positive, negative or zero. It can also be either a whole number or a decimal.

Often you need numbers to store meaningful amounts: items, currencies, weights, etc. You expect to see values like `$5`, `-15°C` and `15 kg` in your UI, but you should **store only digital values in variables**, if you want the ability to perform math on these values. If you don’t need that ability, you should use a string instead:

```js
degreesOutside: -15,       // valid number
degreesOutside: '-15°C',   // valid string
degreesOutside: -15°C      // invalid value
```

Next article explains how to add symbols to numbers that store only digital values in your UI.


### Boolean

Some decisions in an interactive UI rely on a straight answer to a closed-ended question:

- Is a user logged in? If yes, show the home page. If no, show login page.
- Did a user agree to privacy policy? If no, disable the confirmation button.
- Did a user press Delete? If yes, show confirmation dialog.

There is a special data type for storing this kind of answers, and it’s called Boolean. It can only be either `true` or `false`:

```js
isUserLoggedIn: false,
doShowConfirmationDialog: true,
didAcceptAgreement: true
```

Even though boolean values look like proper English words they are written without quotation marks. This allows browsers to understand that they are not strings.

[Conditions](./../Conditionals/) section of the course goes into details of using boolean data type to show and hide containers, and apply conditional styles.

### null

Sometimes it’s useful to indicate that a variable doesn’t have any value at all. Usually you do it by defining the value as an empty string for texts or a zero for numbers. But there’s also a special data type `null` that serves the same purpose:

```js
userName: '',       // empty string
itemsInCart: 0,     // zero
listOfGuests: null  // null
```

Just like boolean values, `null` is a reserved word, so it is written without quotation marks. On the surface, the difference between an empty string and `null`, or `0` and `null` is almost non-existent, and `null` is not used in this course at all. However, when you see `null` in someone else’s code, or start learning Functions in details, treat `null` as absence of value and consider [learning more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null#Description) about its behavior.