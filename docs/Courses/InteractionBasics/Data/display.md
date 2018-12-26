# Connecting data

## Displaying in containers

![illustration of data connection](./images/data-connecting.png)

Once the data is stored in a variable, you can display its value in your layout:

<!-- todo: add screenshot of the UI to connect with the result  -->
```html
<div>{{itemsInCart}}</div>
```
```js
data () {
  itemsInCart: 2
}
```
- The two pairs of curly braces is your way to indicate that *itemsInCart* is a variable and you want to display its value inside a container.

## Connecting to form inputs

As mentioned previously, variables are commonly used to save information inputed by users. Below are the basic form input controls and the ways you can connect them to your data storage. 

### Text

There’s an attribute in Vue that allows to bind a form control with a variable: `v-model`. It’s placed inside a control and is followed by the name of the variable you want to connect. Now everything a user types into the input will be stored in specified variable. 

```html
<input v-model="userEmail"> 
```
```js
data () {
  userEmail: 'support@mockupless.com'
}
```
- Inputs of types *email* and *password* are connected the same way
- Pro note. By binding a control and a variable, you connect them both ways. If the variable is changed, the value of control is changed


### Checkbox

Value of a checkbox is always binary: it’s either on or off, so it makes sense to connect it to a variable with a Boolean value. Clicking on a checkbox input toggles the variable’s value between true and false.

<!-- todo: add screenshot of the UI to connect with the result  -->
```html
<input type="checkbox" v-model="didAgreeToPolicy"> I agree with Privacy Policy
```
```js
data () {
  didAgreeToPrivacyPolicy: false
}
```

### Radio buttons

A set of radio button controls should be connected to a single variable to control which one is currently selected. So each input from a group should have the same variable name in its v-model attribute.

Radio buttons require another attribute: **value**. In it you specify what should be stored in a variable when the radio button is selected. 

<!-- todo: add screenshot of the UI to connect with the result  -->
```html
<div>
  <input type="radio" v-model="emailsDaily" value="One"> Just one
</div>
<div>
  <input type="radio" v-model="emailsDaily" value="Two"> Twice a day
</div>
<div>
  <input type="radio" v-model="emailsDaily" value="Three"> All three
</div>
```
```js
data () {
  emailsDaily: 'One'
}
```
- The value of a radio button doesn’t have to be the same as its label, but it’s easier to keep track of them when they are the same

### Select / Dropdown

To connect a dropdown to your data you need to add v-model to ‘select’ control. The value inside the selected ‘option’ container will be stored in your data.

<!-- todo: add screenshot of the UI to connect with the result  -->
```html
<select v-model="plan">
  <option>Free</option>
  <option>Pro</option>
  <option>Business</option>
</select>
```
```js
data () {
  plan: 'Free'
}
```

- Similarly to radio buttons, you can specify ‘value’ for each option if you want it to be different from the actual content between ‘option’ tags. As with radio buttons, it’s recommended to have them the same. 