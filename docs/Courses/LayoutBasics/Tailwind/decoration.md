# Decoration

## Background

### Color

To apply a color from the default Tailwind color pallete, use a class starting with `bg-` followed by one of the [colors](./core.md#color), optionally with a shade:

```html
<div class="bg-teal"></div>
<div class="bg-pink-darker"></div>
<div class="bg-yellow-light"></div>
```

### Position

Start with `bg-` and use either single-direction suffix like `bottom` or `right`, or two-direction one like `left-top` or `right-bottom`. In a pair the horizontal should go first.

```html
<div class="bg-top"></div>
<div class="bg-bottom-left"></div>
<div class="bg-top-right"></div>
```

### Repeat

```html
<div class="bg-repeat"></div>
<div class="bg-no-repeat"></div>
<div class="bg-repeat-x"></div>
<div class="bg-repeat-y"></div>
```
### Size

```html
<div class="bg-auto"></div>
<div class="bg-cover"></div>
```

## Border

### Position and width

| class          | side        | width (px)  |
|:---------------|:------------|:------------|
| border         |             | -0          |
|                | -t          |             |
|                | -r          | -2          |
|                | -b          | -4          |
|                | -l          | -8          |

- if no suffix for side is used the style is applied to **all borders by default**
- if no suffix for width is used 1px is applied
- multiple classes can be used to apply different styles to different borders

```html
<div class="border"></div> 
<div class="border-t"></div>
<div class="border-b-2"></div>
<div class="border-t border-l border-b-4 border-r"></div> <!-- this container has 1px top, left and right borders, and 4px bottom one -->
```

### Color

To apply a color from the default Tailwind color pallete, use a class starting with `border-` followed by one of the [colors](./core.md#color), optionally with a shade:

```html
<div class="border border-pink"></div>
<div class="border border-grey-lighter"></div>
<div class="border border-indigo-dark"></div>
```

### Style

```html
<div class="border border-solid"></div>
<div class="border border-dashed"></div>
<div class="border border-dotted"></div>
<div class="border border-none"></div>
```

## Corner radius

| class          | side        | size        |
|:---------------|:------------|:------------|
| rounded        |             | -none       |
|                | -t          | -sm         |
|                | -r          |             |
|                | -b          | -lg         |
|                | -l          | -full       |
|                | -l          |             |
|                | -tl         |             |
|                | -tr         |             |
|                | -bl         |             |
|                | -br         |             |

- if no suffix for side is used the style is applied to **all borders by default**
- if no suffix for width is used .25rem is applied
- unlike color and style, radius doesn't require a defined [position and width](#position-and-width)

```html
<div class="rounded"></div>
<div class="rounded-full"></div> <!--pill shape-->
<div class="rounded-t-lg"></div>
```

## Opacity

There are five pre-defined classes, each representing a corresponding value in percents

```html
<div class="opacity-100"></div> <!--default-->
<div class="opacity-75"></div>
<div class="opacity-50"></div>
<div class="opacity-25"></div>
<div class="opacity-0"></div>
```

## Shadow

There are 6 basic shadows styles, a perfectly suitable set for prototyping:

```html
<div class="shadow"></div> <!--default-->
<div class="shadow-md"></div>
<div class="shadow-lg"></div>
<div class="shadow-inner"></div>
<div class="shadow-outline"></div>
<div class="shadow-none"></div>
```