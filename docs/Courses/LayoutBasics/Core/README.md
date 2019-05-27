# Intro to HTML

HTML is a markup language that allows you to create the core structure of a prototype. You can think of HTML code as a collection of containers that are filled with content. A container is usually a pair of tags—the opening one and the closing one—with content in between:

```html
<div>Hello</div>
```

A tag is a keyword wrapped in angle brackets. Closing tags also have a forward slash in front of the keyword.

Some HTML elements don’t have a closing tag and don’t have content. For example, the text input:

```html
<input type="text" placeholder="Enter your name...">
```

An opening tag is also used to store attributes, like `type` and `placeholder` in the example above. Attributes extend the functionality of an HTML element and control its behavior. You will learn more about attributes throughout this course.

## div

`div` is the most popular HTML container in Mockupless prototyping. By default, it doesn’t add any styles to content, except for one: it creates a line break. This means that two or more `div` containers cannot share horizontal space, even if there’s enough room for them:

```html
<div>Should developers learn to code?</div>
<div>May 20</div>
<div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quaerat rem nesciunt alias! Ab harum distinctio repellat natus eum illum!
</div>
```

<iframe height="222" style="width: 100%;" scrolling="no" title="Core—Containers" src="//codepen.io/andgordy/embed/gJOgvb/?height=222&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/gJOgvb/'>Core—Containers</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Later in this course, you will learn to override the default behavior of the `div` container with CSS.

## span

`span` is another popular element, and it doesn’t have any visible styles at all. It is often used to apply styles to a portion of the content:

```html
<div>
  It’s <span style="font-weight: bold;">Steve Allen’s</span> birthday today!
</div>
```

<iframe height="170" style="width: 100%;" scrolling="no" title="Core—Containers, span" src="//codepen.io/andgordy/embed/KLNjOQ/?height=170&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/KLNjOQ/'>Core—Containers, span</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In the example above, the `span` container is used to wrap some content and apply a different font weight to it using CSS. The CSS is introduced in the next section of the course.

## Commenting

When prototyping, you have an option to hide part of your code from preview by commenting it:

```html
<!-- This will not appear in the preview -->
```

To create a comment you have to wrap code in a combination of angle brackets, dashes and an exclamation mark, as shown above. Alternatively, you can select the piece of code you want to comment and use the shortcut: `cmd`+`/` on macOS, `ctrl` + `/` on Windows.

Here are some good reasons to comment your code:

- To leave notes that help to understand your code better, or to leave tasks for other designers or future self:

```html
<div>Good morning!</div> <!-- todo: don't forget to personalize this later -->
```

- To temporary hide containers from preview, when you don’t feel like deleting them. For example, when you are trying a different layout or an alternative version of content:

```html
<div>
  Good morning, Steve!
</div>
<!-- <div>
  Your exercise goal for today is 30 minutes.
</div> -->
<div>
  Exercise for 30 minutes or more today to reach your daily goal.
</div>
```

- To visually separate your code into sections. This helps you navigate the code easier:

```html
<!-- HEADER -->
<div>
  <div>Delete file?</div>
  <button>Info</button>
</div>
<!-- CARD -->
<div>
  <div>Are your sure you want to delete <span style="font-weight: bold;">mockups.sketch</span> file? This cannot be undone.</div>
</div>
<!-- FOOTER -->
<div>
  <button>Cancel</button>
  <button>Delete</button>
</div>
```

## HTML elements

There are over a hundred of HTML elements like `div` and `span`. Most of them can be separated into two categories:

- **Purely semantic** elements, that don’t add any styles to your content, but they carry some meaning that helps search engines, screen readers and other programs to understand your content better. To name a few: `article`, `aside`, `details`, `header`, `footer`, `nav`, `section`, etc.
- **Presentational** elements, that carry semantics, but also add styles to the content. For example, elements `h1`, `h2`, `h3`, `h4`, `h5` and `h6` stand for different levels of headings and apply some text styles by default. Another popular presentational element is `p` that is used to identify paragraphs.

While semantic and presentational elements are essential for web development, they are almost never used in Mockupless prototyping for a couple of reasons:

- **Speed** is crucial for prototyping. Creating and maintaining a semantic structure of a prototype takes time without providing a significant value, unless you want to test your prototype with screen readers or publish it online and make it appealing to search engines.
- Prototyping presumes **constant change**. What is a header now can become a sidebar an hour later after quick tests. You don’t want to worry about your tags preserving proper semantics every time you make a change to your layout.

You are free to use semantic and presentational tags in your prototypes, but we recommend using `div` and `span` instead. We believe this can save you time and energy that you can spend on creative tasks and testing.

You can find the full list of elements on the [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) page on Mozilla Developer Network.

## Practice

Create a pen with three containers, that are filled with the content of your choice:

<iframe height="160" style="width: 100%;" scrolling="no" title="Core—Task" src="//codepen.io/andgordy/embed/yWXZPx/?height=159&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/yWXZPx/'>Core—Task</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new pen on CodePen.
2. Go to HTML section. Type `div` without angle brackets and press *tab* on the keyboard. The code editor should transform the `div` into a pair of tags:

```html
<div></div>
```

3. Enter some content in the container. Feel free to use text from the example above.

4. Create three more containers, either by using the shortcut from step 2, or by manually typing the opening and closing tags. Fill the containers with content.

5. When you are done, click the *Edit on CodePen* in the top right of the example above to view its code and compare it to yours.