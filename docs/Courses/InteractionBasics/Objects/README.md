# Objects

![hey](./media/il-objects.png)

You’ve created a basic contacts list in the [previous section](./../Lists-and-loops/) using an array of names and a template-container with `v-for` directive. However most lists and grids you design are a little more complex, in a way that each item on the list has multiple elements:

<iframe height="640" style="width: 100%;" scrolling="no" title="Objects—Recent" src="//codepen.io/andgordy/embed/LawXrr/?height=640&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/LawXrr/'>Objects—Recent</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Every item on this list has a first name, a last name, the latest message and the date it was sent. To render this kind of lists you need an array of variables that store multiple variables themselves. These container-variables are called **Objects**.

Before we move on to lists of objects let’s create a single object for an item from this list:  

<iframe height="332" style="width: 100%;" scrolling="no" title="Objects—Recent single" src="//codepen.io/andgordy/embed/XGvoRB/?height=332&theme-id=36403&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/XGvoRB/'>Objects—Recent single</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The value of an object called `contact` is wrapped in curly braces. Each item of an object is a variable so the syntax should be familiar to you: a name, a colon and a value. Items in objects must be separated by commas. Separating them with line breaks is optional but usually improves readability of your code. 

:::tip Good eye
Does the syntax of objects look familiar? This is exactly the way `data` container you use to store all your [variables](./../Data/variables.md#variables) is build. This is not a coincidence — `data` container is in fact an object. 
:::

## Accessing object's variables

To access items stored inside an object you use object’s name followed by a dot, followed by the name of a parameter:

<iframe height="360" style="width: 100%;" scrolling="no" title="Objects—Recent single" src="//codepen.io/andgordy/embed/XGvoRB/?height=360&theme-id=36403&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/XGvoRB/'>Objects—Recent single</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Aside from a special syntax, variables stored in objects can be used the same way other variables can. You can render their values as in the example above, or use their values in conditions which is explored in the next article. 


### Array of objects

To create a list of recent conversations you need not one but many objects. As you've learned from the previous sections, to render a list you need to store items in the array, and an a array is a list of variables of **any** type. So if you need a list of complex items you create an array of objects:

<iframe height="740" style="width: 100%;" scrolling="no" title="Objects—Recent multiple" src="//codepen.io/andgordy/embed/eoYzJY/?height=740&theme-id=36403&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eoYzJY/'>Objects—Recent multiple</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The variable `contacts` looks busy but it's still an array—a list of nameless variables wrapped in square brackets and separated by commas. And each item is an object: a container with varibles wrapped in curly braces and separated by commas.

With an array of objects in place, you are all set to render it.

### Rendering lists of objects

Displaying a list of objects is no different from rendering other types of lists you've seen so far. You create a template-container with `v-for` directive connected to the array of objects and use the temporary name to access items in the array:

<iframe height="577" style="width: 100%;" scrolling="no" title="Objects—Recent multiple" src="//codepen.io/andgordy/embed/eoYzJY/?height=577&theme-id=36403&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eoYzJY/'>Objects—Recent multiple</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

As explored in the [beginning of this article](./#accessing-object-s-variables) you access variables inside objects with a dot and a name of a variable. 

<!-- todo: write: summary -->

## Practice

### Cars catalog

Create a grid of cards from an array of objects: 

<iframe height="704" style="width: 100%;" scrolling="no" title="Objects—Task: Cars collection" src="//codepen.io/andgordy/embed/Ygbwdx/?height=704&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/Ygbwdx/'>Objects—Task: Cars collection</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create an array of objects and populate it with content of your choice. You can also copy an array from this example:

<iframe height="893" style="width: 100%;" scrolling="no" title="Objects—Task: Cars collection" src="//codepen.io/andgordy/embed/Ygbwdx/?height=893&theme-id=36403&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/Ygbwdx/'>Objects—Task: Cars collection</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

2. Create a 3-column grid layout with a template-container connected to the array. 
3. Render objects’ variables from the template using temporary name followed by dot, followed by a name of objects’ variable.

### Navigation with counters

Create a prototype with a list of selectable channels with number of unread messages:

<iframe height="451" style="width: 100%;" scrolling="no" title="Objects—Task: Channels" src="//codepen.io/andgordy/embed/ywWjdd/?height=451&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ywWjdd/'>Objects—Task: Channels</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create an array of objects. Each item should have a name and a number of unread items.
2. Create a two-column layout and render the list in the left one using template-container.
3. Render the name and the number of unread messages for each item on the list.
4. Create a variable to store the index of the selected channel.
5. Add a click listener to the template-container that assigns the index of the selected channel to the variable. 
6. In the right column use the variable to access the name of the selected channel. 

<!-- todo: each tab is an object with a name and number of new items, this can be used in the next article to add “if 0 don't show” logic behind it -->

<!-- todo: make sure the second task is more complex and includes adding/deleting -->


