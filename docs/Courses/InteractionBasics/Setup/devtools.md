# Dev tools

In Layout basics you’ve learnt how to inspect your HTML and CSS code in Chrome developer tools. Vue.js has its own dev tools, that allow you to see changes in your prototype’s code live when interacting with it. Below is a step-by-step manual for installing and using the tools:
<!-- todo: link: to inspecting html/css in Layout basics. -->

## Install

<video width="100%" controls muted class="video afterh2">
  <source src="./media/devtools-1.mp4" type="video/mp4">
</video>

1. Install Vue.js dev tools extension from [chrome web store](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd). It’s also available for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/).
2. Right-click Vue icon on the right side of Chrome's toolbar and select **Manage Extensions**. If you don't see the icon, open Chrome menu and find it there.
3. In the extension settings scroll down to **Allow access to file URLs** and turn it on. This allows devtools to identify Vue when you open .html files on your computer.
4. Close the settings tab and **restart Chrome**.

## Use

<video width="100%" controls muted class="video afterh2">
  <source src="./media/devtools-2.mp4" type="video/mp4">
</video>

1. Download the [template](./README.md) and open it in Chrome. The Vue icon is supposed to become green, indicating that Vue.js is detected on the page.
2. Open developer tools: *option+command+I* or *Menu → More Tools → Developer Tools*
3. Find a tab called Vue and select it. If the Vue tab is not visible, check the **»** menu. You should see the two-pane layout with selectable `root` element in the upper section.

In the next section of the course you will start adding variables to your prototypes, and dev tools will allow you to see them, edit them and track changes—all in the comfort of Chrome. 