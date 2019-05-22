# Layout

## Setup

Create a new pen on CodePen. Add Tailwind and Ionicons to the CSS settings:

```html
https://cdn.jsdelivr.net/npm/tailwindcss@next/dist/tailwind.min.css
```

```html
https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css
```

Expand the HTML section by double-clicking on its header. You won’t need the other two sections for a while.

Name the pen and save it.

## Core layout

First, create layout with a header, a feed area, and a sidebar:

<iframe height="562" style="width: 100%;" scrolling="no" title="Layout basics—Course project—Insta, step 1" src="//codepen.io/andgordy/embed/jomOPN/?height=562&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/jomOPN/'>Layout basics—Course project—Insta, step 1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

It all starts with a full-screen flex container with column direction. It has two children: a header with a fixed height and the `flex-1` content area, that fills the rest of the page:

```html
<div class="h-screen flex flex-col">
  <div class="h-16 bg-gray-200"></div>
  <div class="flex-1 flex bg-gray-100"></div>
</div>
```

The content area container is a flex parent itself, with two children: the `flex-1` feed area and fixed-width sidebar:

```html
<div class="h-screen flex flex-col">
  <!-- HEADER  -->
  <div class="h-16 bg-gray-200"></div>
  <div class="flex-1 flex">
    <!-- FEED  -->
    <div class="flex-1 bg-gray-400"></div>
    <!-- SIDEBAR  -->
    <div class="w-56 bg-gray-600"></div>
  </div>
</div>
```

Remember to separate your code into section with comments, and apply background colors to see the effect when there’s no content yet.

## Top nav

Now, let’s create the header layout using colored placeholders:

<iframe height="562" style="width: 100%;" scrolling="no" title="Layout basics—Course project—Insta, step 2" src="//codepen.io/andgordy/embed/yWbLae/?height=562&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/yWbLae/'>Layout basics—Course project—Insta, step 2</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The header container is a flex parent with 6 elements: a logo, a wordmark, a searchbar and 3 buttons. Since the search bar is centered, you also need a couple of flex-1 containers to fill the space around it:

```html
<div class="h-16 bg-gray-200 flex items-center">
  <!-- logo and wordmark -->
  <div class="h-10 w-10 bg-blue-500 rounded"></div>
  <div class="border-l border-blue-500 text-blue-500 py-2 pl-2 ml-2">
    Clonogram
  </div>
  <!-- searchbar with fillers -->
  <div class="flex-1 bg-blue-200 h-6"></div>
  <div class="border border-blue-500 px-3 py-1 flex items-center h-2"></div>
  <div class="flex-1 bg-blue-200 h-6"></div>
  <!-- buttons -->
  <div class="w-8 h-8 bg-blue-500 mx-2 rounded"></div>
  <div class="w-8 h-8 bg-blue-500 mx-2 rounded"></div>
  <div class="w-8 h-8 bg-blue-500 mx-2 rounded"></div>
</div>
```

The searchbar is also a flex container with a placeholder for an icon and an input field:

```html
<div class="border border-blue-500 px-3 py-1 flex items-center">
  <div class="w-4 h-4 bg-blue-500 rounded"></div>
  <input type="text" class="bg-transparent w-32">
</div>
```

## Sidebar

This time create a draft of the sidebar layout, also using placeholders:

<iframe height="745" style="width: 100%;" scrolling="no" title="Layout basics—Course project—Insta, step 3" src="//codepen.io/andgordy/embed/BeRaxB/?height=745&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/BeRaxB/'>Layout basics—Course project—Insta, step 3</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The sidebar has 3 elements: a user profile card, a Stories box, a Suggestions box and a footer. The user profile is a flex container with two children: a photo placeholder and a parent for user name and a full name:

```html
<div class="flex items-center pt-6">
  <div class="w-10 h-10 bg-blue-500 rounded-full"></div>
  <div class="text-sm pl-2">
    <div>andgordy</div>
    <div>And Gordy</div>
  </div>
</div>
```

*Stories* box is a regular container that has two children: the header and the content area. Both children have fixed heights, and the content area has `overflow-scroll`:

```html
<div class="border border-blue-300 mt-6">
  <!-- stories header  -->
  <div class="flex items-center px-2 py-2 border-b border-blue-300 text-sm">
    <div>Stories</div>
    <div class="flex-1 h-4 bg-blue-200"></div>
    <div>Watch all</div>
  </div>
  <!-- stories content -->
  <div class="h-40 overflow-scroll pt-1"> ... </div>
</div>
```

Each item in the content area is a flex container, that is almost identical to the user’s profile card shown above, with the minor differences in paddings of the parent container:

```html
<div class="flex items-center px-3 py-2">
  <div class="w-10 h-10 bg-blue-500 rounded-full"></div>
  <div class="text-sm pl-2">
    <div>Name</div>
    <div>Time</div>
  </div>
</div>
```

The *Suggestions* area is almost the same as the Stories area, except for a couple of things. The content is not scrollable, so the three items that it has are shown always. Also, each item has a *Follow* button, which fits perfectly into the flex parent, to the right of the `flex-1` child:

```html
<div class="flex items-center px-3 py-2">
  <div class="w-10 h-10 bg-blue-500 rounded-full"></div>
  <div class="text-sm pl-2">
    <div>Name</div>
    <div>Time</div>
  </div>
  <div class="flex-1 h-4 bg-blue-200"></div>
  <button>Follow</button>
</div>
```

:::tip Collapse code
By this point, your prototype must be around a hundred lines of code long. Scrolling through the HTML code can be a meditative activity, but it can also be exhausting. To navigate the code faster, remember to collapse the sections of the prototype you are currently not working with. This can be done by clicking the triangle icons next to the line numbers.
:::

## Feed

To complete the core layout, create the feed area:

<iframe height="746" style="width: 100%;" scrolling="no" title="Layout basics—Course project—Insta, step 4" src="//codepen.io/andgordy/embed/KLmwzq/?height=746&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/KLmwzq/'>Layout basics—Course project—Insta, step 4</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The area is a regular container with overflow-scroll:

```html
<div class="flex-1 bg-gray-100 pt-6 px-6 text-blue-500 overflow-scroll h-full">
  ...
</div>
```

Each card is also a regular container with the paddings and a border:

```html
<div class="border border-blue-500 rounded mb-8">
  ...
</div>
```

The header of the card is a flex container with three children and a `flex-1` container to take up the free space:

```html
<div class="flex items-center px-3 py-2">
  <!-- photo -->
  <div class="w-8 h-8 bg-blue-500 rounded-full mx-1"></div>
  <!-- name and location -->
  <div class="text-sm pl-2">
    <div>user_name</div>
    <div>location</div>
  </div>
  <!-- flex-1 -->
  <div class="flex-1 bg-blue-200 h-4"></div>
  <!-- More button -->
  <button>...</button>
</div>
```

The card controls (Heart, Message, Share and Bookmark), the comments and the comment input are all flex containers with flex-1 children where some items have to be pushed to the right.

The controls:

```html
<div class="flex py-2 px-3 items-center">
  <div class="w-6 h-6 mx-1 rounded-full bg-blue-500"></div>
  <div class="w-6 h-6 mx-1 rounded-full bg-blue-500"></div>
  <div class="w-6 h-6 mx-1 rounded-full bg-blue-500"></div>
  <div class="flex-1 bg-blue-200 h-4"></div>
  <div class="w-6 h-6 mx-1 rounded-full bg-blue-500"></div>
</div>
```

Each comment:

```html
<div class="flex py-1 px-3 text-sm items-center">
  <div class="px-1">
    <span class="font-semibold">user_name</span> An amazing picture
  </div>
  <div class="flex-1 h-4 bg-blue-200"></div>
  <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
</div>
```

Comment input:

```html
<div class="flex py-1 px-3 mt-3 items-center border-t border-blue-500">
  <input type="text"
          class="flex-1 px-1 py-2 bg-transparent"
          placeholder="Enter your comment...">
  <div class="px-2">Post</div>
</div>
```