# Connecting to forms

As mentioned previously, data is commonly used to save information that users enter. Vue.js provides a special attribute `v-model` that allows to connect variables to basic form controls: text inputs, checkboxes, radio buttons and dropdowns. 

::: tip Important
`v-model` establishes a **two-way connection**. This means that changes made to a control are immediately applied to a variable and vice versa: when a value of a variable changes, the value in a form control changes too. 
:::

## Text

If you want to save user’s text input you need to place `v-model` attribute inside `input` or `textarea` tags and specify the name of the variable that should store the input:

```html
<div id="app">
  <input v-model="title" placeholder="Enter title..."> 
  <textarea v-model="description" placeholder="Enter description..."></textarea>
</div>
```
```js
data: {
  title: '',
  description: ''
}
```

Everything a user enters into these controls will be stored in variables `title` and `description`. You can even render these values (as seen in previous article) next to the form to see the effect:

<iframe height="372" style="width: 100%;" scrolling="no" title="Data—Forms—Text" src="//codepen.io/andgordy/embed/pBPdaq/?height=372&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/pBPdaq/'>Data—Forms—Text</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Note that placeholder is a *stylistic* attribute, which means that its value is not connected to a variable.

<!-- todo: ! In variables article: say that names are case sensitive -->


## Checkbox

Value of a checkbox control is binary—it’s either on or off—so it makes sense to connect it to a variable with a Boolean value.

```html
<input type="checkbox" v-model="didAgreeToPolicy" id="policy">
<label for="policy">I agree with Privacy Policy</label>
```
```js
data: {
  didAgreeToPolicy: false
}
```

As a result clicking on a checkbox input toggles the variable’s value between `true` and `false`:

<iframe height="300" style="width: 100%;" scrolling="no" title="Data—Forms—Checkbox" src="//codepen.io/andgordy/embed/OGmOov/?height=300&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/OGmOov/'>Data—Forms—Checkbox</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Dropdown / Select

To connect a dropdown to a variable you need to add `v-model` to the `select` tag:

```html
<select v-model="plan">
  <option>Free</option>
  <option>Pro</option>
  <option>Business</option>
</select>
```
```js
data: {
  plan: 'Free'
}
```

The value inside the selected `option` container will be then stored inside the variable:

<iframe height="322" style="width: 100%;" scrolling="no" title="Data—Forms—Select" src="//codepen.io/andgordy/embed/rbmpWe/?height=322&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/rbmpWe/'>Data—Forms—Select</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you want values stored in a variable to be different from texts inside `option` containers, you need to specify `value` attributes too:

```html
<select v-model="country">
  <option value="ca">Canada</option>
  <option value="mx">Mexico</option>
  <option value="us">United States</option>
</select>
```

Either `ca`, `mx` or `us` will be stored in a variable `country` when an option is selected, not `Canada`, `Mexico` and `United States`:

<iframe height="374" style="width: 100%;" scrolling="no" title="Data—Forms—Select: Countries" src="//codepen.io/andgordy/embed/vMZVwB/?height=374&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/vMZVwB/'>Data—Forms—Select: Countries</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

 This is particularly useful when you want to have long descriptive lables in the UI and short neat values in your data.

## Radio buttons

To connect a group of radio buttons to a variable you need to add `v-model` to selected radio buttons and specify the same variable in all of them:

```html
<div>
  <input type="radio" v-model="emailsDaily" value="One" id="one">
  <label for="one">Just one</label>
</div>
<div>
  <input type="radio" v-model="emailsDaily" value="Two" id="two">
  <label for="two">Twice a day</label>
</div>
<div>
  <input type="radio" v-model="emailsDaily" value="Three" id="three">
  <label for="three">All three</label>
</div>
```
```js
data: {
  emailsDaily: 'One'
}
```

Unlike in dropdowns the `value` attribute is mandatory for radio buttons. It carries the value that will be assigned to a variable when the radio button is clicked:

<iframe height="309" style="width: 100%;" scrolling="no" title="Data—Forms—Radio" src="//codepen.io/andgordy/embed/mgmpQv/?height=309&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/mgmpQv/'>Data—Forms—Radio</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In Layout basics [you’ve learnt](./../../LayoutBasics/Core/form.md#radio-button) that you have to assign `name` attribute to tie radio buttons into a group. Connecting a radio button to a single variable with `v-model` eliminates that need, because now its state is defined by the value of the variable, not other controls with the same `name`. 

<!-- todo: Maybe a link to how to bind values if number is required, not string — common bug -->

## Practice

### Profile information

Display information a user inputs:

<iframe height="484" style="width: 100%;" scrolling="no" title="Data—Forms—Task: Profile" src="//codepen.io/andgordy/embed/QPgOGa/?height=484&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/QPgOGa/'>Data—Forms—Task: Profile</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork the starting [prototype](https://codepen.io/andgordy/pen/gyRXom?editors=1000).
2. Create three variables: `name`, `email`, `photo` — with or without default values.
3. Connect the 3 input fields in the left column to the variables.
4. In the right column, [render](./display.md#text) the values of `name` and `email` as texts. Use the value of `photo` to [render an image](./display.md#images).

### Checkout form

Connect form controls to variables:

<iframe height="707" style="width: 100%;" scrolling="no" title="Data—Forms—Task: Checkout" src="//codepen.io/andgordy/embed/mgwKRg/?height=707&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/mgwKRg/'>Data—Forms—Task: Checkout</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create a new prototype from the [template](./../Setup/).
2. Create 5 variables, one for each control in the form.
3. Create a two-column layout.
4. In the left column, design a form with different input controls: text, dropdown, radio and checkbox. Connect them to the variables.
5. In the right column, render the values of the variables.