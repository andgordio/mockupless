# Conditional styles

Let's go back to the example from the previous lesson, but this time focus on the tab bar: 

![lo-fi wireframes of three screens: newsfeed, explore and profile](./images/condition-style-wireframes-1.png)

By default tabs' icons and labels are colored in grey. Your task is to change the color of an element to teal when the corresponding tab is selected.

First, create containers and apply default styles. Here's a very simplified version with just one tab and without an icon:

```html
<div class="text-grey">
  Newsfeed
</div>
```

The selected style is conditional because it's applied only to a selected tab. So you need a variable that you will use for checking conditions. As in previous lesson, the condition is the currently selected tab:

```js
data: {
  currentTab: 'newsfeed'
}
``` 

Lastly, you need to add conditional class attribute to the container together with the condition of applying it:

```html
<div class="text-grey" :class="{'text-teal': currentTab === 'newsfeed'}">
  Newsfeed
</div>
```

`:class` attribute can be read as “add this style if the following condition is true”. Since the default value for `currentTab` is `newsfeed` the `text-teal` class will be added to the container.

:::tip Note
The syntax of `:class` attribute looks complex at first. It *is* complex for surem but will make way more sense and hopefully become familiar, when you learn about Objects. For now, it's easier to read if you break it down into smaller pieces:
- a class name and a condition are separated by colon
- class name is written in single quotes
- the whole value is surrounded by curly braces
:::

#### Hands-on

See the effects yourself: download the **file** and change the value of `currentTab` to `'explore'` and then to `'profile'`.

> gif of the vue devtools

## Multiple classes

Sometimes you may want to add multiple conditional classes to a container. Let's say that in the example above the selected tab must not only be colored in teal, but also the font must become bold. Just as in regular `class` attribute you separate classes with space inside the single quotes:

```html
<div class="text-grey" :class="{'text-teal font-bold': currentTab === 'newsfeed'}">
  Newsfeed
</div>
```

Another common case is to have multiple conditional classes based on different conditions. For example, you have a button that is greyed-out by default. It becomes colored when the form is complete, and it also becomes half-transparent when conversation with server is simulated:

```html
<div class="bg-grey px-4 py-3 text-white" :class="{'bg-teal': isFormComplete, 'opacity-50': isDataLoading}">
  Submit
</div>
```

#### Hands-on

Test it yourself...

> gif of button and vue devtools