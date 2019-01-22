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

<!-- todo: assigning a value -->

:::tip Assigning values
One equal sign
:::

### Beyond buttons

You can add click listeners to any container, not only to a `<button>`. This means that you can create your layouts freely, without having to use any specific containers for your components. What's even more important, the click is detected not only on a container you've added it to, but also on all of its **children**.

In this exapmle a `@click` listener is added to a complex flex container with multiple containers inside it:

```html
<div @click="doShowDetailsView = true" class="flex">
  <div class="w-16 h-16 rounded-full bg-grey-lighter mr-6">SA</div>
  <div class="flex-1">
    <div class="font-bold">Steve Allen</div>
    <div class="text-grey">This is an amazing opportunity!</div>
  </div>
</div>
```

This way there are multiple containers with different layouts and style, but all will respond to a click, because the listener is added to their parent container. 

#### 👐 Hands-on
<!-- todo: hands-on section, maybe. maybe not because the article is short and has a lot of self-practice -->


## Self-practice
<!-- todo: self-practice -->

### basic 1

///

#### Solution

///

### basic 2

///

#### Solution

///

### pro 1

///

#### Solution

///

### pro 2

///

#### Solution

///