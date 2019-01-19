# Click

![clicks illustration](./media/events-events.png)

Click is the father of interactivity. Upon click, items are added and removed, containers are shown and hidden, pages are opened and animations are played. 

You need to do 2 things to make your prototype respond to a users' click:

1. Add a **click listener** to a container you expect users to interact with.
2. Specify **instructions** that you want to be executed when the click is detected.

Here's a button that adds 1 to the variable `items` when clicked:

```html
<button @click="items = items + 1">Add an item</button>
```
<div class="jsfiddle-link"><a href="https://jsfiddle.net/andgordy/eywraw8t/498829/" target="_blank">JSFiddle</a></div>

- `@` tells Vue you are specifying an event listener.
- `click` is the name of the event you want to listen to.
- `items = items + 1` is the instruction you want to be executed when the event is detected.
- Taps are also recognized by this listener if users interact with the prototype on touch screen devices.

### Beyond buttons

You can add click listeners to any container, not only a button. This means that you can create your layouts freely, without having to use any specific containers for your elements.

Also, the click is detected not only on an element you've added it to, but also on all of its **children**.

In this exapmle a click listener is added to a complex flex container with multiple containers inside:

```html
<div @click="items = items + 1" class="button">
  <div class="icon">
    +
  </div>
  <div class="text">
    Add an item
  </div>
</div>
```
<div class="jsfiddle-link"><a href="https://jsfiddle.net/andgordy/mqhb2v30/46/" target="_blank">JSFiddle</a></div>

This way `+` and `Add an item` are in different containers each with a unique style, but both will respond to a click, because the listener is added to their parent. 

## Self-practice

### name of the task