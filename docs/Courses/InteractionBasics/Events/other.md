# Other events

Click is probably the most popular interaction, but there’s a number of other events that allow for richer UX and are expected by users. Three interactions are explored in this article: focus, hover and key press.

## Focus and unfocus

When designing a form you may want to know when the input field was focused and when it lost its focus. This information can be used to change styles, show suggestion, validate inputs, etc. 

<video width="100%" controls muted class="">
  <source src="./media/other-focus.mp4" type="video/mp4">
</video>

Event listeners `@focus` and `@blur` are responsible for catching these interactions: 

```html
<input @focus="didFocusInput = true" @blur="didFocusInput = false">
<div>Did focus input: {{didFocusInput}}</div>
```

## Hover

Another common interaction on desktop computers is hovering over elements with the mouse cursor. `@mouseover` event listener tracks when a cursor *enters* the area of the element. Its counterpart `@mouseleave` reacts to a cursor *leaving* the area of an element:

<video width="100%" controls muted class="">
  <source src="./media/other-hover.mp4" type="video/mp4">
</video>

```html
<div @mouseover="didHoverCalendar = true" @mouseleave="didHoverCalendar = false">
  Calendar
</div>
<div @mouseover="didHoverChat = true" @mouseleave="didHoverChat = false">
  Chat
</div>
<div @mouseover="didHoverPeople = true" @mouseleave="didHoverPeople = false">
  People
</div>
```

Note the difference between CSS `:hover` selector and `@mouseover` event listener. `:hover` applies specified styles when the cursor enters the area of an element and also discards them when the cursor leaves. With the event listeners you provide two separate (sets of) instructions: one for cursor entering the area, and one for when it leaves. This is particularly useful when, for example, your design doesn't require anything to happen when the mouse leaves. [Self-practice Task 1](#task-1) is a good example of this type of UX.
<!-- todo: link: to Layout basics explaining hovers -->

## Key press

You already know how you can [connect text input](./../Data/display.md#text) to a variable with `v-model`, so everything a user enters is stored in data. You don't need an event listener to achieve that. However sometimes you want to track key presses inside the input field to provide instructions when particular keys are pressed.

`@keypress` event listener reacts to every key press inside an input field but you rarely need to track this type of interaction. In addition, `@keypress` has modifiers that specify which particular key you want to respond to. For example, a commonly expected behavior when interacting with a search bar or a simple form is the ability to submit by hitting return/enter key. Adding `.enter` modifier  to `@keypress` event listener  allows you to react to this particular key being pressed:

<video width="100%" controls muted class="">
  <source src="./media/other-keypress.mp4" type="video/mp4">
</video>

```html
<input v-model="emailInput" @keypress.enter="emailSubmitted = emailInput; emailInput = ''">
<button @click="emailSubmitted = emailInput; emailInput = ''">Subscribe</button>
...
<div>Submitted email: {{emailSubmitted}}</div>
```

Modifiers are placed right after the name of the event listener. Usually, the instructions in this type of cases are the same as for `@click` on a Submit button as shown in the example above. 

Modifiers include `.tab`, `.esc` and a number of others. You can learn more about them in [Vue.js official guide](https://vuejs.org/v2/guide/events.html#Key-Modifiers).


## Self-practice

### Task 1

Allow users to switch between different photos by hovering controls:

<video width="100%" controls muted class="">
  <source src="./media/other-practice-1.mp4" type="video/mp4">
</video>

1. Use the result of [Task 1 in Click](./#task-1) article as a starting file.
2. Replace `@click` event listeners with `@mouseover` event listeners.
3. As a result different images should be rendered depending on which circle users hover over.

If you have problems completing the task download the [final result](./../../../course-files/interaction-basics/events/event-other-practice-1-end.html.zip).

### Task 2

Allow users to send a search query without providing a Search button at all:

<video width="100%" controls muted class="">
  <source src="./media/other-practice-2.mp4" type="video/mp4">
</video>

1. Create a simple layout with a search bar and a heading.
2. Add `@keypress.enter` event listener to the text input.
3. Display users’ query in the heading when they press return/enter.

If you have problems completing the task download the [final result](./../../../course-files/interaction-basics/events/event-other-practice-2-end.html.zip).

<!-- #### Task

Create a prototype of search input field with multiple interactive features:

<video width="100%" controls loop autoplay muted style="margin-top: 0px; margin-bottom: 24px;">
  <source src="./media/search-task-demo.mp4" type="video/mp4">
</video>

- when focused, the suggestions box is shown;
- if the search input is empty, the message is shown in the suggestion box: “Start inputing query to see results”;
- if the search input is not empty, the suggestions are shown;
- if the search input is not empty, the clear (x) button is shown;
- pressing return/enter hides suggestions box;
- clicking clear (x) button clears input and hides suggestions box;
- clicking on a suggestion puts the suggestion into input and hides suggestions box.

Download the [starting layout](./../../../course-files/interaction-basics/events-other-task-1-start.html.zip) or feel free to create your own.

#### Solution

If you have any problems completing the task, dowload and review the [complete prototype](./../../../course-files/interaction-basics/events-other-task-1-end.html.zip) -->