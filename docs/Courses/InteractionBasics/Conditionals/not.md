# Inequality

`v-if` asks a questions “Should I render the component I am assigned to?” and when its condition returns `true` the component is shown. Checking for equality in the previous article worked well for components designed for a particular state of UI. For example: Newsfeed container is shown only when `currentScreen` is equal to `'Newsfeed'`.

Yet sometimes you need a component to be shown everywhere **except** for a particular state. For example, if you need to hide the top bar when Profile is selected, the condition should read “when `currentScreen` is not equal to `'Profile'`”:

<video width="100%" controls muted loop class="">
  <source src="./media/cond-ineq-1.mp4" type="video/mp4">
</video>

To achieve this you need to render the top bar conditionally and check for inequality:

```html
<div v-if="currentTab !== 'Profile'">{{currentTab}}</div>
```

The syntax can be read as: show the container only if the value of `currentTab` is **not** equal to `'Profile'`.

`!==` is a Boolean operator that compares the value on the left with the value on the right and returns `true` if they are not equal, and `false` if they are. As a result the component above is rendered when `currentTab` is `'Newsfeed'`, `'Explore'` or any other value you assign to it, but it is hidden when `currentTab` is `'Profile'`.

## Self-practice

### Task 1

Add indication of the selected color by showing a hole in all non-selected buttons: 

<video width="100%" controls muted loop class="">
  <source src="./media/cond-ineq-practice-1.mp4" type="video/mp4">
</video>

1. Use the result of Task 1 in [Conditional rendering](./#task-1) article as a starting file.
2. Add holes to all color picker buttons. A hole is basically a smaller rounded container inside the button with white background. 
3. Add conditions to all holes, so they appear if the selected color is **not** the one they are placed in.
4. As a result all non-selected buttons must look outlined and the selected one should look filled.

If you have problems completing the task download the [final result](./../../../course-files/interaction-basics/conditionals/cond-ineq-practice-1-end.html.zip).

### Task 2

Recreate and extend the prototype from this article:

<video width="100%" controls muted loop class="">
  <source src="./media/cond-ineq-practice-2.mp4" type="video/mp4">
</video>

1. Use the result of Task 2 in [Conditional rendering](./#task-2) article as a starting file.
2. Add `v-if` to top bar container with a condition to be shown when `currentTab` is **not** `'Profile'`.
3. Add a new item to the bottom tab bar with click event listener that changes the value of `currentTab` to `'Notifications'`.
4. Add new content container between Explore and Profile with conditional rendering if Notitications is selected in the bottom bar. The content of this view is up to you—feel free to copy and paste parts from other views.
5. As a result you should have a prototype with 4 tabs. The top bar must be hidden when the Profile view is shown. 

If you have problems completing the task download the [final result](./../../../course-files/interaction-basics/conditionals/cond-ineq-practice-2-end.html.zip).

<!-- In this case you would have to check whether a  -->

<!-- In this case the component should be rendered if  -->

<!-- Yet sometimes you need a component to be *hidden* in a particular state and there’s no way of asking “Should this component be hidden?” with `v-if`.  -->

<!-- `v-if` renders a container when its condition returns `true`. This worked well for components designed for a particular state of UI. For example: Newsfeed container is shown only when `'Newsfeed'` is assigned to `current screen`. Yet sometimes you need a component to be *hidden* in a particular state. 
show everywhere **except** for a particular view. -->

<!-- Sometimes you specify rules, but sometimes how the rules are broken

Some elements of UI break the rules

Similarly to the way you check for equality in `v-if` conditions with `===` operator you can also check for inequality.  -->

<!-- ## Not equal -->


