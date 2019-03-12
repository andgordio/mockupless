# Inequality

`v-if` asks a questions “Should I render the component I am assigned to?” and when its condition returns `true` the component is shown. Checking for equality in the previous article worked well for components designed for a particular state of UI. For example: Newsfeed container is shown only when `currentScreen` equals to `'Newsfeed'`.

Yet sometimes you need a component to be shown everywhere **except** for a particular state. For example, if you need to hide the top bar when Profile is selected, the condition should read “when `currentScreen` does **not** equal `'Profile'`”. 

<!-- In this case you would have to check whether a  -->

<!-- In this case the component should be rendered if  -->

<!-- Yet sometimes you need a component to be *hidden* in a particular state and there’s no way of asking “Should this component be hidden?” with `v-if`.  -->

<!-- `v-if` renders a container when its condition returns `true`. This worked well for components designed for a particular state of UI. For example: Newsfeed container is shown only when `'Newsfeed'` is assigned to `current screen`. Yet sometimes you need a component to be *hidden* in a particular state. 
show everywhere **except** for a particular view. -->

<!-- Sometimes you specify rules, but sometimes how the rules are broken

Some elements of UI break the rules

Similarly to the way you check for equality in `v-if` conditions with `===` operator you can also check for inequality.  -->

## Not equal


