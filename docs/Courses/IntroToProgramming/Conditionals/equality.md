# (in)Equality

## Equality

Let's say you are creating a prototype with 3 tabs:

![lo-fi wireframes of three screens: newsfeed, explore and profile](./images/condition-equal-wireframes-1.png)

Each tab has a corresponding view, which is supposed to be shown when its tab is selected. The task is similar to the one you had in the previous article with one exception: the condition is not binary anymore — it's not “show either this or that”. Now you have 3 options to deal with, and there could be more.

As before, you start with creating a variable that you will use in your conditions. But instead of a boolean, that can only have either of two values, you use a string, because it can be anything, including the name of the tab:

```js
data: {
	currentTab: 'newsfeed'
}
``` 

Now in your `v-if` attributes you check whether the variable **equals** to a particular value:

```html
<div v-if="currentScreen === 'newsfeed'">
  <!-- Newsfeed content -->
</div>
<div v-if="currentScreen === 'explore'">
  <!-- Newsfeed content -->
</div>
<div v-if="currentScreen === 'profile'">
  <!-- Newsfeed content -->
</div>
```

The expressions above can be read as “show the container only if the value of `currentScreen` equals to this”. Since the default value for `currentScreen` is `newsfeed`, only the first container will be shown in a browser.

:::tip Note
Using 3 equal signs for equality may look like an overkill, but single equal sign has a very different meaning in javascript, and two equal signs
just don't look fancy enough (and may lead to some unexpected behavior).
:::

To test this, download the file, open it in Chrome, use Vue devtools to change the value of `currentScreen` to `'explore'` or`'profile'`:

> gif here

## Inequality

You build a nice consistent UI, but then you decide that the profile view can be so much fancier, and it doesn't need the navbar at all:

![lo-fi wireframe with a notification badge on a tab icon](./images/condition-equal-wireframes-2.png)

Your task is to show navbar container on all scerens except for Profile tab. The variable remains the same: `currentScreen` — but the condition for showing the element is different. Now you want the element to be shown if the variable does **not** equal to `'profile'`.

The way you check for inequality is actually a symbiosis of the two: [equality](./equality.md#equality) from the section above and [not](./rendering.md#not) operator from the previous article:

```html
<div v-if="currentScreen !== 'profile'">
  <!-- navbar content -->
</div>
```

The expressions above can be read as “show the container only if the value of `currentScreen` is not `profile`”. As a result the navbar will be shown with any other value assigned to `currentScreen` including `'newsfeed'`, `'explore'` and anything you may come up with later.

Test this by downloading the sample file and changing the value in Vue devtools to `'profile'` and then to anything else.

> gif here
