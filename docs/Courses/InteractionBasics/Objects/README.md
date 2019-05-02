# Objects

![hey](./media/il-objects.png)

You created a basic contact list in the previous section by using an array of names and a template-container with the `v-for` attribute. However, most lists and grids you design are a little more complex because each item in the list has multiple elements:

<iframe height="640" style="width: 100%;" scrolling="no" title="Objects—Recent" src="//codepen.io/andgordy/embed/LawXrr/?height=640&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/LawXrr/'>Objects—Recent</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Every item on this list has a first name, a last name, the latest message, and the date the latest message was sent. To render this kind of list you need an array of variables that store multiple variables themselves. These container-variables are called **objects**.

Before we move on to lists of objects, let’s create a single object for an item on this list:  

```js
data: {
  contact: {
    nameFirst: 'Joe',
    nameLast: 'Cole',
    message: 'Have they heard of Klimt anyway?',
    time: '12:15 AM'
  }
}
```

The value of an object called `contact` is wrapped in curly braces. Each item in the object is a variable, so the syntax should be familiar to you: a name, a colon, and a value. The variables in objects must be separated by commas. Separating them with line breaks is optional but usually improves the readability of your code. 

:::tip Good eye
Does the syntax of objects look familiar? This is exactly the way the `data` container you use to store all your [variables](./../Data/variables.md#variables) is built. This is not a coincidence—the `data` container is in fact an object too. 
:::

## Accessing object's variables

To access the items stored inside an object, use the object’s name followed by a dot, followed by the name of a variable:

```html
<div>
  {{contact.nameFirst}} 
  {{contact.nameLast}}
</div>
<div>
  {{contact.time}}
</div>
<div>
  {{contact.message}}
</div>
```

As with regular variables, this code renders the values of the variables:

<iframe height="360" style="width: 100%;" scrolling="no" title="Objects—Recent single" src="//codepen.io/andgordy/embed/XGvoRB/?height=360&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/XGvoRB/'>Objects—Recent single</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Variables stored in objects can be used the same way regular variables can be used. You can render their values (as in the example above) or use their values in conditions (which is explored in the next article). 


### Array of objects

To create a list of recent conversations, you need not one but many objects. As you've learned in the previous sections, to render a list, you need to store items in an array, and an array is a list of variables of **any** type. So, if you need a list of complex items, you create an array of objects:

```js
data: {
  contacts: [
    {
      nameFirst: 'Joe',
      nameLast: 'Cole',
      message: 'Have they heard of Klimt anyway?',
      time: '12:15 AM'
    },
    {
      nameFirst: 'Michael B.',
      nameLast: 'Jordan',
      message: 'No way! Thursday was supposed...',
      time: '8:37 AM'
    },
    //...
  ]
}
```

The variable `contacts` looks busy, but it’s still an array—a list of nameless variables wrapped in square brackets and separated by commas. Each item here is an object: a container with variables wrapped in curly braces and separated by commas.

With an array of objects in place, you are all set to render the list.

### Rendering lists of objects

Displaying a list of objects is no different than rendering the other types of lists you've seen so far. You create a template-container with the `v-for` attribute connected to the array of objects and use the temporary name to access items in the array:

```html {1}
<div v-for="contact in contacts" class="py-3">
  <div>
    {{contact.nameFirst}} 
    {{contact.nameLast}}
  </div>
  <div>
    {{contact.time}}
  </div>
  <div>
    {{contact.message}}
  </div>
</div>
```

And the list is rendered:

<iframe height="577" style="width: 100%;" scrolling="no" title="Objects—Recent multiple" src="//codepen.io/andgordy/embed/eoYzJY/?height=577&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eoYzJY/'>Objects—Recent multiple</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<!-- todo: write: summary -->

## Practice

### Cars catalog

Create a grid of cards from an array of objects: 

<iframe height="704" style="width: 100%;" scrolling="no" title="Objects—Task: Cars collection" src="//codepen.io/andgordy/embed/Ygbwdx/?height=704&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/Ygbwdx/'>Objects—Task: Cars collection</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create an array of objects and populate it with the content of your choice. You can also use this array:

```js
cars: [
  {
    make: "GMC",
    model: "Savana 3500",
    description: "volutpat sapien arcu sed augue",
    year: 2006
  },
  {
    make: "Volvo",
    model: "940",
    description: "luctus ultricies eu nibh quisque id justo",
    year: 1992
  },
  {
    make: "BMW",
    model: "3 Series",
    description: "natoque penatibus et magnis dis parturient",
    year: 2011
  },
  {
    make: "Mitsubishi",
    model: "Mighty Max",
    description: "tellus nisi eu orci mauris lacinia",
    year: 1986
  },
  {
    make: "Kia",
    model: "Optima",
    description: "imperdiet nullam orci pede venenatis non sodales",
    year: 2007
  },
  {
    make: "Mercedes-Benz",
    model: "R-Class",
    description: "libero rutrum ac lobortis vel dapibus at",
    year: 2012
  }
]
```

2. Create a three-column grid layout with a template-container connected to the array. 
3. Render each of the object’s variables in the template by using a temporary name followed by a dot, followed by the name of the variable.

### Navigation with counters

Create a prototype that has a list of selectable channels and the number of unread messages:

<iframe height="451" style="width: 100%;" scrolling="no" title="Objects—Task: Channels" src="//codepen.io/andgordy/embed/ywWjdd/?height=451&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ywWjdd/'>Objects—Task: Channels</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Create an array of objects. Each item should have a name and a number of unread items.
2. Create a two-column layout and render the list on the left using a template-container.
3. Render the name and the number of unread messages of each item on the list.
4. Create a variable to store the index of the selected channel.
5. Add a `@click` event listener to the template-container that assigns the index of the selected channel to the variable. 
6. In the right column, use the variable to access the name of the selected channel. 

<!-- todo: each tab is an object with a name and number of new items, this can be used in the next article to add “if 0 don't show” logic behind it -->

<!-- todo: make sure the second task is more complex and includes adding/deleting -->


