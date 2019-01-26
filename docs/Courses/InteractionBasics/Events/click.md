# Click

![clicks illustration](./media/events-events.png)

<!-- todo: better illustration / animation of click changing everything -->

Click (or tap, depending on the device) is the father of interactivity. Upon click items are added and removed, containers are shown and hidden, pages are opened and animations are played. 

To make your prototype respond to a user’s click you need to do 2 things:

1. Add a **click listener** to a container you expect users to interact with.
2. Specify **instructions** that you want to be executed when the click is detected.

Here's a button that changes authentication status of a user, when clicked:

```html
<button @click="isUserLoggedIn = true">
  Login
</button>
```

This attribute can be read as “when users click on the button, assign the value of `true` to `isUserLoggedIn` variable”. `@click` is **the event** you want to listen to. `isUserLoggedIn = true` is the **instruction** you want to be executed when the event is detected.

:::tip Assigning a value
When you define a variable inside your `data` container you specify a name and a default value: `doShowDetails: false`. The sole purpose of storing something inside a variable is to enable changing its value in the future. You see it being done in the example above. So to change the value, or as it’s also called, to assign a new value, you put a single equal sign between a variable name and a new value in your instructions: `doShowDetails = true`.
:::

### Beyond buttons

You can add click listeners to any container, not only to a `<button>`. This means that you can create your layouts freely, without having to use any specific containers for your components. What's even more important, the click is detected not only on a container you've added it to, but also on all of its **children**.

In this exapmle a `@click` listener is added to a flex container with multiple child-containers:

```html
<div @click="doShowDetailsView = true" class="flex">
  <div class="w-16 h-16 rounded-full bg-grey-lighter mr-6">SA</div>
  <div class="flex-1">
    <div class="font-bold">Steve Allen</div>
    <div class="text-grey">This is an amazing opportunity!</div>
  </div>
</div>
```

This way there are multiple containers with different layouts and styles, but all will respond to a click, because the listener is added to their parent container. 

<!-- #### 👐 Hands-on -->
<!-- todo: hands-on section, maybe. maybe not because the article is short and has a lot of self-practice -->


## Self-practice

The power of click allows you to add real interactivity to all prototypes you've created in Conditions section. Now you can go back to your recent designs and click events so you don't have to change values in Vue dev tools.

### Event creation

<video width="100%" controls loop autoplay muted style="margin-top: 24px;">
  <source src="./media/events-click-1.mp4" type="video/mp4">
</video>

1. Start with the prototype you created in [Complex conditions' self-practice](./../Conditionals/styles.html#self-practice-basic). If you don't have your prototype, download the [starting file](./../../../course-files/interaction-basics/events-click-task-events-start.html.zip).
2. Add four event listener for buttons:
- “Create” shows the event creation
- “Save” and “Cancel” hide the event creation
- “Continue” on Features page marks intro as seen, so Features page is shown only once
3. Since the prototype has all required variables and conditions in place, you should be able to preview results in Chrome right after applying the listeners

#### Solution

If you have any problems completing the task, dowload and review the [complete prototype](./../../../course-files/interaction-basics/events-click-task-events-end.html.zip)

### Tabs

<video width="100%" controls loop autoplay muted style="margin-top: 24px;">
  <source src="./media/events-click-2.mp4" type="video/mp4">
</video>

1. Start with the prototype you created in [Conditional styles' self-practice](./../Conditionals/complex.html#self-practice). If you don't have your prototype, download the [starting file](./../../../course-files/interaction-basics/events-click-task-1-start.html.zip).
2. Add `@click` event listener to every tab container with instructions to change the value of the `currentTab` variable to the name of the tab.
3. Usually you'd come up with values for tabs yourself, but in the given prototype there are already conditional styles that rely on specific values like `:class="{'border-pink': currentTab === 'for you'}"`. Make sure you use the same values, so the styles are applied.

#### Solution

If you have any problems completing the task, dowload and review the [complete prototype](./../../../course-files/interaction-basics/events-click-task-1-end.html.zip)