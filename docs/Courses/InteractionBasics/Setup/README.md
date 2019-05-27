# Prototyping template

In Layout basics you learned how to use [CodePen](https://codepen.io), create new pens, and fork existing ones. In the [Tailwind](./../../LayoutBasics/Frameworks/) and [Ionicons](./../../LayoutBasics/Frameworks/ionicons.md) sections you learned to import libraries into your pens. However, creating a new pen, importing frameworks, and setting up the contents for every new prototype is not the most time-efficient workflow.

After prototyping for a while, you’ll be able to define your default set of tools and create **templates**—files that have a particular setup with little to no content. You can use templates to kick off new prototypes without having to set up everything from scratch. 

This course uses the [Mockupless Basic](https://codepen.io/andgordy/pen/OqQPNa) template, and we recommend that you also use it for the course. That way, you can be sure that your environment matches the one in the articles. 

## Fork and use

Open the [Mockupless Basic](https://codepen.io/andgordy/pen/OqQPNa) template and fork it:

![An arrow pointing to the Fork button in CodePens UI](./media/template-fork.png)

Now go to CodePen’s home page and locate the *from template* button under *Create Pen*. After you press it, you should see the *Mockupless Basic* option:

![An arrow pointing to the Fork button in CodePens UI](./media/template-create.png)

 Choose it and you’re done. A new pen will be created from the template.

## What’s inside

### Frameworks

Three libraries/frameworks are imported into the template:

- Tailwind and Ionicons are in CSS settings (click the gear icon on the left of the CSS section header).
- Vue.js is imported in JS settings (click the gear icon in the JS header).

### HTML

The HTML code includes a single container with `id="app"` and a couple of default classes:

```html
<div id="app" class="text-black antialiased">
  <!-- layout goes here -->
</div>
```

The `antialiased` class makes font rendering closer to what you are used to seeing in design tools, and `text-black` resets the default text color to Tailwind’s black, so your texts fit into the color palette better.

#### 🚨 Important 
Make sure you place all the contents of your prototypes inside this container. Everything you put outside will not be recognized by Vue.js and may produce errors.

### CSS

The CSS block resets some form controls styles. It removes glow from inputs that are in focus, sets the color of placeholders and changes the default design of dropdown controls.

### JS

The JS block has a Vue instance:

```js
var app = new Vue({
  el: '#app',
  data: {
    // variables go here
  },
  methods: {
    // functions go here
  }
})
```

Technical details, such as what the Vue instance is and exactly how it works, are irrelevant to the interaction basics covered in this course. What's really important is that the instance has two containers:

- `data` is used to store variables.
- `methods` is used to store functions.

Variables are covered in the next section. You will work with the `data` container throughout the course. Functions are briefly described near the end of the course, and you’ll get a chance to work with `methods` then.


## Customization

The Mockupless Basic template includes the just-enough setup. This doesn’t mean that your own template (if you decide to create one) has to be minimalistic too. You are free to include multiple custom fonts, icon and style libraries, and the JavaScript frameworks of your choice. When the time comes, you can create a template from scratch or use the Mockupless Basic template as a foundation.

To create your own template on CodePen, fork an existing pen or create a new one, go to the pen’s *Settings* (the button on the top right) and switch from *Regular Pen* to *Template* under the *Pen Details* tab. 





 





