# Objects pro

An item in a object can be treated as a variable in many ways. When you use an array of objects to create a list, you can use object’s variables not only to render their values. You can use them as a source property for images, to render conditional elements and add conditional styles.

Following the example from the previous article a list of recent chats can be extended to show:
- avatars,
- unread dot indicators,
- bold darker fonts for unread chats.

<iframe height="659" style="width: 100%;" scrolling="no" title="Objects—Recent extended" src="//codepen.io/andgordy/embed/JVjrRq/?height=659&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVjrRq/'>Objects—Recent extended</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To achieve this, every object must have two additional variables—one for storing a link to a photo and another one to store unread status:

<iframe height="1060" style="width: 100%;" scrolling="no" title="Objects—Recent extended" src="//codepen.io/andgordy/embed/JVjrRq/?height=1060&theme-id=36403&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVjrRq/'>Objects—Recent extended</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

So far you have used variables in objects only to render data:

<iframe height="360" style="width: 100%;" scrolling="no" title="Objects—Recent single" src="//codepen.io/andgordy/embed/XGvoRB/?height=360&theme-id=36403&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/XGvoRB/'>Objects—Recent single</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe> 

Let’s review other implications one by one. 

## Image source

Variables inside Objects can be used to render images the same way you would use a regular [variable for an image source](./../Data/display.html#images):

<iframe height="381" style="width: 100%;" scrolling="no" title="Objects—Recent single with photo" src="//codepen.io/andgordy/embed/WWNdbb/?height=381&theme-id=36403&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/WWNdbb/'>Objects—Recent single with photo</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This template-container takes values of avatar from each object in the array contacts and uses it in :src property to provide urls for images. 

## Conditional rendering

You can make elements of your template conditional the same way you do it outside of lists—with [v-if and conditions](./../Conditionals/#equality):

<iframe height="427" style="width: 100%;" scrolling="no" title="Objects—Recent single with photo and dot" src="//codepen.io/andgordy/embed/GLRygz/?height=427&theme-id=36403&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GLRygz/'>Objects—Recent single with photo and dot</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

An object’s variable unread is used for the condition. As a result objects with unread variable not equal to 0 will render a container with a colored dot.


## Conditional style

Lastly, an object’s variable can be used for [conditional styling](./../Conditionals/styles.html#conditional-styles):

<iframe height="454" style="width: 100%;" scrolling="no" title="Objects—Recent single with photo, dot and styles" src="//codepen.io/andgordy/embed/YMzYXO/?height=454&theme-id=36403&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/YMzYXO/'>Objects—Recent single with photo, dot and styles</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This template container uses the same variable unread as in Conditional rendering above. Here it’s used inside conditional class attribute so font-semibold will be applied for every item generated from an object in the array that has unread not equal to zero.  

## Practice

<!-- todo: create: Simpler task with conditionals and images -->

### Filtered list

Create a list with an option to filter it by one of the parameters:

! Prototype

1. Fork the 

<!-- 1. Download the starting [prototype](./../../../course-files/interaction-basics/practice-objects-pro-filtered-list-start.html.zip). -->
2. Connect the template-container to `cars` array with `v-for` attribute.
3. Display make, model, description and year for each item.
4. Create a variable `selectedFilter` to store the state of the filter, and [connect](./../Data/display.md#dropdown-select) it to the `select` control in the footer.
5. Add a [complext condition](./../Conditionals/complex.md) to the item template to enable filtering. Each item is rendered if:
  - `All` selected in the filters list, or
  - The selected filter name equals to the item's `make` value.