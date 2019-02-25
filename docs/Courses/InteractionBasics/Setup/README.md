# Prototyping template

You are going to create prototypes as standalone HTML files throughout the course. Creating an empty file, importing required frameworks and setting up the contents for every new prototype is neither fun nor time-efficient. After prototyping for a while, you’ll be able to define your default set of tools and create a **template**—a file without content but with a particular setup—and start new projects with it instead of an empty file.

Before you create your own template, feel free to use the one below. It was used to create all examples in the course, and has everything you need to practice what you learn:

<a href="./../../../course-files/interaction-basics/template.html.zip" class="ghost-button">Download the template</a>

## What's inside

The prototyping template is based on HTML5 template that VSCode creates for you with `html:5` shortcut:
<!-- todo: link: to Layout basics article explaining -->

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

Next, Vue.js is added to the `head` container together with [Tailwind](./../../LayoutBasics/Tailwind/whats.md) and Ionicons:
<!-- todo: link: to a Layout basics section about ionicons  -->

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
<link href="https://unpkg.com/ionicons/dist/css/ionicons.min.css" rel="stylesheet">
```

With vue.js imported in your template there are two other pieces you need to setup for the framework to function properly. First piece is a container with `id="app"` attribute inside `body` container:

```html
<body>
  <div id="app">
    <!-- layout with content goes here -->
  </div>
</body>
```

This tells Vue.js where to look for Vue.js-related code in your layout. 

::: tip Important
Make sure you place all contents of your prototypes inside this container. Everything you put outside will not be recognized by Vue.js and may produce errors. 
:::

The second part of Vue.js setup is the `script` container:

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

`script` container is placed between `</body>` and `</html>` closing tags in this template.

Also, don't be confused by the syntax and contents of this code. It looks complex, but you will use it to simply store some of your code in `data` and `methods` containers. Everything else is there for Vue.js to work, and it does its job flawlessly without us understanding how it functions.

## Customization

The template above includes the just-enough setup, but it doesn’t mean your own template has to be basic too when you decide to create one. You are free to include multiple custom fonts, icon and style libraries and JavaScript frameworks of your choice. When the time comes you can start creating a template tailor-fit for your needs from scratch or use the template from this course as a foundation.