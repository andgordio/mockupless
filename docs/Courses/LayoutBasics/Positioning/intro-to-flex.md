# Flex

`div` containers don’t share horizontal space with other containers by default, so all the layouts you’ve created so far were basically boxes stacked on top of each other. Real interfaces tend to get a bit more complex though:

![Slack UI](https://get.slack.help/hc/article_attachments/360028155314/Tour_the_Slack_app_1.png)

There are many tools and techniques to create complex layouts with CSS. **Flexbox** is probably the most universal one, because it allows you to control direction, alignment and behavior of the child containers. What’s even more important for prototyping, the layouts created with flexbox can be altered with minimal effort, so you will not have to spend too much time restructuring your prototype to try a different layout.

You can turn any container into a **flex parent container** by changing the `display` property to `flex`:

```html {1}
<div style="display: flex;">
  <div style="background-color: #E2E8F0; padding: 12px;">
    One
  </div>
  <div style="background-color: #CBD5E0; padding: 12px;">
    Two
  </div>
  <div style="background-color: #718096; padding: 12px;">
    Three
  </div>
</div>
```

<iframe height="210" style="width: 100%;" scrolling="no" title="Flex—Parent" src="//codepen.io/andgordy/embed/zXgZWq/?height=210&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/zXgZWq/'>Flex—Parent</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### The defaults

Flexbox comes with a number of properties that allow you to control the position and the behavior of its child containers. Those properties are explored in the articles that follow.

Some styles come with flexbox by default. The first thing you should notice in the example above is that the child containers take as much horizontal space as their content requires, not the full width of the parent container. Also, the children are stacked horizontally inside the flex container, not vertically.

If you specify `height` in one of the child containers, you will notice that other children of the flex container get the same height:

```html {4}
<div style="display: flex;">
  <div style="background-color: #E2E8F0;
              padding: 12px;
              height: 200px;">
    One
  </div>
  <div style="background-color: #CBD5E0;
              padding: 12px;">
    Two
  </div>
  <div style="background-color: #718096;
              padding: 12px;">
    Three
  </div>
</div>
```

<iframe height="366" style="width: 100%;" scrolling="no" title="Flex—Justified height" src="//codepen.io/andgordy/embed/JVgWZE/?height=366&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/JVgWZE/'>Flex—Justified height</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This effect is the result of the default alignment property that is explored in the [Alignment](./alignment.md) article.

## Practice

Put the time stamp next to the user name

<iframe height="365" style="width: 100%;" scrolling="no" title="Flex—Task 1" src="//codepen.io/andgordy/embed/rgGydm/?height=365&theme-id=36403&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andgordy/pen/rgGydm/'>Flex—Task 1</a> by And Gordy
  (<a href='https://codepen.io/andgordy'>@andgordy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

1. Fork your result of the task in the [Color article](./../Style/colors.md#texts). You can also fork the [prototype from the article](https://codepen.io/andgordy/pen/qGXwmx).
2. In each of the three items, change the parent container of the user name and the timestamp containers into a flex parent container. This should position timestamp next to the user name.