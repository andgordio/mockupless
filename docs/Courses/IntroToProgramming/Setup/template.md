# Prototyping template

<!-- > TODO:
We are starting to work with vue.js and it requires a setup. -->

## 1. Start with HTML template

1. Create a new document in VSCode
2. Save it with **.html** extension
3. Start typing **html** and select `html:5` boilerplate

You will have the following code populated for you:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```
## 2. Import Vue.js into your code

Insert this line anywhere in your `<head>` container:

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## 3. Create app container

Create a new div container inside your `<body>` container:

```html
<div id="app">
  <!-- layout with content go here -->
</div>
```

## 4. Add script container

Add a container for your Vue code between the closing `</body>` and `</html>` tags:

```html
<script>
  var app = new Vue({
    el: '#app',
    data: {
      // variables go here
    },
    methods: {
      // functions go here
    }
  })
</script>
```

Don't worry if you don't understand what happens inside this script container. Chances are you will never trully know what it is, and it's perfectly fine.

## Final template

```html{8,11-13,15-25}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
  <div id="app">
    <!-- layout with content go here -->
  </div>
</body>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      // variables go here
    },
    methods: {
      // functions go here
    }
  })
</script>
</html>
```





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