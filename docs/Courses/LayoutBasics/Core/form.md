# Form controls

## Text input

```html
<input>
<input type="text">
<input type="text" placeholder="Enter your name here..">
<input type="email">
<input type="password">
```

- no closing tag
- placeholder is optional attribute

## Textarea
```html
<textarea placeholder="Enter description..."></textarea>
```

- nothing goes between the tags

## Checkbox
```html
<input type="checkbox"> I agree with Privacy Policy
```

## Radio button
```html
<div>
  <input type="radio" name="options"> Option A
</div>
<div>
  <input type="radio" name="options"> Option B
</div>
<div>
  <input type="radio" name="options"> Option C
</div>
```

- radio buttons from one group must have same value in the `name` attribute to make radio buttons bound

## Dropdown / Select
```html
<select>
  <option selected disabled>Select an option...</option>
  <option>Free</option>
  <option>Pro</option>
  <option>Business</option>
</select>
```

- `selected` is an optional attribute that makes the value selected by default
- `disabled` is an optional attribute that doesn't allow a user to select an option from the list
- a combination of `selected` and `disabled` is trick to provide a placeholder value that's shown by default but cannot be selected by a user


## Make it click!

By default, the text you put next to checkbox or radio input is not clickable, only the control itself is. If you want to make the text clickable too, you need a setup like this:

```html
<div>
  <input type="checkbox" id="policy">
  <label for="policy">I agree with Privacy Policy</label>
</div>
```

1. Wrap the text in `<label>` container.
2. Add attribute `id` to the input and give it some value.
3. Add attribute `for` to the label and give it the same value.

This way you sort of connect the checkbox (or radio button) with the label and the label becomes clickable too.