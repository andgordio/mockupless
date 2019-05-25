# Form Controls

This article provides an overview of the basic form controls: text inputs, checkboxes, dropdown menus, buttons and other elements that allow for the basic user interactions in HTML. All controls have default styles that can be changed using CSS which is explored in the next section of this course. The [Interaction basics](./../../InteractionBasics/) course explores how you can use form controls to save user input using JavaScript and Vue.js.

## Button

There’s a special tag for buttons in HTML:

```html
<button>Cancel</button>
<button>OK</button>
```

<iframe height="200" style="width: 100%;" scrolling="no" title="Core—Form—Button" src="//codepen.io/andgordy/embed/JqjEaw/?height=200&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JqjEaw/'>Core—Form—Button</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The default look of the `button` element is different on different operating systems and in different browsers, but usually it has a border and responds to clicks by changing a background color.

## Text input

The `input` tag with `type="text"` attribute allows users to enter text in a single-line box:

```html
<input type="text" placeholder="Enter your name here...">
```

<iframe height="200" style="width: 100%;" scrolling="no" title="Core—Form—text input" src="//codepen.io/andgordy/embed/QRWdZv/?height=200&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/QRWdZv/'>Core—Form—text input</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Note that the `input` element does not have a closing tag.

`placeholder` is an optional attribute that specifies what text must be shown when the input is empty.

There are other types of input—like `email` and `password`—that work similarly to `text` and provide additional features:

- `email` enables email-friendly keyboard on mobile devices.
- `password` hides user input behind black circles.

```html
<input type="email" placeholder="Enter email...">
<input type="password" placeholder="Enter password...">
```

<iframe height="200" style="width: 100%;" scrolling="no" title="Core—Form—email and password input" src="//codepen.io/andgordy/embed/mYdRQy/?height=200&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/mYdRQy/'>Core—Form—email and password input</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To create a **multi-line** text input field, you need to use the `textarea` element:

```html
<textarea placeholder="Enter description..."></textarea>
```

<iframe height="277" style="width: 100%;" scrolling="no" title="Core—Form—textarea" src="//codepen.io/andgordy/embed/rgNjQK/?height=277&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/rgNjQK/'>Core—Form—textarea</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Unlike `input`, the `textarea` element has a closing tag. 

## Checkbox

To add a checkbox control to a prototype, you need the `input` tag with the `type="checkbox"` attribute and the `label` container:

```html
<input type="checkbox">
<label>Use font smoothing when available</label>
```

<iframe height="210" style="width: 100%;" scrolling="no" title="Core—Form—checkbox" src="//codepen.io/andgordy/embed/NVWdep/?height=210&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/NVWdep/'>Core—Form—checkbox</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

`label` is optional, and you can put the text in a `span` or a `div` instead. But `label` comes with a special attribute, `for`, that allows to make the text clickable too. Here’s how it works:

```html
<div>
  <input type="checkbox" id="smoothing">
  <label for="smoothing">I agree with Privacy Policy</label>
</div>
```

- You add the `id` attribute to the `input` tag with a value of your choice.
- You add the `for` attribute to the `label` tag with the same value.

When the label is clicked, the browser looks for an input with the `id` that matches the value in the `for` attribute, and if it finds one, it acts like the checkbox was clicked:

<iframe height="210" style="width: 100%;" scrolling="no" title="Core—Form—checkbox, clickable" src="//codepen.io/andgordy/embed/joVZdq/?height=210&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/joVZdq/'>Core—Form—checkbox, clickable</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The syntax is a little complex, but implementing this feature is usually a necessary step. Most users expect the text to be clickable, because it is clickable in most applications. Also, text has a larger area than a checkbox control, which makes it an easier target.

You can also add the `checked` attribute to the input tag if you want the control to be checked by default:

```html
<div>
  <input type="checkbox" id="smoothing" checked>
  <label for="smoothing">I agree with Privacy Policy</label>
</div>
```

<iframe height="210" style="width: 100%;" scrolling="no" title="Core—Form—checkbox, clickable, checked" src="//codepen.io/andgordy/embed/MdbVJE/?height=210&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/MdbVJE/'>Core—Form—checkbox, clickable, checked</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The `checked` attribute doesn’t require a value, so it doesn’t have an equal sign and parentheses.

## Radio buttons

The implementation of radio buttons is similar to checkbox controls, with the `type` attribute set to `radio`:

```html
<div>
  <input type="radio" name="options" id="a" checked>
  <label for="a">Option A<label>
</div>
<div>
  <input type="radio" name="options" id="b">
  <label for="b">Option B<label>
</div>
<div>
  <input type="radio" name="options" id="c">
  <label for="c">Option C<label>
</div>
```

<iframe height="200" style="width: 100%;" scrolling="no" title="Core—Form—radio" src="//codepen.io/andgordy/embed/YbzNBK/?height=200&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/YbzNBK/'>Core—Form—radio</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Radio buttons require the `name` attribute. The radio buttons with the same value in the `name` attribute are tied in a group, which allows only one of them to be selected at a time.

One of the radio buttons can be selected by default with the `checked` attribute.

You can make labels clickable with pairs of the `id` and the `for` attributes, as described the *Checkboxes* section above.

## **Dropdown**

To create a dropdown menu, you need the `select` element populated with `option` elements:

```html
<select>
  <option>Free</option>
  <option>Pro</option>
  <option>Enterprise</option>
</select>
```

<iframe height="207" style="width: 100%;" scrolling="no" title="Core—Form—select" src="//codepen.io/andgordy/embed/eaYgxr/?height=207&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eaYgxr/'>Core—Form—select</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The `option` element has some optional attributes:

- `selected` makes the option selected by default.
- `disabled` doesn't allow a user to select an option from the list.

These attributes allow you to create a control that has a placeholder value—one that is shown by default, but cannot be selected by a user:

```html
<select>
  <option selected disabled>Select an option...</option>
  <option>Free</option>
  <option>Pro</option>
  <option>Enterprise</option>
</select>
```

<iframe height="229" style="width: 100%;" scrolling="no" title="Core—Form—select, selected disabled" src="//codepen.io/andgordy/embed/xNRjaV/?height=229&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/xNRjaV/'>Core—Form—select, selected disabled</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

:::tip Tip
Don’t forget that you can click *Rerun* in the bottom right of the embedded CodePen UI to restart the prototype.
:::

## Practice

Design a form:

<iframe height="446" style="width: 100%;" scrolling="no" title="Core—Form—Task" src="//codepen.io/andgordy/embed/arwMLB/?height=446&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/arwMLB/'>Core—Form—Task</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new pen, and use this article as a reference to add form controls to the prototype.
2. Wrap controls in `div` containers to create line breaks.
3. Instead of manually typing in tags, like `<textarea></textarea>`, enter the name of the tag, like `textarea` and press *tab* on the keyboard. Sometimes this shortcut will add attributes that were not covered in this article. Feel free to either ignore those attributes, or delete them, or find information about them online and try using them.