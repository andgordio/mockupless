# HTML template

You don't have to start with an empty document every time you create a new prototype. It is a common practice to define your initial setup and create a template that includes everything you need to start prototyping.

Here's a basic template we recommend using during the course:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Prototype</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
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

You may copy the code into your newly created `.html` file or just [download](./../../../course-files/interaction-basics/template.html.zip) the template.

## What's in it

At its core the template has a basic HTML5 template VSCode creates for you with `html:5` shortcut:

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

Next, two core frameworks are imported into the template by adding two lines of code into the `head` container:

```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

- [Tailwind](./../../LayoutBasics/Tailwind/whats.md) for creating layouts rapidly.
- [Vue](./../README.md) to enable simple and powerful interactivity.
<!-- todo: need a better link to explain what is vue and why it's used -->

Now Vue also requires some setup to work properly. First, you create a container with `id="app"` inside `body`:

```html
<div id="app">
  <!-- layout with content goes here -->
</div>
```

This tells Vue to look for Vue code inside this container, so all your layout code for a prototype should be placed inside this container.

Second, you need a special container to store your Vue data and functions:

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

It can placed between closing `</body>` and `</html>` tags. Don't worry if you don't understand what happens inside this `script` container. Chances are you will never trully know what it is, and it's perfectly fine. During this course you will be filling up `data` and `methods` containers with your code.

<!-- ## Customization
Once you progress with prototyping you'll create your own template on top of this one: Add fonts, frameworks, UI Kits -->
<!-- todo: write this part of the article -->