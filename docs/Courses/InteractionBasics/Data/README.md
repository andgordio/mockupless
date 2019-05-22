# Storing data

<!-- ![illustration for variables and data](./media/il-data.png) -->
<!-- todo: illustration: storing in containers. Idea: instead of using old-fashioned analogies like construction site, design something more futuristic.  -->

When prototyping interactive experiences, you have to decide whether you should place some of your content directly in the layout or store it separately as **data**. To make this decision quickly and efficiently, you need to understand *why* you should store some content separately from the layout in the first place. Two main reasons—making content dynamic and saving user input—are explored in this article.

### Dynamic content

All text, images, and styles you add to your HTML are **hard-coded** by default. This means you cannot change them after the prototype is launched in a browser. But interactivity means that some things *have* to change when users interact with an interface. Take an example of a user tapping on the *Explore* tab in a basic UI:

![two wireframes demoing the changes when moving from Newsfeed tab to Explore](./media/dynamic-content.png)

A single action requires multiple transformations:

- The title in the header changes from “Newsfeed” to “Explore”.
- The contents of the prototype change entirely.
- The style of the *Newsfeed* button in the tab bar changes to unselected grey, and *Explore* is selected and becomes teal.
- The badge under the *Explore* tab that indicates updates vanishes.

To enable all these transformations, you will store selected content and information about component states separately from layout, together with information provided by users.

### User input

With all kinds of form controls available to you in HTML, you may want to save user input and use it somewhere in the prototype. For example, an Events list populated with events created by a user:
<!-- todo: link: to Layout basics with form controls -->

![wireframes of event creation view and events list populated with created event](./media/user-input.png)

The name and the calendar input become a list item, and the date is used to create the group header. To prototype this kind of experience, you need to save information taken from a user in one view and display it in another.

Special containers called **variables** allow you to store contents, states, and user input separately from layout to allow this information to be updated during interaction with a prototype. Variables and their data types are explored in the next article. 