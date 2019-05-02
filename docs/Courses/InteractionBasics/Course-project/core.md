# Core flow

The prototype is built with seven components:

- Top navigation bar
- *Restaurants* view
- *Favorites* view
- *Reservations* view
- *Details* view
- *Reservation* sidebar
- Confirmation strip

It makes sense to start with a prototype that allows users to make reservations with minimal effort since this is the main interaction for this design. You’ll use the prototype as a foundation for additional details and interactions.

### Top navigation

The top nav bar is visible at all times, so it makes sense to split the layout of the app into two containers—the top bar and the rest—at the highest level:

<iframe height="307" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, step 1" src="//codepen.io/andgordy/embed/rbJpdK/?height=307&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/rbJpdK/'>Interaction basics—Course project, step 1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

It takes a `flex` parent, a header with a fixed height, and a content container with `flex-1` to achieve this:

```html
<div id="app" class="flex flex-col h-screen">
  <div class="flex items-center h-16 px-6 bg-gray-200">
    <!-- top nav content -->
  </div>
  <div class="flex-1 bg-gray-300">
    <!-- rest of the content -->
  </div>
</div>
```

### Main views

Since the prototype includes multiple views that users can navigate, you need to store the state of the selected view and allow switching between three of the views from the top nav bar:

<iframe height="307" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, step 2" src="//codepen.io/andgordy/embed/BEYJMp/?height=307&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/BEYJMp/'>Interaction basics—Course project, step 2</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Store the state of the selected screen in a variable:

```js
data: {
  currentScreen: 'catalog',
}
```

Set the variable’s value to change on click and use the value as a condition for displaying different content containers:

```html
<!-- top nav -->
<div>
  <button @click="currentScreen = 'catalog'">Book-a-dinner</button  >
  <button @click="currentScreen = 'catalog'">Catalog</button>
  <button @click="currentScreen = 'favs'">Favorites</button>
  <button @click="currentScreen = 'reservs'">Reservations</button>
</div>
<!-- rest of content -->
<div>
  <div v-if="currentScreen === 'catalog'">Catalog</div>
  <div v-if="currentScreen === 'favs'">Favorites</div>
  <div v-if="currentScreen === 'reservs'">Reservations</div>
</div>
```

### Details

Next, display a collection of items in the *Catalog* view and allow users to view details on click:

<iframe height="471" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, step 3" src="//codepen.io/andgordy/embed/XQEKjX/?height=471&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/XQEKjX/'>Interaction basics—Course project, step 3</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Store an array of restaurants, and create a variable to store the index of the selected item:

```js {3,23}
data: {
  // ...
  restaurants: [
    {
      name: 'Bread and Breakfast'
    },
    {
      name: 'The Sober Clam'
    },
    {
      name: 'Salaterio'
    },
    {
      name: 'Sega Mega Bar'
    },
    {
      name: 'Eight 9 Tin'
    },
    {
      name: 'Red Green Bite'
    }
  ],
  selectedRestaurant: null
}
```

Create a template-container and connect it to the array with `v-for`. Track the index and save it to the `selectedRestaurant` variable on click. Change the `currentScreen` to `details` to take users to a different view:

```html {2,4}
<div class="flex flex-wrap px-4 pt-3">
  <div v-for="(rest, i) in restaurants">
  <div class="bg-gray-200 rounded p-4">
    <div @click="selectedRestaurant = i; currentScreen = 'details'">
      {{rest.name}}
    </div>
  </div>
</div>
```

Create the Details container with conditional rendering. Use the index stored in `selectedRestaurant` to display the name of the selected item:

```html {1,3}
<div v-if="currentScreen === 'details'">
  <div>
    {{restaurants[selectedRestaurant].name}}
  </div>
</div>
```

### New reservation sidebar

By design, the Sidebar is part of the *Details* view and appears when the `Make a reservation` button is clicked:

<iframe height="443" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, step 4" src="//codepen.io/andgordy/embed/xeWryr/?height=443&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/xeWryr/'>Interaction basics—Course project, step 4</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Create a boolean variable to store the state of sidebar:

```js
data: {
  // ...
  doShowReservSidebar: true,
}
```

Make the rendering of the sidebar conditional. Add a `@click` listener to open and close the sidebar:

```html {4,6,8}
<div v-if="currentScreen === 'details'">
  <div>
    <!-- restaurant details -->
    <button @click="doShowReservSidebar = true">Make a reservation</button>  
  </div>
  <div v-if="doShowReservSidebar">
    <!-- reservation sidebar -->
    <button @click="doShowReservSidebar = false">x</button>
  </div>
</div>
```


### Reservation options

Reservation is a form with three inputs and a submission button:

<iframe height="680" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, step 5" src="//codepen.io/andgordy/embed/eorrWg/?height=680&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/eorrWg/'>Interaction basics—Course project, step 5</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

For each form input, create a pair of variables: an array of options and the selected option:

```js
data: {
  // ...
  partyOptions: ['1', '2', '3', '4', '5+'],
  selectedParty: '2',
  dateOptions: ['Today, Apr 9', 'Tomorrow, Apr 10', 'Monday, Apr 11'],
  selectedDate: 'Tomorrow, Apr 10',
  timeOptions: ['12:00', '12:30', '1:00', '1:30', '2:00'],
  selectedTime: '12:30',
}
```

Now connect them to the form controls in your layout. Party and time are custom form controls—lists, basically. They are rendered by using `v-for` with `@click` listeners. Date is populated with `v-for` and is connected to `selectedDate` with `v-model` like all [regular form controls](./../Data/forms.html):

```html {3,10,11,19}
<div>Party</div>
<div>
  <div v-for="party in partyOptions" @click="selectedParty = party">
    {{party}}
  </div>
</div>

<div>Date</div>
<div>
  <select v-model="selectedDate">
    <option v-for="date in dateOptions">
      {{date}}
    </option>
  </select>
</div>

<div>Time</div>
<div>
  <div v-for="time in timeOptions" @click="selectedTime = time">
    {{time}}
  </div>
</div>
```
### Placing and viewing reservations

Save information about the selected restaurant with the chosen reservation options and display all reservations in the *Reservations* view: 

<iframe height="628" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, step 6" src="//codepen.io/andgordy/embed/QPxwye/?height=628&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/QPxwye/'>Interaction basics—Course project, step 6</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Create an empty array to store reservations:

```js
data: {
  // ...
  reservations: [],
}
```

Call the function when the *Reserve* button is clicked:

```html
<button @click="reserve()">
  Reserve
</button>
```

Create a function that pushes an object into the `reservations` array and closes the sidebar:

```js {3,9}
methods: {
  reserve () {
    this.reservations.push({
      restaurant: this.selectedRestaurant,
      party: this.selectedParty,
      date: this.selectedDate,
      time: this.selectedTime
    })
    this.doShowReservSidebar = false
  }
}
```

The object you push has four variables. All of them store existing data:
- `restaurant` saves the index of the selected restaurant.
- `party`, `date`, and `time` save the selected options from the reservation form.

Now, in the *Reservations* view you can create a template-container that is connected to the `reservations` array and show information from the objects inside. The index stored in the object variable `restaurant` is used to access the name of the restaurant, which is in the `restaurants` array:

```html
<div v-for="reserv in reservations">
  <div>
    {{reserv.date}} {{reserv.time}}
  </div>
  <div>
    {{restaurants[reserv.restaurant].name}}
  </div>
  <div>
    for {{reserv.party}}
  </div>
</div>
```

### Canceling reservations

Allow reservation cancelcancellations:

<iframe height="612" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, step 7" src="//codepen.io/andgordy/embed/oOyjqY/?height=612&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/oOyjqY/'>Interaction basics—Course project, step 7</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Track the index of the reservation and use it for the `splice` method:

```html
<div v-for="(reserv, i) in reservations">
  <!-- reservation details -->
  <button @click="reservations.splice(i, 1)">
    Cancel
  </button>
</div>
```

### The core is complete

The prototype you’ve created so far is nowhere near the final experience, yet it’s focused on the core user flow—placing and managing the reservations:

<iframe height="648" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, core complete" src="//codepen.io/andgordy/embed/MRXaBN/?height=648&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/MRXaBN/'>Interaction basics—Course project, core complete</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The prototype already has a number of assumptions to test: are users comfortable navigating the restaurants’ details pages? Are there parts of the reservation form that users find confusing? Do they go to *Reservations* to see the confirmation right after placing a reservation? Answers to these questions can help you identify basic patterns, fix issues and prioritize features you plan to add to the prototype next.

When you feel comfortable with the core flow, you can start adding details and secondary flows. Some of those are explored in the next article.