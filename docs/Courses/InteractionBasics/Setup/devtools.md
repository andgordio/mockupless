# Dev tools

![vue.js devtools in Chrome developer tools](./images/devtools-2.png)
<!-- todo: create a better image -->
<!-- todo: write a proper intro to this article -->

## Setup
<!-- todo: create images for (probably) every step with key areas highlighted -->
1. Install Vue.js devtools from [Chrome web store](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd).
2. Right-click Vue icon on the right side of Chrome's toolbar and select **Manage Extensions**. If you don't see the icon open Chrome menu and find it there.
3. In the extension settings scroll down to **Allow access to file URLs** and turn it on. This allows devtools to identify Vue when you open .html files on your computer.
4. Close the settings tab and **restart Chrome**.

## Use
<!-- todo: create images for (probably) every step with key areas highlighted -->
1. Open .html file with Vue.js imported into it — for example, the template from the [previous step](./README.md). The Vue icon is supposed to become green, indicating that Vue.js is detected on the page.
2. Open developer tools: *option+command+I* or *Menu → More Tools → Developer Tools*
3. Find a tab called Vue and select it. If the Vue tab is not visible, check the **»** menu

<!-- todo: decide whether this tip or step 4 in Setup makes better sense :::tip Troubleshooting
If the Vue icon is green, but you don't see the Vue tab in the Developer tools, restart Chrome and try again. This sometimes occures once right after installing Vue dev tools extensions.
::: -->

