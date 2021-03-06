# More

Creating, testing, and improving the core flow was just the beginning. When the basics are covered, it’s time to make the experience rich, test additional flows, and add details. 

### Rich objects

Populate restaurants’ cards with information and images:

<iframe height="690" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, More, step 1" src="//codepen.io/andgordy/embed/EJRdjQ/?height=690&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/EJRdjQ/'>Interaction basics—Course project, More, step 1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Add the variables `price`, `photo`, and `isFav` to objects in the `restaurants` array:

```js
restaurants: [
  {
    name: 'Bread and Breakfast',
    price: '$$',
    photo: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=953&q=80',
    isFav: false
  },
  {
    name: 'The Sober Clam',
    price: '$$$$',
    photo: 'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    isFav: true
  },
  {
    name: 'Salaterio',
    price: '$$',
    photo: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    isFav: true
  },
  //...
]
```

Use them in the *Catalog* in the template-container to display information, render images, and style the *Heart*/*Favorites* button:

```html
<div v-for="(rest, i) in restaurants">
  <div @click="selectedRestaurant = i; currentScreen = 'details'">
    <img :src="rest.photo">
  </div>
  <div @click="selectedRestaurant = i; currentScreen = 'details'">
    {{rest.name}}
  </div>
  <div>
    {{rest.price}}
  </div>
  <button class="ion-md-heart" :class="{'text-pink-600': rest.isFav}"></button>
</div>
```

Use the object's variables on the *Details* page with an index stored in `selectedRestaurant`:

```html
<img :src="restaurants[selectedRestaurant].photo">
<div>
  {{restaurants[selectedRestaurant].name}}
</div>
<button @click="doShowReservSidebar = true">
  Make a reservation
</button>
<button class="ion-md-heart"
        :class="{'text-pink-600': restaurants[selectedRestaurant].isFav}">
</button>
```

### Favorites

Allow users to add restaurants from *Catalog* and *Details* to favorites. Show the list on the *Favorites* tab:

<iframe height="690" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, More, step 2" src="//codepen.io/andgordy/embed/KYeGEZ/?height=690&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/KYeGEZ/'>Interaction basics—Course project, More, step 2</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Turn the *Favorites* buttons on the *Catalog* tab into switches that change the value of `isFav` boolean variable to the opposite one:

```html {5}
<div v-for="(rest, i) in restaurants">
  <!-- card contents -->
  <button class="ion-md-heart"
          :class="{'text-pink-600': rest.isFav}"
          @click="restaurants[i].isFav = !restaurants[i].isFav">
  </button>
</div>
```

Do the same in the *Details* view using the index stored in `selectedRestaurant`:

```html {4}
<!-- retaurant details -->
<button class="ion-md-heart"
        :class="{'text-pink-600': restaurants[selectedRestaurant].isFav}"
        @click="restaurants[selectedRestaurant].isFav = !restaurants[selectedRestaurant].isFav">
</button>
```

In the Favorites container, reuse the template container from the *Catalog* view with conditional rendering:

```html {2}
<div v-for="(rest, i) in restaurants"
     v-if="rest.isFav">
  <!-- card content -->
</div>
```

### Confirmation strip

Show the confirmation message when users place a reservation:

<iframe height="690" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, More, step 3" src="//codepen.io/andgordy/embed/oOyQYj/?height=690&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/oOyQYj/'>Interaction basics—Course project, More, step 3</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Create a variable to store the state of the confirmation strip:

```js
data: {
  //...
  doShowReservConfirmation: false
}
```

Create a container with conditional rendering on the same level as the header and content containers. Add a *Dismiss* button that hides the strip by changing the value of `doShowReservConfirmation`. Add *Go to reservations* button, which also changes the view to *Reservations*:

```html {1,5,8}
<div v-if="doShowReservConfirmation">
  <div class="flex-1 font-bold py-5">
    Table booked
  </div>
  <button @click="currentScreen = 'reservs'; doShowReservConfirmation = false">
    Go to reservations
  </button>
  <button @click="doShowReservConfirmation = false">
    Dismiss
  </button>
</div>
```

In the `reserve` function, add an instruction to change the value of `doShowReservConfirmation` to `true` to reveal the strip when the reservation is placed:

```js
reserve () {
  //...
  this.doShowReservConfirmation = true
}
```

### Back to catalog / favorites

Add a *Back* button to the *Details* page. The button should take users to the *Catalog* view if they came from the *Catalog*. It should take them to the *Favorites* if they came from the *Favorites* view:

<iframe height="690" style="width: 100%;" scrolling="no" title="Interaction basics—Course project, More, step 4" src="//codepen.io/andgordy/embed/JVZVvr/?height=690&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVZVvr/'>Interaction basics—Course project, More, step 4</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Create a variable to store the view that the users came to the *Details* from:

```js
data: {
  //...
  backFromDetailsTo: 'catalog'
}
```

On the *Catalog* tab, add an instruction to the template-container to save `'catalog'` to `backFromDetailsTo`:

```html {4,9}
<div v-for="(rest, i) in restaurants">
  <div @click="selectedRestaurant = i;
               currentScreen = 'details';
               backFromDetailsTo = 'catalog'">
    <img :src="rest.photo">
  </div>
  <div @click="selectedRestaurant = i;
               currentScreen = 'details';
               backFromDetailsTo = 'catalog'">
    {{rest.name}}
  </div>
  <div>
    {{rest.price}}
  </div>
  <button class="ion-md-heart" :class="{'text-pink-600': rest.isFav}"></button>
</div>
```

Similarly, add instructions to cards in the *Favorites* view to save `'favs'` to `backFromDetailsTo`:

```html {4,9}
<div v-for="(rest, i) in restaurants" v-if="rest.isFav">
  <div @click="selectedRestaurant = i;
               currentScreen = 'details';
               backFromDetailsTo = 'favs'">
    <img :src="rest.photo">
  </div>
  <div @click="selectedRestaurant = i;
               currentScreen = 'details';
               backFromDetailsTo = 'favs'">
    {{rest.name}}
  </div>
  <div>
    {{rest.price}}
  </div>
  <button class="ion-md-heart" :class="{'text-pink-600': rest.isFav}"></button>
</div>
```

Now add the *Back* button to the *Details* view with instructions to change `currentScreen` to the value stored in `backFromDetailsTo`:

```html {3}
<!-- Details -->
<button class="text-indigo-700 px-6 text-sm"
        @click="currentScreen = backFromDetailsTo">
  ← Back
</button>
```

### Minor details

There are some minor details in the final version of the prototype in [The task](./) that are not covered in these articles. Here are some of them:

- In Details, the *Place reservation* and *Favorite* buttons are hidden when the sidebar is open. Also, the restaurant details become half-transparent.
- The tabs on the top navigation bar are highlighted when their views are selected.
- Most buttons have hover states.
- The *Reservation* sidebar has options for each control, with some additional effort put into the styling of the elements.
- Most instructions are moved to functions.

We encourage you to complete the prototype yourself and apply your own styles. Alternatively, you can [review the code](https://codepen.io/andgordy/pen/oOGbjj?editors=1000) of the original prototype and see how the features were implemented.
