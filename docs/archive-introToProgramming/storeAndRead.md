# Store and display data

## The task

Imagine you are designing an online store and you want to prototype the checkout experience. One of the essential UI elements you need is a shopping cart icon that indicates how many items a user currently has prepared for checkout:

![cart](./img/img-cart.png)

## Store

For you to display the number of items in cart, you need to save that number in your code. The containers you use to store data are called **variables**.

```js
itemsInCart: 2
```
* itemsInCart is variable's **name**. It's common to write a name in [camel case](https://en.wikipedia.org/wiki/Camel_case)
* 2 is its **value**. See [Simple data types](./variablesAndSimpleDataTypes.md) for information about what basic kinds of values there are
* variables are stored in `data: { }` section of vue code

## Display

Once the data is stored in a variable, you can display its value in your html:

```vue
<div>{{itemsInCart}}</div>
```
The two pairs of curly braces is your way to indicate that *itemsInCart* is a variable and you want its value placed in your html content.

## Task solution

```vue{16,25}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Goods Inc</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700" rel="stylesheet">
</head>
<body style="margin: 0; font-family: Rubik;">
  <div id="app">
    <div style="display: flex; padding: 12px 24px; border-bottom: 1px solid #CCC;">
      <div style="flex: 1;"></div>
      <div style="width: 40px; height: 40px; background-color: #2AC5C5; font-size: 18px; font-weight: semibold; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        <div>{{itemsInCart}}</div>
      </div>
    </div>
  </div>
</body>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      itemsInCart: 2
    },
    methods: {

    }
  })
</script>
</html>
```
[View on JSFiddle](https://jsfiddle.net/andgordy/Lm12gtv0)

## Self-practice

Design a card that welcomes a user. Store user's name as a variable and display it on the card:

![Welcome card](./img/img-self-store-and-display.png)

* the card looks weird and almost pointless now, but you'll add more content to it soon, and will start to make more sense then