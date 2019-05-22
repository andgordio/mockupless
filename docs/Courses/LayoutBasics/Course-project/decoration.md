# Decoration

## Top nav

In terms of style, the top navigation bar is just a selection of paddings, some icons and an imported font:

<iframe height="743" style="width: 100%;" scrolling="no" title="Layout basics—Course project—Insta, step 5" src="//codepen.io/andgordy/embed/RmVNOG/?height=743&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/RmVNOG/'>Layout basics—Course project—Insta, step 5</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Originally, two fonts were selected on Google Fonts and imported to the prototype: *Pacifico* and *Satisfy*:

```html
<link href="https://fonts.googleapis.com/css?family=Pacifico|Satisfy" rel="stylesheet">
```

Two classes, one for each font, were created in the CSS section:

```css
.cursive-1 {
  font-family: 'Satisfy', cursive;
}

.cursive-2 {
  font-family: 'Pacifico', cursive;
}
```

Both classes were tested on the wordmark, and the second one clearly worked better for the clone:

```html
<div class="border-l border-gray-400 py-1 pl-4 ml-5 text-2xl cursive-2">
  Clonogram
</div>
```

In the code above, you can also notice that the vertical line between the logo and the wordmark is created using left border, left padding (space between the line and the wordmark) and left margin (space between the line and the logo).

The Ionicons were used for the logo, the search and the buttons on the right:

```html
<button class="ion-md-compass px-3 text-2xl"></button>
```

## Sidebar

The sidebar is created with many nested flex containers, a selection of text styles and round photos:

<iframe height="743" style="width: 100%;" scrolling="no" title="Layout basics—Course project—Insta, step 6" src="//codepen.io/andgordy/embed/MdmwJx/?height=743&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/MdmwJx/'>Layout basics—Course project—Insta, step 6</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To create a round image, you need a flex container, with fixed height and width, full border radius, vertical and horizontal center alignment, and most importantly, the `overflow-hidden` class to crop the image:

```html
<div class="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
  <img src="https://...">
</div>
```

The URLs for images are taken from [https://uifaces.co](https://uifaces.co/).

To create a round photo with a pink outline, you need two containers. First, a rounded container with a pink border and a fixed size. Second, a flex container with an image (as shown in code sample above), this time with white border to create the space between the photo and the pink border:

```html
<div class="border-2 border-pink-500 w-12 h-12 rounded-full">
  <div class="border-2 border-white w-full h-full rounded-full overflow-hidden flex items-center justify-center">
    <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2NjczMzQwMV5BMl5BanBnXkFtZTgwNTczMzcxNjE@._V1_UY256_CR42,0,172,256_AL_.jpg">
  </div>
</div>
```

Notice, that the inner container uses `w-full` and `h-full` instead of fixed values, because its parent has the dimensions fixed already.

The uppercase for subtitles like “1 HOUR AGO” and “FOLLOWS YOU” are achieved by applying `uppercase` class that transforms text into capital letters.

## Feed

A post in the feed is a complex component, but it shouldn’t introduce new challenges. The images are created using the pattern from the Sidebar section above, the Ionicons are used for buttons, and consistent text styles are applied:

<iframe height="748" style="width: 100%;" scrolling="no" title="Layout basics—Course project—Insta, step 7" src="//codepen.io/andgordy/embed/dEWMQR/?height=748&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/dEWMQR/'>Layout basics—Course project—Insta, step 7</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Comments require wrapping usernames in `span` to apply `font-semibold`:

```html
<div>
  <span class="font-semibold">tessa-ia</span> Love this place!
</div>
```

The photos for this prototype were found on [https://unsplash.com](https://unsplash.com/). 

## Minor details

There’s a number of details and styles that are not covered in these articles. We encourage you to complete the prototype yourself and apply your own styles. Alternatively, you can review the code of the [original prototype](https://codepen.io/andgordy/pen/JqNKOM?editors=1000) and see how the features were implemented.