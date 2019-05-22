# Intro to CSS

CSS is a styling language. With CSS, you define how the content of a prototype is positioned and how it looks. If HTML is like the Layers panel in Figma or Sketch, then CSS is like the Inspector that allows you to set width, height, fill, text styles and effects for the selected layer.

The easiest way to apply CSS to a container is by using the `style` attribute:

```html
<div style="font-size: 32px">
  Large title
</div>
<div>
  Regular text
</div>
```

Being an attribute, `style` is placed inside an opening tag. It is followed by an equal sign and a pair of double quotes. Each style inside this attribute is a **property** (`font-size`) and a **value** (`32px`) separated by a colon.

When a style is applied, its effect should be immediately visible in the Preview on CodePen:

<iframe height="234" style="width: 100%;" scrolling="no" title="Style—Intro to CSS—Single style" src="//codepen.io/andgordy/embed/ZNzwPL/?height=234&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ZNzwPL/'>Style—Intro to CSS—Single style</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You can apply multiple styles to a container separating them with semicolons:

```html
<div style="font-size: 32px; font-weight: bold;">
  Large and bold title
</div>
<div>
  Regular text
</div>
```

The code above specifies the size and the weight of the font in the first container:

<iframe height="227" style="width: 100%;" scrolling="no" title="Style—Intro to CSS—Multiple styles" src="//codepen.io/andgordy/embed/rgBPbw/?height=227&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/rgBPbw/'>Style—Intro to CSS—Multiple styles</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Classes

Adding `style` attribute to a container is called **inline** styling. There’s a number of other ways to apply CSS, and using **classes** is probably the most popular approach. `class` is an attribute that you populate with class names separated by spaces:

```html
<div class="header">
  Text with class “header”
</div>
<div class="paragraph intro">
  Text with two classes 
</div>
<div class="paragraph">
  Text with one class
</div>
```

To make this code work, you need to go to the CSS section of your prototype and define styles for the classes you used:

```css
.header {
  font-size: 32px;
  font-weight: bold;
}

.paragraph {
  font-size: 18px;
}

.intro {
  color: #aaa;
}
```

A dot in front of the name tells a browser that this is a class. Styles in CSS are enclosed in curly braces and are separated with semicolons and line breaks.

When you apply classes to containers in HTML and define styles for those classes in CSS, you should be able to see the styles applied to the containers in the Preview:

<iframe height="261" style="width: 100%;" scrolling="no" title="Style—Intro to CSS—Class" src="//codepen.io/andgordy/embed/MdgLdJ/?height=261&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/MdgLdJ/'>Style—Intro to CSS—Class</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

It is common to name classes using lowercase letters and connecting words with hyphens:

```html
<div class="paragraph intro-hero inner-content"></div>
```

### Tags

In CSS, you can define styles not only for classes, but for tags too. For example, you can apply a text color to a `button` tag:

```css
button {
  color: #1E90FF;
}
```

The code above will affect the appearance of all `button` tags in your prototype:

<iframe height="176" style="width: 100%;" scrolling="no" title="Style—Intro to CSS—Tag" src="//codepen.io/andgordy/embed/BeBMgB/?height=176&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/BeBMgB/'>Style—Intro to CSS—Tag</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Multiple selectors

Another option you have when styling your containers is to define a single set of styles for multiple selectors:

```css
input, textarea, select {
  border-color: #87CEFA;
}
```

This piece of CSS changes the border color for all inputs, text areas and dropdown controls:

<iframe height="348" style="width: 100%;" scrolling="no" title="Style—Intro to CSS—Multiple selectors" src="//codepen.io/andgordy/embed/aroXeq/?height=348&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/aroXeq/'>Style—Intro to CSS—Multiple selectors</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Commenting

You can hide parts of your CSS code from preview similarly to the way you hide HTML code. Commenting CSS serves the same purposes as it does in the HTML section:

- To hide the code you don’t want to be applied, but don’t want to delete it either.
- To visually separate your code into sections.
- To leave comments for yourself and other designers.

The syntax is different from the one you use in HTML though. To comment code you enclose it in a pair of forward slashes and asterisks:

```css
/* .something {
  background-color: #eee
} */

/* General styles section */

button {
  border-color: red;  /* replace with a nicer red later */
}
```

The keyboard shortcut is the same as in HTML too: `⌘`+`/` (`ctrl`+`/` on Windows).

## Choosing the styling approach

We recommend to use a mix of inline and tag styling during this course. Classes are highly reusable and make the HTML code cleaner, but creating a system of well-designed classes takes a lot of time and effort. Also, flexibility is an important part of the prototyping process: you need to be able to pivot quickly, try different layouts, and create freely—all without spending too much time on maintaining a system to incorporate the changes.  

Eventually, you *will* switch to classes, but you will not have to create them. In the Frameworks and libraries section of this course you are introduced to [Tailwind](./../Frameworks/tailwind.md), a CSS framework that provides you with a collection of classes that come as a natural upgrade from inline styling. They rovide a similar level of convenience, but with less code and many presets. 

## Practice

Add some styles to the prototype from the Nesting article:

<iframe height="392" style="width: 100%;" scrolling="no" title="Style—Intro to CSS—Task" src="//codepen.io/andgordy/embed/GavYzr/?height=392&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GavYzr/'>Style—Intro to CSS—Task</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the task in the [Nesting article](./../Core/nesting.md#practice). You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/yWXZwZ).
2. Add the `style` attribute with `padding-bottom: 24px` to the three main parent containers. This should add vertical spacing between items on the list.
3. Add `style` with `font-weight: bold` and `font-size: 18px` to the containers with the user names.
4. Add `style` with `font-size: 13px` to the containers with time stamps.
5. Go to CSS section add specify `font-family: sans-serif` for the `div` tag. This should apply a sans-serif font to all elements on the page.

Don’t hesitate to look at the code of the prototype above if you encounter problems with the task. All styles from this task will be explored in more detail in the articles that follow.