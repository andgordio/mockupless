# Objects pro

An item in an object can be treated as a regular variable in many ways. When you use an array of objects to create a list, you can use the object’s variables not only to render their values. You can use them as a source property for images, to render conditional elements, and to add conditional styles too.

Following the example from the previous article, a list of recent chats can be extended to show
- avatars,
- unread dot indicators,
- bold darker fonts for unread chats:

<iframe height="659" style="width: 100%;" scrolling="no" title="Objects—Recent extended" src="//codepen.io/andgordy/embed/JVjrRq/?height=659&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVjrRq/'>Objects—Recent extended</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To achieve this, every object must have two additional variables—one for storing a link to a photo and another for storing the unread status:

```js {8,9,16,17,24,25}
data: {
  contacts: [
    {
      nameFirst: 'Joe',
      nameLast: 'Cole',
      message: 'Have they heard of Klimt anyway?',
      time: '12:15 AM',
      unread: true,
      photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2NjczMzQwMV5BMl5BanBnXkFtZTgwNTczMzcxNjE@._V1_UY256_CR42,0,172,256_AL_.jpg'
    },
    {
      nameFirst: 'Michael B.',
      nameLast: 'Jordan',
      message: 'No way! Thursday was supposed...',
      time: '8:37 AM',
      unread: true,
      photo: 'https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_UX172_CR0,0,172,256_AL_.jpg'
    },
    {
      nameFirst: 'Linnea',
      nameLast: 'Berthelsen',
      message: 'You: sounds good!',
      time: '8:04 AM',
      unread: false,
      photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2JhY2M2Y2QtZDBjOS00MjY2LWJhMjEtZWNjNTQ3MTE0YzBlXkEyXkFqcGdeQXVyNjE5MDgzMjI@._V1_UY256_CR10,0,172,256_AL_.jpg'
    },
    //..
  ]
}
```
<!-- <iframe height="1060" style="width: 100%;" scrolling="no" title="Objects—Recent extended" src="//codepen.io/andgordy/embed/JVjrRq/?height=1060&theme-id=36403&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVjrRq/'>Objects—Recent extended</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe> -->

So far you have used variables in objects only to render data:

```html
<div>
  {{contact.nameFirst}} {{contact.nameLast}}
</div>
<div>
  {{contact.time}}
</div>
<div>
  {{contact.message}}
</div>
```

<iframe height="360" style="width: 100%;" scrolling="no" title="Objects—Recent single" src="//codepen.io/andgordy/embed/XGvoRB/?height=360&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/XGvoRB/'>Objects—Recent single</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe> 

It’s time to explore other applications. 

## Image source

Variables inside objects can be used to render images the same way you would use a regular [variable as an image source](./../Data/display.html#images):

```html{2}
<div v-for="contact in contacts">
  <img :src="contact.photo">
</div>
```

This template-container takes values of the `photo` variables from each object in the `contacts` array and uses them in `:src` property to provide URLs for images:

<iframe height="381" style="width: 100%;" scrolling="no" title="Objects—Recent single with photo" src="//codepen.io/andgordy/embed/WWNdbb/?height=381&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/WWNdbb/'>Objects—Recent single with photo</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Conditional rendering

You can make elements of your template render conditionally the same way you do it outside of lists—with [v-if and conditions](./../Conditionals/#equality). Here’s how an unread indicator can be coded:

```html{3-5}
<div v-for="contact in contacts" class="py-3 flex">
  <div>{{contact.nameFirst}} {{contact.nameLast}}</div>
  <div v-if="contact.unread">
    <div class="w-2 h-2 bg-teal-500 rounded-full mt-2 ml-3"></div>
  </div>
</div>
```

The object’s variable `unread` is used for the condition that determines the rendering of the indicator. According to this condition, objects with `unread` equal to `true` will render a container with a colored dot:

<iframe height="427" style="width: 100%;" scrolling="no" title="Objects—Recent single with photo and dot" src="//codepen.io/andgordy/embed/GLRygz/?height=427&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/GLRygz/'>Objects—Recent single with photo and dot</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## Conditional style

Finally, an object’s variable can be used for [conditional styling](./../Conditionals/styles.html#conditional-styles). The code below applies different styles to read and unread items:

```html{2,6,9}
<div v-for="contact in contacts" class="my-3">
  <div :class="{'font-bold': contact.unread}">
    {{contact.nameFirst}} 
    {{contact.nameLast}}
  </div>
  <div :class="{'text-gray-500': !contact.unread}">
    {{contact.time}}
  </div>
  <div :class="{'text-gray-500': !contact.unread}">
    {{contact.message}}
  </div>
</div>
```

This template container uses the same variable `unread` that’s used in the conditional rendering above. Here it’s used inside the conditional `:class` attribute so that `font-bold` will be applied to names if `unread` is `true` and `text-gray-500` will be applied to a message and a timestamp if it is `false`:

<iframe height="640" style="width: 100%;" scrolling="no" title="Objects—Recent single with photo, dot and styles" src="//codepen.io/andgordy/embed/YMzYXO/?height=640&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/YMzYXO/'>Objects—Recent single with photo, dot and styles</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

:::tip Color hierarchy in Tailwind
Another way to manage different text colors for a message and a date stamp is to apply grey by default with `class="text-gray-500"` and conditionally make them black with `:class="{'black': contact.unread}"`. Unfortunately, this will not work. We use Tailwind as a stylesheet, and the styles for the `text-gray-500` class are defined below the styles for `text-black` on the stylesheet. This means that `text-gray-500` has greater precedence and will always overrule `text-black` when both classes are applied.

Keep in mind that colors are defined in a particular order. The way colors are presented in [Tailwind's official docs](https://tailwindcss.com/docs/customizing-colors/#default-color-palette) represents their precedence with black having the lowest precedence and pink having the hightest.
:::

## Practice

### Extended cars catalog

Create a grid of cards with images and conditional styles and labels:

<iframe height="700" style="width: 100%;" scrolling="no" title="Objects—Task: Cars collection extended" src="//codepen.io/andgordy/embed/PgqqKZ/?height=700&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/PgqqKZ/'>Objects—Task: Cars collection extended</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Use your results from the [Cars catalog](./#cars-catalog) task in the previous article as a starting file, or start from scratch.
2. Extend the existing array with the `phone`, `isOnSale` and `isSoldOut` boolean variables. You can also copy this array:

```js
cars: [
  {
    make: "GMC",
    model: "Savana 3500",
    description: "volutpat sapien arcu sed augue",
    year: 2006,
    isOnSale: true,
    isSoldOut: false,
    photo: 'https://file.kbb.com/kbb/vehicleimage/housenew/480x360/2010/2010-gmc-savana%203500%20cargo-frontside_gmsav101.jpg'
  },
  {
    make: "Volvo",
    model: "940",
    description: "luctus ultricies eu nibh quisque id justo",
    year: 1992,
    isOnSale: false,
    isSoldOut: false,
    photo: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=U2VLGEC1.jpg&width=390'
  },
  {
    make: "BMW",
    model: "3 Series",
    description: "natoque penatibus et magnis dis parturient",
    year: 2011,
    isOnSale: true,
    isSoldOut: false,
    photo: 'https://d1ix0byejyn2u7.cloudfront.net/drive/images/made/drive/images/remote/https_f2.caranddriving.com/images/new/large/BMW3Series0908(3)_794_529_70.jpg'
  },
  {
    make: "Mitsubishi",
    model: "Mighty Max",
    description: "tellus nisi eu orci mauris lacinia",
    year: 1986,
    isOnSale: false,
    isSoldOut: false,
    photo: 'https://car-pictures.cars.com/images/?IMG=U2MIGEH1.JPG&height=369&autotrim=1'
  },
  {
    make: "Kia",
    model: "Optima",
    description: "imperdiet nullam orci pede venenatis non sodales",
    year: 2007,
    isOnSale: false,
    isSoldOut: true,
    photo: 'http://carphotos.cardomain.com/ride_images/3/613/3021/26531510002_large.jpg'
  },
  {
    make: "Mercedes-Benz",
    model: "R-Class",
    description: "libero rutrum ac lobortis vel dapibus at",
    year: 2012,
    isOnSale: false,
    isSoldOut: true,
    photo: 'https://media.ed.edmunds-media.com/mercedes-benz/r-class/2011/oem/2011_mercedes-benz_r-class_wagon_r350-4matic_fq_oem_1_500.jpg'
  }
]
```

3. Inside the template-container, connect the `img` container to the `photo` variable inside the array's objects with the `:src` attribute.
4. Inside the template-container, create 2 containers: one with the text “ON SALE” and another with “SOLD OUT”. Make them conditional, based on the values of the variables `isOnSale` and `isSoldOut`.
5. Apply conditional styles to the text for items that have `isSoldOut` equal to `true`.

<!-- todo: create: Simpler task with conditionals and images -->