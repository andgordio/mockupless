# Switch

<!-- todo: explain assigning the opposite value in details -->
<!-- todo: maybe provide with a couple more complex examples -->

```css
.aniswitch {
  transition: all .2s;
}
```

```html
<div class="flex items-center justify-center mt-8">
  <div class="flex items-center w-full max-w-sm cursor-pointer border border-grey-lighter py-3 pl-6 pr-5 rounded-full" @click="doHideCompleted = !doHideCompleted">
    <div class="flex-1">
      Hide completed
    </div>
    <div class="w-8 rounded-full bg-grey-light aniswitch" :class="{'bg-teal': doHideCompleted}">
      <div class="w-4 h-4 rounded-full bg-white border border-grey-light aniswitch" :class="{'ml-4 border-teal': doHideCompleted}"></div>
    </div>
  </div>
</div>
```

```js
doHideCompleted: false
```