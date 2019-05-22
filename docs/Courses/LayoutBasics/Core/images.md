# Images

You can add images to your prototypes with a special tag:

```html
<img src="https://website.com/image.png">
```

<iframe height="437" style="width: 100%;" scrolling="no" title="Core—Images" src="//codepen.io/andgordy/embed/ZNELxv/?height=437&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/ZNELxv/'>Core—Images</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

`img` doesn’t have a closing tag. You will see more HTML elements without closing tags in the [Form controls](./form-controls.md) article.

The image file has to be stored online for you to be able to enter its URL in the `src` attribute.

:::tip Attributes
`src` is an attribute. Attributes are always placed in the opening tag. They consist of the name of the attribute, followed by an equal sign, followed by a pair of parentheses. The value of an attribute is placed within the parentheses. For example, the `src` attribute expects a URL, so its syntax is `src="https://website.com/image.png"`. 

Attributes extend the functionality of the HTML elements and control their behavior. In this course, you will learn about attributes that change style, specify types of elements, provide placeholder texts, and more.
:::

To get the URL of an image you either find an image online or upload a file yourself:

- [Google Images](https://images.google.com) and [Unsplash](https://unsplash.com/) are good places to find images online.
- Services like [Imgur](https://imgur.com) allow you to upload and store images for free.
- [CodePen Pro](https://codepen.io/pro) is another convenient way to store images, because it allows you to manage them without leaving the prototype, but it is a paid subscription.

## Practice

Add photos to the prototype from the previous article:

<iframe height="467" style="width: 100%;" scrolling="no" title="Core—Images—Task" src="//codepen.io/andgordy/embed/byRZEx/?height=467&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/byRZEx/'>Core—Images—Task</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Open the prototype you created in the [previous article](./nesting.md#practice) and press Fork in the top right of the CodePen’s UI. Rename the prototype. You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/JqJxQG).
2. Delete `<div>photo</div>` from the first item on the list. Type `img` and press *tab* on the keyboard. The editor should autofill with an image tag:

```html
<img src="" alt="">
```

3. Go to [https://uifaces.co/](https://uifaces.co/) and choose a photo. Right-click on it and choose *Copy Image Address* from the browser’s context menu.

4. Go back to your prototype and paste the URL into the `src` property. You should be able to see the photo in the preview.

5. Replace `<div>photo</div>` with images in other two items on the list.

`alt` is an attribute the allows you to provide text value for the image. This value is shown when the image fails to load. This attribute is also used by screen readers, so it is considered mandatory in web development for accessibility reasons. When prototyping, providing values for `alt` is optional, unless you need to test your design with a screen reader.